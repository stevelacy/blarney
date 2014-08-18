(function() {
  define(function(require) {
    var Notify;
    return Notify = (function() {
      function Notify() {}

      Notify.prototype.message = function(message) {
        return alert(message);
      };

      return Notify;

    })();
  });

}).call(this);
