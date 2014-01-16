define ['templates/itemRow'],(templ) ->
  class View extends Backbone.Marionette.ItemView
    tagName: "li"
    template: templ