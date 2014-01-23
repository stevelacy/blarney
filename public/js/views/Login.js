(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var View, templ, _ref;
    templ = require("templates/login");
    return View = (function(_super) {
      var closeView;

      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.initialize = function() {
        return $('body').keyup(closeView);
      };

      View.prototype.render = function() {
        this.$el.html(templ);
        return this;
      };

      View.prototype.events = {
        "keyup": "closeView",
        "click #close-div": "closeViewClick"
      };

      closeView = function(e) {
        if (e.keyCode !== 27) {
          return true;
        }
        return $("#aux").fadeOut();
      };

      View.prototype.closeViewClick = function() {
        return $("#aux").fadeOut();
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
