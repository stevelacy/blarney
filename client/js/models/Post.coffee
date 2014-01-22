define (require) ->
  User = require "models/User"

  class Item extends Backbone.Model
    urlRoot: '/v1/posts'
    casts:
      author: User
    url: ->
      ###
      if @get '_id'
        console.log "#{@urlRoot}?_id=#{@get '_id'}"
        return "#{@urlRoot}?_id=#{@get '_id'}"
      ###
      if @get 'id'
        console.log "#{@urlRoot}/#{@get 'id'}"
        return "#{@urlRoot}/#{@get 'id'}"

      if @get 'author'
        console.log "#{@urlRoot}?populate=author"
        return "#{@urlRoot}?populate=author"

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