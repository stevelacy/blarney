define ->
  class Item extends Backbone.Model
    urlRoot: '/v1/comments'
    url: ->
      if @get '_id'
        console.log "#{@urlRoot}?_id=#{@get '_id'}"
        return "#{@urlRoot}?_id=#{@get '_id'}"
      return @urlRoot
  return Item