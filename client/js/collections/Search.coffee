define (require) ->
  Post = require "models/Post"

  class Items extends Backbone.Collection
    url: ->
      console.log "/s/#{@query}"
      return "/s/#{@query}"

    model: Post
  return Items