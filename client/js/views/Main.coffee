define ['collections/Posts','collections/Users' , 'templates/main'], (Posts, Users, templ) ->

  users = new Users()

  class View extends Backbone.Marionette.View

    render: ->
      items = new Posts author:true

      items.fetch
        success: (items) =>
          console.log items.toJSON()
          @.$el.html templ items:items.toJSON()

      return @

    events:
      "click input[type=button]": "runTest"

    runTest: (e) ->
      console.log $("#test").val()

  

