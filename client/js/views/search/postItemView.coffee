define (require) ->
  
  templ = require "templates/search/card"

  class View extends Backbone.Marionette.ItemView
    className: " main-box-cards bg-white-pure box-shadow-light align-left trans"
    render: ->
      console.log @model
      @$el.html templ
        item: @model
      return @

  
