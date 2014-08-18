define (require) ->
  User = require "models/User"

  class Item extends Backbone.Model
    urlRoot: '/v1/posts'
    idAttribute: "_id"
    casts:
      author: User
    url: ->
      if @get 'id'
        return "#{@urlRoot}/#{@get 'id'}"

      if @get 'author'
        return "#{@urlRoot}?author=#{@get 'author'}"

      if @get 'post'
        return "#{@urlRoot}/#{@get 'post'}?populate=author"
      return @urlRoot

    parse: (res) ->
      return res unless @casts?
      for k,v of @casts
        res[k] = new v res[k], parse: true
      return res

  return Item