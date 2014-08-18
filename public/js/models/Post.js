(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Item, User;
    User = require("models/User");
    Item = (function(_super) {
      __extends(Item, _super);

      function Item() {
        return Item.__super__.constructor.apply(this, arguments);
      }

      Item.prototype.urlRoot = '/v1/posts';

      Item.prototype.idAttribute = "_id";

      Item.prototype.casts = {
        author: User
      };

      Item.prototype.url = function() {
        if (this.get('id')) {
          return "" + this.urlRoot + "/" + (this.get('id'));
        }
        if (this.get('author')) {
          return "" + this.urlRoot + "?author=" + (this.get('author'));
        }
        if (this.get('post')) {
          return "" + this.urlRoot + "/" + (this.get('post')) + "?populate=author";
        }
        return this.urlRoot;
      };

      Item.prototype.parse = function(res) {
        var k, v, _ref;
        if (this.casts == null) {
          return res;
        }
        _ref = this.casts;
        for (k in _ref) {
          v = _ref[k];
          res[k] = new v(res[k], {
            parse: true
          });
        }
        return res;
      };

      return Item;

    })(Backbone.Model);
    return Item;
  });

}).call(this);
