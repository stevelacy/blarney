define (require) ->
  
  templ = require "templates/profile/itemView"

  class View extends Backbone.Marionette.ItemView
    className: "main-box-cards bg-white-pure box-shadow-light align-left"
    render: ->
      @$el.html templ
        item: @model
      return @

  
