define (require) ->
  templ = require "templates/login"

  class View extends Backbone.Marionette.View
    initialize: ->
      $('body').keyup @closeView

    render: ->
      @$el.html templ
      return @
    events:
      "keyup": "closeView"
      "click #close-div": "closeViewClick"

    closeView: (e) ->
      return true unless e.keyCode == 27
      @$el.fadeOut()

    closeViewClick: ->
      @$el.fadeOut()