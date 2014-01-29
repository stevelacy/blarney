(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Item, User, _ref;
    User = require("models/User");
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

      Item.prototype.casts = {
        author: User
      };

      Item.prototype.parse = function(res) {
        var k, v, _ref1;
        if (this.casts == null) {
          return res;
        }
        _ref1 = this.casts;
        for (k in _ref1) {
          v = _ref1[k];
          res[k] = new v(res[k], {
            parse: true
          });
          return res;
        }
      };

      return Item;

    })(Backbone.Model);
    return Item;
  });

}).call(this);
