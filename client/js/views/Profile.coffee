define ["models/User", "models/Item", "templates/profile/main"],(User, Item ,templ) ->


	class View extends Backbone.Marionette.View
				
		render: ->
			console.log "handle #{@id}"
			@model = new User urlRoot: "http://node.la/v1/users?handle=#{@id}"
			@model.fetch
				success: (data) =>
					@json = data.toJSON()
					@itemModel = new Item author: @json[0]._id
					@itemModel.fetch
						success: (items) =>
							@.$el.html templ profile:@json, posts: items.toJSON()
							console.log @json
			return @