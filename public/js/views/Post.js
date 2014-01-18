(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["models/Post", "models/User", "templates/post/main", "app/auth"], function(Post, User, templ, auth) {
    var View, _ref;
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.initialize = function() {
        this.model = new Post({
          post: this.id
        });
        this.listenTo(this.model, "sync", this.render);
        this.model.fetch();
        return this;
      };

      View.prototype.render = function() {
        if (!this.model.get('author')) {
          return this;
        }
        this.$el.html(templ({
          item: this.model,
          auth: auth
        }));
        console.log(this.model);
        return this;
      };

      View.prototype.events = {
        "submit form": "comment"
      };

      View.prototype.comment = function(e) {
        var itemData;
        e.preventDefault();
        itemData = this.getFormData(this.$el.find("form"));
        console.log(itemData);
        return this.model.save(itemData, {
          success: function(data) {
            return console.log(data);
          }
        });
      };

      View.prototype.getFormData = function(form) {
        var indexed_array, unindexed_array;
        unindexed_array = form.serializeArray();
        indexed_array = {};
        unindexed_array.forEach(function(n) {
          return indexed_array[n["name"]] = n["value"];
        });
        return indexed_array;
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
