define (require) ->
  Main = require 'views/Main'
  Post = require 'views/Post'
  Banner = require 'views/Banner'
  New = require 'views/New'
  Profile = require 'views/Profile'
  auth = require 'app/auth'


  class AppRouter extends Backbone.Router
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
    return auth.login() unless auth.loggedIn()
    console.log "new post"
    view = new New
    $("#content").html view.render().el

 
  appRouter.on 'route:profile', (id) ->
    console.log "profile is #{id}"
    view = new Profile id:id
    $("#content").html view.render().el



  bannerView = new Banner
  $("#banner").html bannerView.render().el


  