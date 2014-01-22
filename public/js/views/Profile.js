(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Post, User, View, templ, _ref;
    User = require("models/User");
    Post = require("models/Post");
    templ = require("templates/profile/main");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.render = function() {
        var _this = this;
        console.log("handle " + this.id);
        this.model = new User({
          handle: this.id
        });
        this.model.fetch({
          success: function(data) {
            _this.json = data.toJSON();
            _this.itemModel = new Post({
              author: _this.json[0]._id
            });
            return _this.itemModel.fetch({
              success: function(items) {
                return _this.$el.html(templ({
                  profile: _this.json,
                  posts: items.toJSON()
                }));
              }
            });
          }
        });
        return this;
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
