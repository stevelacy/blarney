define (require) ->
  
  Post = require "models/Post"
  templ = require "templates/new/main"
  auth = require "app/auth"
  marked = require "vendor/marked"

  marked.setOptions
    gfm: true
    sanitize: true
    pedantic: true
    highlight: (code, lang) ->
      return prettyPrintOne code, lang, true


  class View extends Backbone.Marionette.View
        
    render: ->
      @model = new Post
      @$el.html templ
        auth: auth
      @focusInput()
      
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

      @model.save itemData,
        success: (data) ->
          Backbone.history.navigate "/p/#{data.id}",
            trigger: true
        error: (model, data) ->
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

      return indexed_array
