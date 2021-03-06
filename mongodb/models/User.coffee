{Schema} = require 'mongoose'


profileBackgrounds = [
    'bg1.jpg'
    'bg2.jpg'
    'bg3.jpg'
    'bg4.jpg'
  ]
randIndex = Math.floor(Math.random() * profileBackgrounds.length)
randBG = profileBackgrounds[randIndex]



noWrite = ->
  perms =
    read: true
    write: false
  return perms

hidden = ->
  perms =
    read: false
    write: false
  return perms

User = new Schema
  handle:
    type: String
    required: true
    index:
      unique: true
    authorize: noWrite

  name:
    type: String
    required: true
    authorize: noWrite

  id:
    type: String
    required: true
    index:
      unique: true
    authorize: noWrite

  level:
    type: String
    required: true
    default: 0
    authorize: noWrite

  token:
    type: String
    required: true
    select: false
    authorize: hidden

  tokenSecret:
    type: String
    required: true
    select: false
    authorize: hidden

  image:
    type: String
    default: "https://si0.twimg.com/sticky/default_profile_images/default_profile_0_normal.png"
    authorize: noWrite

  background:
    type: String
    default: '/images/bg/' + randBG

  url:
    type: String
    authorize: noWrite

  description:
    type: String
    authorize: noWrite

  website:
    type: String
    authorize: noWrite

  location:
    type: String
    authorize: noWrite

  followers:
    type: Number
    default: 0
    authorize: noWrite

  verified:
    type: Boolean
    default: false
    authorize: noWrite

  # Dates
  created_at:
    type: Date
    default: Date.now
    authorize: noWrite

  updated_at:
    type: Date
    default: Date.now
    authorize: noWrite
    
  provider:
    type: String


User.methods.authorize = (req) ->
  loggedIn = req.user?
  isAuthor = loggedIn and String(req.user._id) is String(this._id)
  perms =
    read: true
    write: isAuthor
    delete: false
  return perms

module.exports = User
