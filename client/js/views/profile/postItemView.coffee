define (require) ->
  
  templ = require "templates/profile/itemView"

  class View extends Backbone.Marionette.ItemView

    render: ->
      @$el.html templ
        item: @model
      return @

  
