define ->
  class Item extends Backbone.Model
    urlRoot: '/v1/items'
    url: ->
      if @get '_id'
        console.log "#{@urlRoot}?_id=#{@get '_id'}"
        return "#{@urlRoot}?_id=#{@get '_id'}"

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

  return Item