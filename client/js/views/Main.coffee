define ['models/Post','collections/Users' , 'templates/main'], (Post, Users, templ) ->

  users = new Users()

  class View extends Backbone.Marionette.View

    render: ->
      items = new Post author:true

      items.fetch
        success: (items) =>
          console.log items
          @.$el.html templ items:items

      return @

    events:
      "click input[type=button]": "runTest"

    runTest: (e) ->
      console.log $("#test").val()

  

