(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var View, auth, error401, templ;
    templ = require("templates/admin/main");
    error401 = require("templates/error/401");
    auth = require("app/auth");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.render = function() {
        if (auth.level() !== "5") {
          return this.$el.html(error401);
        }
        this.$el.html(templ);
        return this;
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
