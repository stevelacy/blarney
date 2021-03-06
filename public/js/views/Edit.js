(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Post, View, auth, marked, templ;
    Post = require("models/Post");
    templ = require("templates/edit/main");
    auth = require("app/auth");
    marked = require("vendor/marked");
    marked.setOptions({
      gfm: true,
      sanitize: true,
      pedantic: true,
      highlight: function(code, lang) {
        return prettyPrintOne(code, lang, true);
      }
    });
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.initialize = function() {
        this.model = new Post({
          id: this.id
        });
        this.listenTo(this.model, "sync", this.render);
        this.model.fetch();
        return this;
      };

      View.prototype.render = function() {
        var markdown;
        if (!this.model.get("content")) {
          return this;
        }
        this.$el.html(templ({
          item: this.model,
          auth: auth
        }));
        markdown = marked(this.model.get("content"));
        this.$el.find(".preview").html(markdown);
        return this;
      };

      View.prototype.events = {
        "submit form": "saveData",
        "keyup #message": "changed"
      };

      View.prototype.focusInput = function(e) {
        return setTimeout((function(_this) {
          return function() {
            return _this.$el.find(".title").focus();
          };
        })(this), 1);
      };

      View.prototype.saveData = function(e) {
        var itemData;
        e.preventDefault();
        itemData = this.getFormData(this.$el.find("form"));
        console.log(this.model);
        return this.model.save(itemData, {
          patch: true,
          success: function(data) {
            return Backbone.history.navigate("/p/" + data.id, {
              trigger: true
            });
          },
          error: function(model, data) {
            console.log(data);
            return Object.keys(data.responseJSON.error.errors).forEach(function(data) {
              return $("[name='" + data + "']").addClass("error");
            });
          }
        });
      };

      View.prototype.changed = function(e) {
        var markdown;
        markdown = marked($(e.target).val());
        return this.$el.find(".preview").html(markdown);
      };

      View.prototype.getFormData = function(form) {
        var indexed_array, unindexed_array;
        unindexed_array = form.serializeArray();
        indexed_array = {};
        unindexed_array.forEach(function(n) {
          return indexed_array[n["name"]] = n["value"];
        });
        console.log(indexed_array);
        return indexed_array;
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
