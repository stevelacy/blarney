mongoose = require "mongoose"
{Schema} = mongoose


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

Post = new Schema
  author:
    type: Schema.Types.ObjectId
    ref: 'User'
    authorize: noWrite

  title:
    type: String
    required: true

  content:
    type: String
    required: true


  kind:
    type: String
    required: true
    default: "public"
    enum: [
      "private"
      "public"
    ]


  # Dates
  created_at:
    type: Date
    default: Date.now
    authorize: noWrite

  updated_at:
    type: Date
    default: Date.now
    authorize: noWrite

Post.methods.search = (opt, cb) ->
  cb null, {query: opt.q}

Post.methods.authorize = (req) ->
  isAuthor = false unless req.user?
  loggedIn = req.user?
  isAuthor = loggedIn and String(req.user._id) is String(this._id)
  perms =
    read: true
    write: isAuthor
    delete: isAuthor
  return perms

Post.statics.authorize = (req) ->
  loggedIn = req.user?
  perms =
    read: true
    write: loggedIn
  return perms

module.exports = Post
