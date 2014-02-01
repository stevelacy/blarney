(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Post, View, auth, templ;
    Post = require("models/Post");
    templ = require("templates/new/main");
    auth = require("app/auth");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.render = function() {
        this.model = new Post;
        this.$el.html(templ({
          auth: auth
        }));
        return this;
      };

      View.prototype.events = {
        "submit form": "saveData"
      };

      View.prototype.saveData = function(e) {
        var itemData;
        e.preventDefault();
        itemData = this.getFormData(this.$el.find("form"));
        return this.model.save(itemData, {
          success: function(data) {
            return Backbone.history.navigate("/p/" + data.id, {
              trigger: true
            });
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
