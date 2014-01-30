define (require) ->

  Post    = require "models/Post" 
  User    = require "models/User"
  templ   = require "templates/post/main"
  auth    = require "app/auth"
  Notify    = require "app/notify"
  CommentsView = require "views/post/Comments"
  Comments = require "collections/Comments"
  Comment = require "models/Comment"

  class View extends Backbone.Marionette.View
    
    initialize: ->
      # main model
      @model = new Post post: @id
      @listenTo @model, "sync", @render
      @model.fetch()

      # submodel (comments)
      @comments = new Comments
      @comments.post = @id
      @commentsView = new CommentsView
        collection: @comments
      @comments.fetch()
      return @

    render: ->
      return @ unless @model.get 'author'
      @$el.html templ
        item: @model
        auth: auth
      commentDiv = @$el.find '.comments-box'
      commentDiv.html @commentsView.el
      return @

    events:
      "submit form": "saveComment"

    saveComment: (e) ->
      e.preventDefault()
      itemData = @getFormData @$el.find "form"
      @comment = new Comment
        post: @id
      @comment.save itemData,
        success: (data) =>
          console.log data
          @comment.set 'author', new User
            _id: auth.id()
            handle: auth.handle()
            name: auth.name()
            image: auth.image()
          @comments.push @comment
          @$el.find("#content").val ""
        error: (data) =>
          console.log data
          notify = new Notify
            message: "Comment error"
  

    getFormData: (form) ->
      unindexed_array = form.serializeArray()
      indexed_array = {}
      unindexed_array.forEach (n) ->
        indexed_array[n["name"]] = n["value"]

      return indexed_array
