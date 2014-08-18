define (require) ->
  User = require "models/User"
  Comment = require "models/Comment"

  class Comments extends Backbone.Collection

    url: ->
      "/v1/comments?post=#{@post}&populate=author"

    model: Comment

  return Comments
