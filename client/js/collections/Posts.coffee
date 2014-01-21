define ["models/Post"],(Post) ->
  class Items extends Backbone.Collection
    urlRoot: '/v1/items'
    model: Post
    url: =>
      if @get('author')
        return "#{@urlRoot}?populate=author"
      if @get '_id'
        return "#{@urlRoot}?_id=#{@get('_id')}"
      if @get 'limit'
        return "#{@urlRoot}?limit=#{@get('limit')}"

      console.log @urlRoot
      return @urlRoot
      
  return Items