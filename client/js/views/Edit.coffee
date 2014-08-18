define (require) ->

  Post = require "models/Post"
  templ = require "templates/edit/main"
  auth = require "app/auth"
  marked = require "vendor/marked"

  marked.setOptions
    gfm: true
    sanitize: true
    pedantic: true
    highlight: (code, lang) ->
      return prettyPrintOne code, lang, true


  class View extends Backbone.Marionette.View

    initialize: ->
      @model = new Post id: @id
      @listenTo @model, "sync", @render
      @model.fetch()
      return @

    render: ->
      return @ unless @model.get "content"
      @$el.html templ
        item: @model
        auth: auth
      
      markdown = marked @model.get "content"
      @$el.find(".preview").html markdown
      return @

    events:
      "submit form": "saveData"
      "keyup #message": "changed"

    focusInput: (e) ->
      setTimeout =>
        @$el.find(".title").focus()
      , 1

    saveData: (e) ->
      e.preventDefault()
      itemData = @getFormData(@$el.find("form"))
      console.log @model

      @model.save itemData,
        patch: true
        success: (data) ->
          Backbone.history.navigate "/p/#{data.id}",
            trigger: true
        error: (model, data) ->
          console.log data
          Object.keys(data.responseJSON.error.errors).forEach (data) ->
            $("[name='#{data}']").addClass "error"

    changed: (e) ->
      markdown = marked $(e.target).val()
      @$el.find(".preview").html markdown

    getFormData: (form) ->
      unindexed_array = form.serializeArray()
      indexed_array = {}
      unindexed_array.forEach (n) ->
        indexed_array[n["name"]] = n["value"]

      console.log indexed_array
      return indexed_array
