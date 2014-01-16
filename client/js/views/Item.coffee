define ["models/Item", "models/User", "templates/post/main"],(Item, User, templ) ->


	class View extends Backbone.Marionette.View
			
		render: ->
			console.log @.id
			@model = new Item id: @id
			@model.fetch
				success: (data) =>
					@json = data.toJSON()
					console.log @json
					@userModel = new User id: @json.author
					@userModel.fetch
						success: (user) =>
							@.$el.html templ item:@json, user: user.toJSON()
							console.log user.toJSON()
			return @
		events:
			"submit form": "saveData"
			"click .delete": "destroyModel"

		saveData: (e) ->
			e.preventDefault()
			itemData = @getFormData(@$el.find("form"))
			console.log itemData

			@model.save itemData, 
				patch: true
				success: (data) ->
					console.log data
		destroyModel: (e) ->
			e.preventDefault()
			@model.destroy
				success: ->
					console.log "model destroyed"
			
			

		getFormData: (form) ->
			unindexed_array = form.serializeArray()
			indexed_array = {}
			unindexed_array.forEach (n) ->
				indexed_array[n["name"]] = n["value"]

			return indexed_array
