(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Admin, AppRouter, Banner, Login, Main, New, Post, Profile, Search, appRouter, auth, banner, bannerView, region, _ref;
    New = require('views/New');
    Main = require('views/Main');
    Post = require('views/Post');
    Login = require('views/Login');
    Search = require('views/Search');
    Banner = require('views/Banner');
    Profile = require('views/profile/Profile');
    auth = require('app/auth');
    Admin = require('views/admin/Main');
    region = new Backbone.Marionette.Region({
      el: "#content"
    });
    banner = new Backbone.Marionette.Region({
      el: "#banner"
    });
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
        "search/:term": "search",
        "note/:id": "note",
        "admin": "admin",
        "*user": "profile"
      };

      AppRouter.prototype.post = function(id) {
        var view;
        view = new Post({
          post: id
        });
        return region.show(view);
      };

      AppRouter.prototype.main = function() {
        var view;
        view = new Main;
        return region.show(view);
      };

      AppRouter.prototype["new"] = function() {
        var view;
        if (!auth.loggedIn()) {
          return auth.login();
        }
        view = new New;
        return region.show(view);
      };

      AppRouter.prototype.profile = function(id) {
        var view;
        view = new Profile({
          user: id
        });
        return region.show(view);
      };

      AppRouter.prototype.logout = function() {
        return window.location.href = "/logout?server=true";
      };

      AppRouter.prototype.login = function() {
        var loginView;
        loginView = new Login;
        return region.show(loginView);
      };

      AppRouter.prototype.admin = function() {
        var view;
        view = new Admin;
        return region.show(view);
      };

      AppRouter.prototype.search = function(term) {
        var view;
        view = new Search({
          query: term
        });
        return region.show(view);
      };

      return AppRouter;

    })(Backbone.Router);
    appRouter = new AppRouter;
    bannerView = new Banner;
    return banner.show(bannerView);
  });

}).call(this);
