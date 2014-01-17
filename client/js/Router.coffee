define [
	'views/Main',
	'views/Item',
	'views/Banner',
	'views/New',
	'views/Profile',
	'app/auth'], (Main, Item, Banner, New, Profile, auth) ->







	AppRouter = Backbone.Router.extend
		routes:
			"":"main"
			"items/:id":"getItem"
			"item/:id":"item"
			"note/:id":"note"
			"new":"new"
			"*user":"profile"

	appRouter = new AppRouter

	appRouter.on 'route:item', (id) ->
		console.log "Item route called -  number is #{id}"
		view = new Item id:id
		$("#content").html view.render().el

	appRouter.on 'route:main', () ->
		console.log "The Main page"
		view = new Main
		$("#content").html view.render().el


	appRouter.on 'route:new', () ->
		console.log "new item"
		view = new New
		$("#content").html view.render().el

 
	appRouter.on 'route:profile', (id) ->
		console.log "profile is #{id}"
		view = new Profile id:id
		$("#content").html view.render().el



	bannerView = new Banner
	$("#banner").html bannerView.render().el

	unless window._loggedIn
		console.log true


	