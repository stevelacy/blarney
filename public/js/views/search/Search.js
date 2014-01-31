(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var View, templ, _ref;
    templ = require("templates/search/search");
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.initialize = function() {
        this.query = this.options.query;
        if (this.query == null) {
          this.query = '';
        }
        this.setElement(this.$el);
        return this;
      };

      View.prototype.render = function() {
        this.$el.html(templ({
          query: this.query
        }));
        return this;
      };

      View.prototype.events = {
        "click .search-button": "search"
      };

      View.prototype.search = function(e) {
        var query;
        console.log("called");
        e.preventDefault();
        query = this.$el.find(".search-term").val();
        return Backbone.history.navigate("/search/" + query, {
          trigger: true
        });
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
