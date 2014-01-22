define (require) ->
	User = require "models/User"
	Post = require "models/Post"
	templ = require "templates/profile/main"


	class View extends Backbone.Marionette.View
				
		render: ->
			console.log "handle #{@id}"
			@model = new User 
				handle: @id
			@model.fetch
				success: (data) =>
					@json = data.toJSON()
					@itemModel = new Post author: @json[0]._id
					@itemModel.fetch
						success: (items) =>
							@$el.html templ profile:@json, posts: items.toJSON()
			return @