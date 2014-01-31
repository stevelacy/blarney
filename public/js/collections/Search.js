(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Items, Post, _ref;
    Post = require("models/Post");
    Items = (function(_super) {
      __extends(Items, _super);

      function Items() {
        _ref = Items.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Items.prototype.url = function() {
        console.log("/s/" + this.query);
        return "/s/" + this.query;
      };

      Items.prototype.model = Post;

      return Items;

    })(Backbone.Collection);
    return Items;
  });

}).call(this);
