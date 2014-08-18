define (require) ->
  
  templ = require "templates/main/card"

  class View extends Backbone.Marionette.ItemView
    className: "main-box-cards bg-white-pure box-shadow-light align-left trans"
    render: ->
      @$el.html templ
        item: @model
      return @

  
