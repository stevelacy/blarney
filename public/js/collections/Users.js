(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function() {
    var Users, _ref;
    Users = (function(_super) {
      __extends(Users, _super);

      function Users() {
        _ref = Users.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Users.prototype.url = '/v1/users';

      return Users;

    })(Backbone.Collection);
    return Users;
  });

}).call(this);
