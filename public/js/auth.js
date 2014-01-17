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
      clearToken: function() {
        return window.location.href = "/logout";
      },
      login: function() {
        return dermis.router.show("/login");
      }
    };
    return auth;
  });

}).call(this);
