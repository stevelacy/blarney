(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Items, Post;
    Post = require("models/Post");
    Items = (function(_super) {
      __extends(Items, _super);

      function Items() {
        return Items.__super__.constructor.apply(this, arguments);
      }

      Items.prototype.url = function() {
        return "/s/" + this.query + "?limit=12";
      };

      Items.prototype.model = Post;

      return Items;

    })(Backbone.Collection);
    return Items;
  });

}).call(this);
