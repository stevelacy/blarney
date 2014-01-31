(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Post, Posts, PostsView, User, View, auth, templ, _ref;
    User = require("models/User");
    Post = require("models/Post");
    Posts = require("collections/Posts");
    templ = require("templates/profile/main");
    auth = require("app/auth");
    PostsView = require("views/profile/Posts");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        this.setFile = __bind(this.setFile, this);
        this.editBoxToggle = __bind(this.editBoxToggle, this);
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.initialize = function() {
        $('body').keyup(this.closeView);
        this.model = new User({
          handle: this.options.user
        });
        this.listenTo(this.model, "sync", this.render);
        this.model.fetch();
        this.posts = new Posts;
        this.posts.author = this.model.get("handle");
        console.log(this.model);
        this.postsView = new PostsView({
          collection: this.posts
        });
        this.posts.fetch();
        return this;
      };

      View.prototype.render = function() {
        var postDiv;
        if (!this.model.get('handle')) {
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
        "change #file": "setFile",
        "click #sub-cover": "fileLoad",
        "keyup": "closeView"
      };

      View.prototype.editBoxToggle = function() {
        return this.$el.find("#edit-cover-box").fadeToggle();
      };

      View.prototype.closeView = function(e) {
        if (e.keyCode !== 27) {
          return true;
        }
        return this.$el.find("#edit-cover-box").fadeOut();
      };

      View.prototype.setFile = function(e) {
        var input, reader,
          _this = this;
        input = e.currentTarget;
        if (input.files && input.files[0]) {
          reader = new FileReader();
          console.log(input.files[0]);
          reader.onload = function(e) {
            return _this.$el.find("#profile-img").attr("src", e.target.result);
          };
          return reader.readAsDataURL(input.files[0]);
        }
      };

      View.prototype.fileLoad = function(e) {
        var formData, xhr,
          _this = this;
        e.preventDefault();
        formData = new FormData(this.$el.find("#form-cover")[0]);
        xhr = new XMLHttpRequest();
        xhr.open("post", "/upload", true);
        xhr.upload.onprogress = function(e) {
          var percentage;
          if (e.lengthComputable) {
            percentage = (e.loaded / e.total) * 100;
            return _this.$el.find(".progress .bar").css("width", percentage + "%");
          }
        };
        xhr.onerror = function(e) {
          return console.log(xhr.responseText);
        };
        xhr.onload = function() {
          var result;
          result = JSON.parse(xhr.responseText);
          if (result.result === "success") {
            _this.$el.find('#upload-box').slideToggle();
            return _this.$el.find("#edit-cover-box").fadeToggle();
          }
        };
        return xhr.send(formData);
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
