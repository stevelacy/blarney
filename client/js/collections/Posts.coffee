define (require) ->

  Post = require "models/Post"
  
  class Items extends Backbone.Collection
    url: '/v1/posts?populate=author&limit=12'
    model: Post
  return Items