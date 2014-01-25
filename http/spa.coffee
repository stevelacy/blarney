fs = require "fs"
path = require "path"
db = require "../mongodb"
app = require "./express"
config = require "../config"
amazon = require "./amazon"

rootFile = path.join "public", "index.html"
User = db.model "User"


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