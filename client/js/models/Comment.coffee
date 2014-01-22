define ->
  class Item extends Backbone.Model
    urlRoot: '/v1/comments'
    url: ->
      if @get 'post'
        console.log "#{@urlRoot}/?populate=post"
        return "#{@urlRoot}/?populate=post"   
      return @urlRoot
  return Item