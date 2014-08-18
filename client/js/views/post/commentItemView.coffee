define (require) ->
  
  templ = require "templates/post/commentTemplate"
  marked = require "vendor/marked"

  marked.setOptions
    gfm: true
    sanitize: true
    pedantic: true
    highlight: (code, lang) ->
      return prettyPrintOne code, lang, true

  class View extends Backbone.Marionette.ItemView

    render: ->
      @$el.html templ
        item: @model
      markdown = marked @model.get "content"
      @$el.find(".message").html markdown
      return @

  
