define ["collections/Posts", "collections/Users" , "templates/main", "app/auth"], (Posts, Users, templ, auth) ->


  class View extends Backbone.Marionette.View

    render: ->
      items = new Posts 
        author: true
        limit: 2

      items.fetch
        success: (items) =>
          console.log items.toJSON()
          @.$el.html templ items: items.toJSON()

      return @

    ###
    initialize: ->
      @model = new Posts
        limit: 2
      @listenTo @model, "sync", @render
      @model.fetch()
      return @

    render: ->
      return @ unless @model.get("author")
      @$el.html templ
        items: @model
        auth: auth
      console.log @model
      return @
    ###
    events:
      "click input[type=button]": "runTest"

    runTest: (e) ->
      console.log $("#test").val()

  

