define (require) ->
  
  templ = require "templates/search/posts"
  itemView = require "views/search/postItemView"


  class View extends Backbone.Marionette.CompositeView
    itemView: itemView
    template: templ
    initialize: ->
      @listenTo @collection, "sync", @render
      return @
