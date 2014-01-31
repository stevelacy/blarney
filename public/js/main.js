(function() {
  define(function(require) {
    var Claru, Router;
    Router = require("app/Router");
    Claru = new Backbone.Marionette.Application;
    $(document).on('click', 'a[href^="/"]', function(evt) {
      var href, protocol;
      href = $(this).attr('href');
      protocol = this.protocol + "//";
      if (href.slice(protocol.length) !== protocol) {
        evt.preventDefault();
        return Backbone.history.navigate(href, true);
      }
    });
    Claru.on('initialize:after', function() {
      return Backbone.history.start({
        pushState: true
      });
    });
    return Claru.start();
  });

}).call(this);
