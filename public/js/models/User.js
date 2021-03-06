(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function() {
    var User;
    User = (function(_super) {
      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.urlRoot = '/v1/users';

      User.prototype.url = function() {
        if (this.get('handle')) {
          return "" + this.urlRoot + "?handle=" + (this.get('handle')) + "&populate=author";
        }
        return this.urlRoot;
      };

      User.prototype.parse = function(res) {
        if (Array.isArray(res)) {
          return res[0];
        }
        return res;
      };

      return User;

    })(Backbone.Model);
    return User;
  });

}).call(this);
