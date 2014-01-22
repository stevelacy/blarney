(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Comments, Users, View, comments, templ, users, _ref;
    Comments = require("collections/Comments");
    Users = require("collections/Users");
    templ = require("templates/comments");
    comments = new Comments();
    users = new Users();
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.render = function() {
        var _this = this;
        comments.fetch({
          success: function(comments) {
            console.log(comments.models);
            return users.fetch({
              success: function(users) {
                return _this.$el.html(templ({
                  comments: comments.toJSON(),
                  users: users.toJSON()
                }));
              }
            });
          }
        });
        return this;
      };

      View.prototype.events = {
        "click input[type=button]": "runTest"
      };

      View.prototype.runTest = function(e) {
        return console.log($("#test").val());
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
