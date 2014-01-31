define (require) ->

  Search = require "collections/Search"
  templ = require "templates/search/main"
  auth = require "app/auth"
  postsView = require "views/search/Posts"
  searchView = require "views/search/Search"  


  class View extends Backbone.Marionette.View

    initialize: ->
      @query = @options.query
      @query ?= ''
      # main model
      @posts = new Search
      @posts.query = @query
      @postsView = new postsView
        collection: @posts
      @listenTo @posts, "sync", @render
      @posts.fetch()
      
      # search view
      @searchView = new searchView
        query: @query
      return @

    render: ->
      #return @ unless @posts.get('author')
      @$el.html templ
        query: @query
        item: @posts
        auth: auth
      postDiv = @$el.find '.content'
      postDiv.html @postsView.el

      searchDiv = @$el.find '.search'
      searchDiv.html @searchView.render().el    
      return @