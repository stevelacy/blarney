define (require) ->
  
  templ = require "templates/post/commentTemplate"

  class View extends Backbone.Marionette.ItemView

    render: ->
      @$el.html templ
        item: @model
      return @

  
