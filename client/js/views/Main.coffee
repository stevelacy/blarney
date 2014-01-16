define ['collections/Items','collections/Users' , 'templates/main'], (Items, Users, templ) ->
	items = new Items()
	users = new Users()

	class View extends Backbone.Marionette.View

		render: ->
			items.fetch
				success: (items) =>
					console.log items.models
					users.fetch
						success: (users) =>
							@.$el.html templ items:items.toJSON(), users: users.toJSON()
			return @

		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	

