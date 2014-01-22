define (require) ->
  templ = require "templates/banner"
  auth = require "app/auth"

  class View extends Backbone.Marionette.View

    render: ->
      @$el.html templ auth: auth
      return @

    events:
      "click input[type=button]": "runTest"

    runTest: (e) ->
      console.log $("#test").val()

  

