define (require) ->
  templ = require "templates/mainItemView"

  class View extends Backbone.Marionette.ItemView
    template: templ
    tagName: 'div'