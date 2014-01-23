define (require) ->
  New = require 'views/New'
  Main = require 'views/Main'
  Post = require 'views/Post'
  Login = require 'views/Login'
  Banner = require 'views/Banner'
  Profile = require 'views/Profile'
  auth = require 'app/auth'


  class AppRouter extends Backbone.Router
    routes:
      "": "main"
      "new": "new"
      "p/:id": "post"
      "login": "login"
      "note/:id": "note"
      "*user": "profile"

  appRouter = new AppRouter

  appRouter.on 'route:post', (id) ->
    view = new Post id:id
    $("#content").html view.render().el
    $("#aux").html ''

  appRouter.on 'route:main', ->
    view = new Main
    $("#content").html view.render().el
    $("#aux").html ''


  appRouter.on 'route:new', ->
    return auth.login() unless auth.loggedIn()
    view = new New
    $("#content").html view.render().el
    $("#aux").html ''

 
  appRouter.on 'route:profile', (id) ->
    view = new Profile id:id
    $("#content").html view.render().el
    $("#aux").html ''

  appRouter.on 'route:login', ->
    loginView = new Login
    $("#aux").html loginView.render().el


  bannerView = new Banner
  $("#banner").html bannerView.render().el


  