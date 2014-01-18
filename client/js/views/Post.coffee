define ["models/Post", "models/User", "templates/post/main", "app/auth"],(Post, User, templ, auth) ->


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
			"submit form": "comment"

		comment: (e) ->
			e.preventDefault()
			itemData = @getFormData(@$el.find("form"))
			console.log itemData

			@model.save itemData, 
				success: (data) ->
					console.log data
	
			
			

		getFormData: (form) ->
			unindexed_array = form.serializeArray()
			indexed_array = {}
			unindexed_array.forEach (n) ->
				indexed_array[n["name"]] = n["value"]

			return indexed_array
