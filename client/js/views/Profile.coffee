define (require) ->
  User = require "models/User"
  Post = require "models/Post"
  templ = require "templates/profile/main"


  class View extends Backbone.Marionette.View
        
    render: ->
      console.log "handle #{@id}"
      @model = new User 
        handle: @id
      @model.fetch
        success: (data) =>
          @json = data.toJSON()
          @itemModel = new Post author: @json[0]._id
          @itemModel.fetch
            success: (items) =>
              @$el.html templ profile:@json, posts: items.toJSON()
      return @

    events:
      "click #edit-cover-button": "editBoxToggle"
      "change #file": "fileChange"
      "click #sub-cover": "fileLoad"



    editBoxToggle: ->
      $("#edit-cover-box").fadeToggle()


    ## functions

    setFile = (input) ->
      if input.files and input.files[0]
        reader = new FileReader()
        console.log input.files
        console.log input.files[0]
        reader.onload = (e) ->
          $("#profile-img").attr "src", e.target.result

        reader.readAsDataURL input.files[0]

    #$("#file").change ->
    fileChange: ->
      file = $("#file")
      fileArray = file.val().split(".").pop().toLowerCase()
      console.log file
      if $.inArray(fileArray, ["png", "jpg", "jpeg"]) is -1
        $("#status").text "Error, incorrect file type  .jpg, .jpeg, .png only"
      else
        $("#status").text ".jpg, .jpeg, .png only"
        setFile file

    #$("#sub-cover").on "click", (e) ->
    fileLoad: ->
      e.preventDefault()

      file = $("#file").val().split(".").pop().toLowerCase()
      if $("#file").val() < 1

      else if $.inArray(file, ["png", "jpg", "jpeg"]) is -1
        $("#status").text "Error, incorrect file type  .jpg, .jpeg, .png only"
      else
        formData = new FormData($("#form-cover")[0])
        xhr = new XMLHttpRequest()
        xhr.open "post", "/upload", true
        xhr.upload.onprogress = (e) ->
          if e.lengthComputable
            percentage = (e.loaded / e.total) * 100
            $(".progress .bar").css "width", percentage + "%"

        xhr.onerror = (e) ->
          console.log xhr.responseText

        xhr.onload = ->
          result = xhr.responseText
          console.log result
          slideUpload()
          showEditBox()

        xhr.send formData
        slideUpload()
