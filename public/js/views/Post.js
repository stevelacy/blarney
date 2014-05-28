(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Comment, Comments, CommentsView, Post, User, View, auth, marked, templ;
    Post = require("models/Post");
    User = require("models/User");
    templ = require("templates/post/main");
    auth = require("app/auth");
    marked = require("vendor/marked");
    CommentsView = require("views/post/Comments");
    Comments = require("collections/Comments");
    Comment = require("models/Comment");
    marked.setOptions({
      gfm: true,
      sanitize: true,
      pedantic: true,
      highlight: function(code, lang) {
        return prettyPrintOne(code, lang, true);
      }
    });
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.initialize = function() {
        this.model = new Post({
          post: this.options.post
        });
        this.listenTo(this.model, "sync", this.render);
        this.model.fetch();
        this.comments = new Comments;
        this.comments.post = this.options.post;
        this.commentsView = new CommentsView({
          collection: this.comments
        });
        this.comments.fetch();
        return this;
      };

      View.prototype.render = function() {
        var commentDiv, markdown;
        if (!this.model.get('author')) {
          return this;
        }
        this.$el.html(templ({
          item: this.model,
          auth: auth
        }));
        markdown = marked(this.model.get("content"));
        this.$el.find(".post .content").html(markdown);
        commentDiv = this.$el.find('.comments');
        commentDiv.html(this.commentsView.el);
        return this;
      };

      View.prototype.events = {
        "submit form": "saveComment"
      };

      View.prototype.saveComment = function(e) {
        var itemData;
        e.preventDefault();
        itemData = this.getFormData(this.$el.find("form"));
        this.comment = new Comment({
          post: this.options.post
        });
        return this.comment.save(itemData, {
          success: (function(_this) {
            return function(data) {
              _this.comment.set('author', new User({
                _id: auth.id(),
                handle: auth.handle(),
                name: auth.name(),
                image: auth.image()
              }));
              _this.comments.push(_this.comment);
              return _this.$el.find("#content").val("");
            };
          })(this),
          error: function(model, data) {
            return Object.keys(data.responseJSON.error.errors).forEach(function(data) {
              return $("[name='" + data + "']").addClass("error");
            });
          }
        });
      };

      View.prototype.getFormData = function(form) {
        var indexed_array, unindexed_array;
        unindexed_array = form.serializeArray();
        indexed_array = {};
        unindexed_array.forEach(function(n) {
          return indexed_array[n["name"]] = n["value"];
        });
        return indexed_array;
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
