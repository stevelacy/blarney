app = require './express'
path = require 'path'


rootFile = path.join 'public', "index.html"


app.get '/checkauth', (req, res) ->
  return res.send 401 unless req.user?
  res.send 200

app.get '/*', (req, res) ->
  res.sendfile rootFile, {user: req.user}
