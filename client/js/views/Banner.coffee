define (require) ->
  templ = require "templates/banner"
  auth = require "app/auth"

  class View extends Backbone.Marionette.View

    events:
      "click .navbar .user": "toggleNav"
    render: ->
      @$el.html templ auth: auth
      return @

    toggleNav: ->
      @$el.find(".user-nav").fadeToggle()
