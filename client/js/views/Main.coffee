define (require) ->
  Posts = require "collections/Posts"
  Users = require "collections/Users"
  templ = require "templates/main"
  auth = require "app/auth"


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

  

