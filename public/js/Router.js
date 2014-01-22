(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var AppRouter, Banner, Main, New, Post, Profile, appRouter, auth, bannerView, _ref;
    Main = require('views/Main');
    Post = require('views/Post');
    Banner = require('views/Banner');
    New = require('views/New');
    Profile = require('views/Profile');
    auth = require('app/auth');
    AppRouter = (function(_super) {
      __extends(AppRouter, _super);

      function AppRouter() {
        _ref = AppRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppRouter.prototype.routes = {
        "": "main",
        "posts/:id": "getPost",
        "p/:id": "post",
        "note/:id": "note",
        "new": "new",
        "*user": "profile"
      };

      return AppRouter;

    })(Backbone.Router);
    appRouter = new AppRouter;
    appRouter.on('route:post', function(id) {
      var view;
      console.log("Post route called -  number is " + id);
      view = new Post({
        id: id
      });
      return $("#content").html(view.render().el);
    });
    appRouter.on('route:main', function() {
      var view;
      console.log("The Main page");
      view = new Main;
      return $("#content").html(view.render().el);
    });
    appRouter.on('route:new', function() {
      var view;
      if (!auth.loggedIn()) {
        return auth.login();
      }
      console.log("new post");
      view = new New;
      return $("#content").html(view.render().el);
    });
    appRouter.on('route:profile', function(id) {
      var view;
      console.log("profile is " + id);
      view = new Profile({
        id: id
      });
      return $("#content").html(view.render().el);
    });
    bannerView = new Banner;
    return $("#banner").html(bannerView.render().el);
  });

}).call(this);
