(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Search, View, postsView, searchView, templ;
    Search = require("collections/Search");
    templ = require("templates/search/main");
    postsView = require("views/search/Posts");
    searchView = require("views/search/Search");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.initialize = function() {
        this.query = this.options.query;
        if (this.query == null) {
          this.query = '';
        }
        this.posts = new Search;
        this.posts.query = this.query;
        this.postsView = new postsView({
          collection: this.posts
        });
        this.listenTo(this.posts, "sync", this.render);
        this.posts.fetch();
        this.searchView = new searchView({
          query: this.query
        });
        return this;
      };

      View.prototype.render = function() {
        var postDiv, searchDiv;
        this.$el.html(templ({
          query: this.query,
          item: this.posts
        }));
        postDiv = this.$el.find('.content');
        postDiv.html(this.postsView.el);
        searchDiv = this.$el.find('.search');
        searchDiv.html(this.searchView.render().el);
        return this;
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
