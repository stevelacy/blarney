define (require) ->
  User = require "models/User"

  class Item extends Backbone.Model
    urlRoot: '/v1/posts'
    casts:
      author: User
    url: ->
      if @get 'id'
        console.log "#{@urlRoot}/#{@get 'id'}"
        return "#{@urlRoot}/#{@get 'id'}"

      if @get 'author'
        console.log "#{@urlRoot}?author=#{@get 'author'}"
        return "#{@urlRoot}?author=#{@get 'author'}"

      if @get 'post'
        console.log "#{@urlRoot}/#{@get 'post'}?populate=author"
        return "#{@urlRoot}/#{@get 'post'}?populate=author"        
      return @urlRoot

    parse: (res) ->
      return res unless @casts?
      for k,v of @casts
        res[k] = new v res[k], parse: true
      return res

  return Item