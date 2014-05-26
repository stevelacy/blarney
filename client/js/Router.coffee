define (require) ->
  New = require 'views/New'
  Main = require 'views/Main'
  Post = require 'views/Post'
  Login = require 'views/Login'
  Search = require 'views/Search'
  Banner = require 'views/Banner'
  Footer = require 'views/Footer'
  Profile = require 'views/Profile'
  auth = require 'app/auth'


  # Admin
  if auth.level() == "5"
    Admin = require 'views/admin/Main'

  banner = new Backbone.Marionette.Region el: "#banner"
  region = new Backbone.Marionette.Region el: "#content"
  footer = new Backbone.Marionette.Region el: "#footer"
  
  class AppRouter extends Backbone.Router
    routes:
      "": "main"
      "new": "new"
      "p/:id": "post"
      "login": "login"
      "logout": "logout"
      "search": "search"
      "search/": "search"
      "search/:term": "search"
      "note/:id": "note"
      "admin": "admin"
      "_=_": "navigate"
      "#_=_": "navigate"
      "*user": "profile"


    post: (id) ->
      view = new Post post:id
      region.show view

    main: ->
      view = new Main
      region.show view

    new: ->
      return auth.login() unless auth.loggedIn()
      view = new New
      region.show view

    profile: (id) ->
      view = new Profile user:id
      region.show view

    logout: ->
      window.location.href = "/logout?server=true"
      
    login: ->
      return @navigate() if auth.loggedIn()
      view = new Login
      region.show view

    admin: ->
      view = new Admin
      region.show view

    search: (term) ->
      view = new Search
        query: term
      region.show view
    navigate: ->
      Backbone.history.navigate '/',
        trigger: true

  appRouter = new AppRouter

  bannerView = new Banner
  banner.show bannerView
  
  footerView = new Footer
  footer.show footerView


  