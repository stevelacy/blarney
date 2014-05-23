db = require '../mongodb'
User = db.model 'User'

passport = require "passport"
FacebookStrategy = require("passport-facebook").Strategy

config = require '../config'
app = require './express'

handleFunction = (token, tokenSecret, profile, cb) ->
  User.findOne {handle:profile.username}, (err, user) ->
    return cb err if err?
    profileUpdate =
      id: String profile._json.id
      token: token
      tokenSecret: "tokenSecret"
      name: profile._json.name
      handle: profile._json.username
      description: profile._json.bio
      followers: 0
      location: profile._json.locale
      image: "https://graph.facebook.com/#{profile._json.username}/picture"
      website: profile._json.url
      verified: profile._json.verified
      provider: "facebook"
    if user?
      user.set profileUpdate
      user.save cb
    else
      User.create profileUpdate, (err, doc) ->
        return cb err if err?
        cb null, doc

strategy = new FacebookStrategy
  clientID: config.facebook.clientID
  clientSecret: config.facebook.clientSecret
  callbackURL: config.facebook.callback
, handleFunction

passport.use strategy

passport.serializeUser (user, cb) ->
  cb null, user._id

passport.deserializeUser (id, cb) ->
  User.findById id, cb

app.get '/auth/facebook', passport.authenticate 'facebook'
app.get '/auth/facebook/callback', passport.authenticate 'facebook',
  successRedirect: '/'
  failureRedirect: '/login?failed=true'

app.get '/logout', (req, res) ->
  req.logout()
  res.redirect '/'

module.exports = passport