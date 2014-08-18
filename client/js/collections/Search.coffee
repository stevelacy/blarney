define (require) ->
  Post = require "models/Post"

  class Items extends Backbone.Collection
    url: ->
      return "/s/#{@query}?limit=12"

    model: Post
  return Items
