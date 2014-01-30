define (require) ->
  
  templ = require "templates/profile/posts"
  itemView = require "views/profile/postItemView"


  class View extends Backbone.Marionette.CompositeView
    itemView: itemView
    template: templ

    initialize: ->
      @listenTo @collection, "sync", @render
      return @
