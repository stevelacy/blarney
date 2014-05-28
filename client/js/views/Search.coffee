define (require) ->

  Search = require "collections/Search"
  templ = require "templates/search/main"
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
      return @

    render: ->
      @searchView = new searchView
        query: @query
      @$el.html templ
        query: @query
        item: @posts
      postDiv = @$el.find '.main-box'
      postDiv.html @postsView.el

      searchDiv = @$el.find '.search'
      searchDiv.html @searchView.render().el
      return @
