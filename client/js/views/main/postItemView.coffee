define (require) ->
  
  templ = require "templates/main/card"

  class View extends Backbone.Marionette.ItemView
    className: " content-cards bg-white-pure box-shadow-light align-left trans"
    render: ->
      @$el.html templ
        item: @model
      console.log @model
      return @

  
