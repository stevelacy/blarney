(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["models/User", "models/Item", "templates/profile/main"], function(User, Item, templ) {
    var View, _ref;
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
          id: this.id
        });
        this.model.fetch({
          success: function(data) {
            _this.json = data.toJSON();
            console.log(_this.json);
            _this.itemModel = new Item({
              author: _this.json._id
            });
            console.log("username " + _this.json.handle);
            return _this.itemModel.fetch({
              success: function(items) {
                _this.$el.html(templ({
                  profile: _this.json,
                  posts: items.toJSON()
                }));
                return console.log(_this.json);
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
