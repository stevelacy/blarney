define (require) ->
  templ = require "templates/banner"
  auth = require "app/auth"

  class View extends Backbone.Marionette.View

    render: ->
      @$el.html templ auth: auth
      return @

  

