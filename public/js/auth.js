(function() {
  define(function() {
    var auth;
    auth = {
      loggedIn: function() {
        return window._loggedIn;
      },
      id: function() {
        return window._loggedInId;
      },
      image: function() {
        return window._image;
      },
      handle: function() {
        return window._handle;
      },
      clearToken: function() {
        return window.location.href = "/logout";
      },
      login: function() {
        return Backbone.history.navigate("/login");
      }
    };
    return auth;
  });

}).call(this);
