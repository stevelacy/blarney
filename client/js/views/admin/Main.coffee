define (require) ->

  templ = require "templates/admin/main"
  error401 = require "templates/error/401"
  auth = require "app/auth"

  class View extends Backbone.Marionette.View
    render: ->
      return @$el.html error401 unless auth.level() == "5"
      @$el.html templ
      return @
  
