define (require) ->

  Posts = require "collections/Posts"
  User = require "models/User"
  templ = require "templates/main"
  auth = require "app/auth"
  postsView = require "views/main/Posts"




  class View extends Backbone.Marionette.View

    initialize: ->
      # main model
      @posts = new Posts
      @postsView = new postsView
        collection: @posts
      @listenTo @posts, "sync", @render
      @posts.fetch()
      return @

    render: ->
      #return @ unless @posts.get('author')
      @$el.html templ
        item: @posts
        auth: auth
      postDiv = @$el.find '.content'
      postDiv.html @postsView.el
      return @

  

