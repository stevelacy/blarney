fs = require "fs"
path = require "path"
db = require "../mongodb"
app = require "./express"
config = require "../config"
amazon = require "./amazon"

rootFile = path.join "public", "index.html"
User = db.model "User"
Post = db.model "Post"

app.get "/s/:query/:limit?*", (req, res) ->
  limit = 12
  limit = Number(req.params.limit) if req.params.limit and typeof Number(req.params.limit) is "number"
  Post.find({title: {$regex: req.params.query, $options: "i"}})
  .limit(limit)
  .populate('author').exec (err, posts) ->
    res.json posts

app.get '/js/loggedIn.js', (req, res) ->
  src = "window._loggedIn = #{req.isAuthenticated()};"
  if req.user
    src += "\r\nwindow._id = \"#{req.user._id}\";"
    src += "\r\nwindow._name = \"#{req.user.name}\";"
    src += "\r\nwindow._level = \"#{req.user.level}\";"
    src += "\r\nwindow._image = \"#{req.user.image}\";"
    src += "\r\nwindow._handle = \"#{req.user.handle}\";"

  res.set 'Content-Type', 'application/javascript'
  res.send 200, src  


app.get "/*", (req, res) ->
  res.sendfile rootFile, {user: req.user}


# Amazon storage

app.post "/upload", (req, res) ->
  return res.render "error/400" unless req.user?
  return res.render "error/400" unless req.files.image?
  return res.render "error/400", {error:"Wrong filetype"} unless req.files.image.type in config.allowedFileTypes

  toPath = path.join "/images/", req.user.handle 
  fStream = fs.createReadStream req.files.image.path
  put = amazon.putStream fStream, toPath,
    "Content-Length": req.files.image.size
    "Content-Type": req.files.image.type
  ,(err, result) ->
    return res.render "error/500" if err?
    console.log put.url
    User.findById req.user._id, (err, user) ->
      return res.render "error/500" if err?
      user.background = put.url
      user.save (err, user) ->
        return res.render 'error/500' if err?
        res.send result:'success'
