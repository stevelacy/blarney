define (require) ->

  Post = require "models/Post"
  
  class Items extends Backbone.Collection
    url: '/v1/posts?populate=author&limit=12'
    model: Post
    ###
    url: =>
      if @get 'author'
        return "#{@urlRoot}?populate=author"
      if @get '_id'
        return "#{@urlRoot}?_id=#{@get '_id'}"
      if @get 'limit'
        return "#{@urlRoot}?limit=#{@get 'limit'}"
      
      return @urlRoot
    console.log @url
    ### 
  return Items