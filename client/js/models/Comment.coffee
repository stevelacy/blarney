define ->
  class Item extends Backbone.Model
    urlRoot: '/v1/comments'
    url: ->
      if @get 'post'
        return "#{@urlRoot}/?populate=post&populate=author"   
      return @urlRoot
  return Item