define (require) ->

  Post = require "models/Post"
  
  class Items extends Backbone.Collection
    model: Post
    url: -> 
      return "/v1/posts?populate=author&limit=12&author=#{@author}" if @author
      return "/v1/posts?populate=author&limit=12"
  return Items