define ["models/Post","app/Router", "templates/new/main"],(Post, Router, templ) ->


	class View extends Backbone.Marionette.View
				
		render: ->
			@model = new Post
			@$el.html templ
			return @
		events:
			"submit form": "saveData"
			"click #delete": "destroyModel"

		saveData: (e) ->
			e.preventDefault()
			itemData = @getFormData(@$el.find("form"))
			console.log itemData

			@model.save itemData, 
				success: (data) ->
					console.log data
		destroyModel: (e) ->
			e.preventDefault()
			@model.destroy
				success: () ->
					console.log "model destroyed"
			
			

		getFormData: (form) ->
			unindexed_array = form.serializeArray()
			indexed_array = {}
			unindexed_array.forEach (n) ->
				indexed_array[n["name"]] = n["value"]

			return indexed_array
