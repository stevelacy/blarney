(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Post, Posts, PostsView, User, View, auth, templ, templ404;
    User = require("models/User");
    Post = require("models/Post");
    Posts = require("collections/Posts");
    templ = require("templates/profile/main");
    templ404 = require("templates/error/404");
    auth = require("app/auth");
    PostsView = require("views/profile/Posts");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        this.setFile = __bind(this.setFile, this);
        this.editBoxToggle = __bind(this.editBoxToggle, this);
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.initialize = function() {
        $('body').keyup(this.closeView);
        this.model = new User({
          handle: this.options.user
        });
        this.listenTo(this.model, "sync", this.render);
        this.modalOpen = 0;
        this.posts = new Posts;
        this.postsView = new PostsView({
          collection: this.posts
        });
        this.model.fetch({
          success: (function(_this) {
            return function(data) {
              _this.posts.author = _this.model.get("_id");
              return _this.posts.fetch();
            };
          })(this)
        });
        return this;
      };

      View.prototype.render = function() {
        var postDiv;
        if (!this.model.get('handle')) {
          return this;
        }
        if (this.model.get("_id") == null) {
          this.$el.html(templ404);
          return this;
        }
        this.$el.html(templ({
          item: this.model,
          auth: auth
        }));
        postDiv = this.$el.find('.posts-box');
        postDiv.html(this.postsView.el);
        return this;
      };

      View.prototype.events = {
        "click #edit-cover-button": "editBoxToggle",
        "click #sub-cover": "fileLoad",
        "change #file": "setFile"
      };

      View.prototype.editBoxToggle = function() {
        if (this.modalOpen === 0) {
          this.$el.find("#edit-cover-box").modalify();
          return this.modalOpen = 1;
        } else {
          this.$el.find("#edit-cover-box").modalify("close");
          return this.modalOpen = 0;
        }
      };

      View.prototype.setFile = function(e) {
        var input, reader;
        input = e.currentTarget;
        if (input.files && input.files[0]) {
          reader = new FileReader();
          console.log(input.files[0]);
          reader.onload = (function(_this) {
            return function(e) {
              return _this.$el.find("#profile-img").attr("src", e.target.result);
            };
          })(this);
          return reader.readAsDataURL(input.files[0]);
        }
      };

      View.prototype.fileLoad = function(e) {
        var formData, xhr;
        e.preventDefault();
        formData = new FormData(this.$el.find("#form-cover")[0]);
        xhr = new XMLHttpRequest();
        xhr.open("post", "/upload", true);
        xhr.upload.onprogress = (function(_this) {
          return function(e) {
            var percentage;
            if (e.lengthComputable) {
              percentage = (e.loaded / e.total) * 100;
              return _this.$el.find(".progress .bar").css("width", percentage + "%");
            }
          };
        })(this);
        xhr.onerror = function(e) {
          return console.log(xhr.responseText);
        };
        xhr.onload = (function(_this) {
          return function() {
            var result;
            result = JSON.parse(xhr.responseText);
            if (result.result === "success") {
              _this.$el.find('#upload-box').slideToggle();
              return _this.$el.find("#edit-cover-box").fadeToggle();
            }
          };
        })(this);
        return xhr.send(formData, function(err, res) {
          if (err != null) {
            return console.log(err);
          }
        });
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
