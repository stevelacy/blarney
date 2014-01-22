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

      Item.prototype.urlRoot = '/v1/posts';

      Item.prototype.casts = {
        author: User
      };

      Item.prototype.url = function() {
        /*
        if @get '_id'
          console.log "#{@urlRoot}?_id=#{@get '_id'}"
          return "#{@urlRoot}?_id=#{@get '_id'}"
        */

        if (this.get('id')) {
          console.log("" + this.urlRoot + "/" + (this.get('id')));
          return "" + this.urlRoot + "/" + (this.get('id'));
        }
        if (this.get('author')) {
          console.log("" + this.urlRoot + "?populate=author");
          return "" + this.urlRoot + "?populate=author";
        }
        if (this.get('post')) {
          console.log("" + this.urlRoot + "/" + (this.get('post')) + "?populate=author");
          return "" + this.urlRoot + "/" + (this.get('post')) + "?populate=author";
        }
        return this.urlRoot;
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
        }
        return res;
      };

      return Item;

    })(Backbone.Model);
    return Item;
  });

}).call(this);
