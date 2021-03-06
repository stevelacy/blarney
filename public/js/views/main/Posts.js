(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var View, itemView, templ;
    templ = require("templates/main/posts");
    itemView = require("views/main/postItemView");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.itemView = itemView;

      View.prototype.template = templ;

      View.prototype.initialize = function() {
        this.listenTo(this.collection, "sync", this.render);
        return this;
      };

      return View;

    })(Backbone.Marionette.CompositeView);
  });

}).call(this);
