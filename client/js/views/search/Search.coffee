define (require) ->
  templ = require "templates/search/search"

  class View extends Backbone.Marionette.View

    initialize: ->
      console.log  @$el
      @query = @options.query
      @query ?= ''
      return @

    render: ->
      @$el.html templ
        query: @query
      return @

    events:
      "click .search-button": "search"

    search: (e) ->
      console.log "called"
      e.preventDefault()
      query = @$el.find(".search-term").val()
      Backbone.history.navigate "/search/#{query}",
        trigger: true      
  

