(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function() {
    var Item, _ref;
    Item = (function(_super) {
      __extends(Item, _super);

      function Item() {
        _ref = Item.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Item.prototype.urlRoot = '/v1/comments';

      Item.prototype.url = function() {
        if (this.get('post')) {
          return "" + this.urlRoot + "/?populate=post&populate=author";
        }
        return this.urlRoot;
      };

      return Item;

    })(Backbone.Model);
    return Item;
  });

}).call(this);
