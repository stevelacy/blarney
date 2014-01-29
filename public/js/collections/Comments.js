(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Comment, Comments, User, _ref;
    User = require("models/User");
    Comment = require("models/Comment");
    Comments = (function(_super) {
      __extends(Comments, _super);

      function Comments() {
        _ref = Comments.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Comments.prototype.url = function() {
        return "/v1/comments?post=" + this.post + "&populate=author";
      };

      Comments.prototype.model = Comment;

      return Comments;

    })(Backbone.Collection);
    return Comments;
  });

}).call(this);
