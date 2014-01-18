(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['collections/Posts', 'collections/Users', 'templates/main'], function(Posts, Users, templ) {
    var View, _ref;
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.render = function() {
        var items,
          _this = this;
        items = new Posts({
          author: true
        });
        items.fetch({
          success: function(items) {
            console.log(items.toJSON());
            return _this.$el.html(templ({
              items: items.toJSON()
            }));
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
