define (require) ->

  templ = require "templates/footer"
  class Item extends Backbone.Marionette.View
    render: ->
      @$el.html templ
      return @