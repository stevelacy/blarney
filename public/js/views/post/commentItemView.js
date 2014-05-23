(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var View, marked, templ;
    templ = require("templates/post/commentTemplate");
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

      View.prototype.render = function() {
        var markdown;
        this.$el.html(templ({
          item: this.model
        }));
        markdown = marked(this.model.get("content"));
        this.$el.find(".message").html(markdown);
        return this;
      };

      return View;

    })(Backbone.Marionette.ItemView);
  });

}).call(this);
