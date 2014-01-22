define (require) ->
	Router = require "app/Router"

	Claru = new Backbone.Marionette.Application

	$(document).on 'click', 'a[href^="/"]', (evt) ->
		href = $(this).attr('href')
		protocol = @protocol + "//"
		if href.slice(protocol.length) isnt protocol
			evt.preventDefault()
			Backbone.history.navigate href, true

	Claru.addRegions
		banner: '#banner'
		main: '#content'
		footer: '#footer'
	Claru.on 'initialize:after', ->
		Backbone.history.start
			pushState: true
	Claru.start()
	


		


	