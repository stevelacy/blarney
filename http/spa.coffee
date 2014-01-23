app = require "./express"
path = require "path"


rootFile = path.join "public", "index.html"



app.get "/*", (req, res) ->
  res.sendfile rootFile, {user: req.user}


# Amazon storage

app.post "/upload", (req, res) ->
  return res.render 'error/400' unless req.user?
  return res.render 'error/400' unless req.files.image?
  return res.render 'error/400', {error:'Wrong filetype'} unless req.files.image.type in config.allowedFileTypes

  toPath = path.join '/images/', req.user.username 
  fStream = fs.createReadStream req.files.image.path
  put = client.putStream fStream, toPath,
    'Content-Length': req.files.image.size
    'Content-Type': req.files.image.type
  ,(err, result) ->
    return res.render 'error/500' if err?
    User.findOne {_id:req.user._id}, (err, user) ->
      user.background = put.url
      user.save (err, user) ->
        return res.render 'error/500' if err?
        res.send result:'success'
