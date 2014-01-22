define (require) ->
  
  Comments = require "collections/Comments"
  Users = require "collections/Users"
  templ = require "templates/comments"

  comments = new Comments()
  users = new Users()

  class View extends Backbone.Marionette.View

    render: ->
      comments.fetch
        success: (comments) =>
          console.log comments.models
          users.fetch
            success: (users) =>
              @$el.html templ comments:comments.toJSON(), users: users.toJSON()
      return @

    events:
      "click input[type=button]": "runTest"

    runTest: (e) ->
      console.log $("#test").val()

  

