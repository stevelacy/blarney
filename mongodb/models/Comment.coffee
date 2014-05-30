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

Comment = new Schema
  author:
    type: Schema.Types.ObjectId
    ref: 'User'
    authorize: noWrite

  content:
    type: String
    required: true

  post:
    type: Schema.Types.ObjectId
    ref: 'Post'
    authorize: noWrite

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

Comment.methods.authorize = (req) ->
  loggedIn = req.user?
  isAuthor = loggedIn and String(req.user._id) is String(this._id)
  perms =
    read: true
    write: isAuthor
    delete: isAuthor
  return perms

Comment.statics.authorize = (req) ->
  loggedIn = req.user?
  perms =
    read: true
    write: loggedIn
  return perms

module.exports = Comment
