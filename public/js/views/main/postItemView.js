(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var View, templ, _ref;
    templ = require("templates/main/card");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.className = " content-cards bg-white-pure box-shadow-light align-left trans";

      View.prototype.render = function() {
        this.$el.html(templ({
          item: this.model
        }));
        return this;
      };

      return View;

    })(Backbone.Marionette.ItemView);
  });

}).call(this);
