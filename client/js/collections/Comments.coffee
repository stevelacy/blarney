define (require) ->
  
  class Comments extends Backbone.Collection
    url: '/v1/comments'
  return Comments
