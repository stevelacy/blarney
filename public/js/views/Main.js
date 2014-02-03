(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Posts, User, View, auth, postsView, searchView, templ;
    Posts = require("collections/Posts");
    User = require("models/User");
    templ = require("templates/main");
    auth = require("app/auth");
    postsView = require("views/main/Posts");
    searchView = require("views/search/Search");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.initialize = function() {
        this.posts = new Posts;
        this.postsView = new postsView({
          collection: this.posts
        });
        this.listenTo(this.posts, "sync", this.render);
        this.posts.fetch();
        this.searchView = new searchView;
        return this;
      };

      View.prototype.render = function() {
        var postDiv, searchDiv;
        this.$el.html(templ({
          item: this.posts,
          auth: auth
        }));
        postDiv = this.$el.find('.main-box');
        postDiv.html(this.postsView.el);
        searchDiv = this.$el.find('.search');
        searchDiv.html(this.searchView.render().el);
        return this;
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
