define ["models/User", "models/Item", "templates/profile/main"],(User, Item ,templ) ->


	class View extends Backbone.Marionette.View
				
		render: ->
			console.log "handle #{@id}"
			@model = new User id: @id
			@model.fetch
				success: (data) =>
					@json = data.toJSON()
					console.log @json
					@itemModel = new Item author: @json._id
					console.log "username #{@json.handle}"
					@itemModel.fetch
						success: (items) =>
							@.$el.html templ profile:@json, posts: items.toJSON()
							console.log @json
			return @