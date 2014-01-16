define ['templates/banner'],(templ)->
	class View extends Backbone.Marionette.View

		render: ->
			@$el.html templ test:"test"
			return @

		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	

