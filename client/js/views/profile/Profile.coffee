define (require) ->
  User = require "models/User"
  Post = require "models/Post"
  templ = require "templates/profile/main"
  auth = require "app/auth"


  class View extends Backbone.Marionette.View

    initialize: ->
      $('body').keyup @closeView


    render: ->
      @model = new User 
        handle: @id
      @model.fetch
        success: (data) =>
          @json = data.toJSON()
          @itemModel = new Post author: @json[0]._id
          @itemModel.fetch
            success: (items) =>
              @$el.html templ 
                profile:@json
                posts: items.toJSON()
                auth: auth
      return @

    events:
      "click #edit-cover-button": "editBoxToggle"
      "change #file": "setFile"
      "click #sub-cover": "fileLoad"
      "keyup": "closeView"



    ## functions


    editBoxToggle: =>
      @$el.find("#edit-cover-box").fadeToggle()

    closeView: (e) ->
      return true unless e.keyCode == 27
      @$el.find("#edit-cover-box").fadeOut()      

    setFile: (e) =>
      input = e.currentTarget
      if input.files and input.files[0]
        reader = new FileReader()
        console.log input.files[0]
        reader.onload = (e) =>
          @$el.find("#profile-img").attr "src", e.target.result
        reader.readAsDataURL input.files[0]

    fileLoad: (e) ->
      e.preventDefault()
      formData = new FormData @$el.find("#form-cover")[0]
      xhr = new XMLHttpRequest()
      xhr.open "post", "/upload", true
      xhr.upload.onprogress = (e) =>
        if e.lengthComputable
          percentage = (e.loaded / e.total) * 100
          @$el.find(".progress .bar").css "width", percentage + "%"

      xhr.onerror = (e) ->
        console.log xhr.responseText

      xhr.onload = =>
        result = JSON.parse xhr.responseText
        if result.result == "success"
          @$el.find('#upload-box').slideToggle()
          @$el.find("#edit-cover-box").fadeToggle()

      xhr.send formData
