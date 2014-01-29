define (require) ->
  New = require 'views/New'
  Main = require 'views/Main'
  Post = require 'views/Post'
  Login = require 'views/Login'
  Banner = require 'views/Banner'
  Profile = require 'views/profile/Profile'
  auth = require 'app/auth'


  class AppRouter extends Backbone.Router
    routes:
      "": "main"
      "new": "new"
      "p/:id": "post"
      "login": "login"
      "logout":"logout"
      "note/:id": "note"
      "*user": "profile"

  appRouter = new AppRouter
  region = new Backbone.Marionette.Region el: "#content"
  banner = new Backbone.Marionette.Region el: "#banner"

  appRouter.on 'route:post', (id) ->
    view = new Post id:id
    region.show view

  appRouter.on 'route:main', ->
    view = new Main
    #$("#content").html view.render().el
    region.show view


  appRouter.on 'route:new', ->
    return auth.login() unless auth.loggedIn()
    view = new New
    region.show view

 
  appRouter.on 'route:profile', (id) ->
    view = new Profile id:id
    region.show view

  appRouter.on 'route:logout', ->
    window.location.href = "/logout?server=true"
    
  appRouter.on 'route:login', ->
    loginView = new Login
    region.show loginView


  bannerView = new Banner
  banner.show bannerView


  