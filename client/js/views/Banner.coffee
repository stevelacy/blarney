define ['templates/banner', 'app/auth'],(templ, auth)->
	class View extends Backbone.Marionette.View

		render: ->
			@$el.html templ auth: auth
			return @

		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	

