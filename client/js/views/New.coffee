define (require) ->
  
  Post = require "models/Post"
  templ = require "templates/new/main"
  auth = require "app/auth"


  class View extends Backbone.Marionette.View
        
    render: ->
      @model = new Post
      @$el.html templ
        auth: auth
      return @
    events:
      "submit form": "saveData"

    saveData: (e) ->
      e.preventDefault()
      itemData = @getFormData(@$el.find("form"))
      console.log itemData

      @model.save itemData, 
        success: (data) ->
          Backbone.history.navigate "/p/#{data.id}", 
            trigger: true
      

    getFormData: (form) ->
      unindexed_array = form.serializeArray()
      indexed_array = {}
      unindexed_array.forEach (n) ->
        indexed_array[n["name"]] = n["value"]

      return indexed_array
