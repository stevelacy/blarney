(function() {
  define(function() {
    var logged, request;
    logged = false;
    request = $.ajax({
      type: "GET",
      url: '/checkauth',
      statusCode: function() {
        return {
          200: function() {
            logged("status 200");
            return logged = true;
          }
        };
      }
    });
    return logged;
  });

}).call(this);
