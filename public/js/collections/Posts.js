(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["models/Post"], function(Post) {
    var Items, _ref;
    Items = (function(_super) {
      __extends(Items, _super);

      function Items() {
        this.url = __bind(this.url, this);
        _ref = Items.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Items.prototype.urlRoot = '/v1/items';

      Items.prototype.model = Post;

      Items.prototype.url = function() {
        if (this.get('author')) {
          return "" + this.urlRoot + "?populate=author";
        }
        if (this.get('_id')) {
          return "" + this.urlRoot + "?_id=" + (this.get('_id'));
        }
        if (this.get('limit')) {
          return "" + this.urlRoot + "?limit=" + (this.get('limit'));
        }
        console.log(this.urlRoot);
        return this.urlRoot;
      };

      return Items;

    })(Backbone.Collection);
    return Items;
  });

}).call(this);
