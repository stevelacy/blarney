express = require "express"
connect = require "connect"
path = require "path"


passport = require "passport"
config = require "../config"
db = require "../mongodb"

app = express()
app.use express.compress()
app.use express.static 'public'
app.use express.methodOverride()
app.use express.bodyParser()
app.use express.cookieParser()

app.use express.session
  secret: config.cookieSecret
  maxAge: 31536000000

app.use passport.initialize()
app.use passport.session()


app.all '*', (req, res, next) ->
  return next() unless req.get 'Origin'
  res.set 'Access-Control-Allow-Origin', '*'
  res.set 'Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'
  res.set 'Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'
  return res.send 200 if 'OPTIONS' is req.method
  next()



if process.env.NODE_ENV is "production"
  app.disable "verbose errors"

if process.env.NODE_ENV is "development"
  app.use express.logger "dev"

module.exports = app
