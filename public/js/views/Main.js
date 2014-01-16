(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['collections/Items', 'collections/Users', 'templates/main'], function(Items, Users, templ) {
    var View, items, users, _ref;
    items = new Items();
    users = new Users();
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.render = function() {
        var _this = this;
        items.fetch({
          success: function(items) {
            console.log(items.models);
            return users.fetch({
              success: function(users) {
                return _this.$el.html(templ({
                  items: items.toJSON(),
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
