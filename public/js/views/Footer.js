(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Item, templ, _ref;
    templ = require("templates/footer");
    return Item = (function(_super) {
      __extends(Item, _super);

      function Item() {
        _ref = Item.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Item.prototype.render = function() {
        this.$el.html(templ);
        return this;
      };

      return Item;

    })(Backbone.Marionette.View);
  });

}).call(this);
