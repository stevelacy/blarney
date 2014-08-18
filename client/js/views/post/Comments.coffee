define (require) ->
  
  templ = require "templates/post/comments"
  itemView = require "views/post/commentItemView"


  class View extends Backbone.Marionette.CompositeView
    itemView: itemView
    template: templ

    initialize: ->
      @listenTo @collection, "sync", @render
      return @
