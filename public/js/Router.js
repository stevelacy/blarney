(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var AppRouter, Banner, Login, Main, New, Post, Profile, appRouter, auth, banner, bannerView, region, _ref;
    New = require('views/New');
    Main = require('views/Main');
    Post = require('views/Post');
    Login = require('views/Login');
    Banner = require('views/Banner');
    Profile = require('views/profile/Profile');
    auth = require('app/auth');
    AppRouter = (function(_super) {
      __extends(AppRouter, _super);

      function AppRouter() {
        _ref = AppRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppRouter.prototype.routes = {
        "": "main",
        "new": "new",
        "p/:id": "post",
        "login": "login",
        "logout": "logout",
        "note/:id": "note",
        "*user": "profile"
      };

      return AppRouter;

    })(Backbone.Router);
    appRouter = new AppRouter;
    region = new Backbone.Marionette.Region({
      el: "#content"
    });
    banner = new Backbone.Marionette.Region({
      el: "#banner"
    });
    appRouter.on('route:post', function(id) {
      var view;
      view = new Post({
        id: id
      });
      return region.show(view);
    });
    appRouter.on('route:main', function() {
      var view;
      view = new Main;
      return region.show(view);
    });
    appRouter.on('route:new', function() {
      var view;
      if (!auth.loggedIn()) {
        return auth.login();
      }
      view = new New;
      return region.show(view);
    });
    appRouter.on('route:profile', function(id) {
      var view;
      view = new Profile({
        id: id
      });
      return region.show(view);
    });
    appRouter.on('route:logout', function() {
      return window.location.href = "/logout?server=true";
    });
    appRouter.on('route:login', function() {
      var loginView;
      loginView = new Login;
      return region.show(view);
    });
    bannerView = new Banner;
    return banner.show(bannerView);
  });

}).call(this);
