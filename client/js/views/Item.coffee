define ["models/Item", "models/User", "templates/post/main", "app/auth"],(Item, User, templ, auth) ->


	class View extends Backbone.Marionette.View
			
		render: ->
			console.log @.id
			@model = new Item id: @id, author:true
			@model.fetch
				success: (data) =>
					@json = data.toJSON()
					console.log @json
					@userModel = new User _id: @json.author
					@userModel.fetch
						success: (user) =>
							@.$el.html templ item:@json, user: user.toJSON(), auth:auth
							console.log user.toJSON()
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
