define (require) ->
  User = require "models/User"

  class Item extends Backbone.Model
    urlRoot: '/v1/comments'
    url: ->
      if @get 'post'
        return "#{@urlRoot}/?populate=post&populate=author"   
      return @urlRoot
      
    casts:
      author: User
    parse: (res) ->
      return res unless @casts?
      for k,v of @casts
        res[k] = new v res[k], parse: true
        return res
  return Item