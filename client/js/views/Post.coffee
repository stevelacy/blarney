define (require) ->

	Post    = require "models/Post" 
	User    = require "models/User"
	templ   = require "templates/post/main"
	auth    = require "app/auth"
	Comment = require "models/Comment"

	class View extends Backbone.Marionette.View
		
		initialize: ->
			@model = new Post post: @id
			@listenTo @model, "sync", @render
			@model.fetch()
			return @

		render: ->
			return @ unless @model.get('author')
			@$el.html templ
				item: @model
				auth: auth
			console.log @model
			return @

		events:
			"submit form": "saveComment"

		saveComment: (e) ->
			e.preventDefault()			
			comment = new Comment
				post: @id
			itemData = @getFormData(@$el.find("form"))

			comment.save itemData,
				success: (data) ->
					console.log data
	
			
			

		getFormData: (form) ->
			unindexed_array = form.serializeArray()
			indexed_array = {}
			unindexed_array.forEach (n) ->
				indexed_array[n["name"]] = n["value"]

			return indexed_array
