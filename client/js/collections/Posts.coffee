define ["models/Post"],(Post) ->
  class Items extends Backbone.Collection
    url: '/v1/items?populate=author'
    model: Post
  return Items