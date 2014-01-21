(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["models/Post"], function(Post) {
    var Items, _ref;
    Items = (function(_super) {
      __extends(Items, _super);

      function Items() {
        _ref = Items.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Items.prototype.url = '/v1/posts?populate=author&limit=12';

      Items.prototype.model = Post;

      /*
      url: =>
        if @get 'author'
          return "#{@urlRoot}?populate=author"
        if @get '_id'
          return "#{@urlRoot}?_id=#{@get '_id'}"
        if @get 'limit'
          return "#{@urlRoot}?limit=#{@get 'limit'}"
        
        return @urlRoot
      console.log @url
      */


      return Items;

    })(Backbone.Collection);
    return Items;
  });

}).call(this);
