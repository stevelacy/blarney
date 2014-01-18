define ["models/User", "models/Post", "templates/profile/main"],(User, Post ,templ) ->


	class View extends Backbone.Marionette.View
				
		render: ->
			console.log "handle #{@id}"
			@model = new User handle: @id
			@model.fetch
				success: (data) =>
					@json = data.toJSON()
					@itemModel = new Post author: @json[0]._id
					@itemModel.fetch
						success: (items) =>
							@$el.html templ profile:@json, posts: items.toJSON()
							test = items.toJSON()
							console.log test[0]
			return @