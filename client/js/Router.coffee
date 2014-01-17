define [
	'views/Main',
	'views/Post',
	'views/Banner',
	'views/New',
	'views/Profile',
	'app/auth'], (Main, Post, Banner, New, Profile, auth) ->







	AppRouter = Backbone.Router.extend
		routes:
			"":"main"
			"posts/:id":"getPost"
			"p/:id":"post"
			"note/:id":"note"
			"new":"new"
			"*user":"profile"

	appRouter = new AppRouter

	appRouter.on 'route:post', (id) ->
		console.log "Post route called -  number is #{id}"
		view = new Post id:id
		$("#content").html view.render().el

	appRouter.on 'route:main', () ->
		console.log "The Main page"
		view = new Main
		$("#content").html view.render().el


	appRouter.on 'route:new', () ->
		console.log "new post"
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


	