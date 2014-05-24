define (require) ->
  Post = require "models/Post"

  class Items extends Backbone.Collection
    url: ->
      return "/s/#{@query}"

    model: Post
  return Items