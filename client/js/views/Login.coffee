define (require) ->
  templ = require "templates/login"

  class View extends Backbone.Marionette.View
    
    render: ->
      @$el.html templ
      return @