define ['models/Item','collections/Users' , 'templates/main'], (Item, Users, templ) ->

  users = new Users()

  class View extends Backbone.Marionette.View

    render: ->
      items = new Item author:true

      items.fetch
        success: (items) =>
          test = items.toJSON()
          console.log test[0].author.name
          @.$el.html templ items:items.toJSON()

      return @

    events:
      "click input[type=button]": "runTest"

    runTest: (e) ->
      console.log $("#test").val()

  

