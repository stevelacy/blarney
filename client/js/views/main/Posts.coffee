define (require) ->
  
  templ = require "templates/main/posts"
  itemView = require "views/main/postItemView"


  class View extends Backbone.Marionette.CompositeView
    itemView: itemView
    template: templ

    initialize: ->
      @listenTo @collection, "sync", @render
      return @
  
