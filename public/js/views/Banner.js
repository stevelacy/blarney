(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var View, auth, templ;
    templ = require("templates/banner");
    auth = require("app/auth");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.events = {
        "click .navbar .user": "toggleNav"
      };

      View.prototype.render = function() {
        this.$el.html(templ({
          auth: auth
        }));
        return this;
      };

      View.prototype.toggleNav = function() {
        return this.$el.find(".user-nav").fadeToggle();
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
