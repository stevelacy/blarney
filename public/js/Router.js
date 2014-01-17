(function() {
  define(['views/Main', 'views/Post', 'views/Banner', 'views/New', 'views/Profile', 'app/auth'], function(Main, Post, Banner, New, Profile, auth) {
    var AppRouter, appRouter, bannerView;
    AppRouter = Backbone.Router.extend({
      routes: {
        "": "main",
        "posts/:id": "getPost",
        "p/:id": "post",
        "note/:id": "note",
        "new": "new",
        "*user": "profile"
      }
    });
    appRouter = new AppRouter;
    appRouter.on('route:post', function(id) {
      var view;
      console.log("Post route called -  number is " + id);
      view = new Post({
        id: id
      });
      return $("#content").html(view.render().el);
    });
    appRouter.on('route:main', function() {
      var view;
      console.log("The Main page");
      view = new Main;
      return $("#content").html(view.render().el);
    });
    appRouter.on('route:new', function() {
      var view;
      console.log("new post");
      view = new New;
      return $("#content").html(view.render().el);
    });
    appRouter.on('route:profile', function(id) {
      var view;
      console.log("profile is " + id);
      view = new Profile({
        id: id
      });
      return $("#content").html(view.render().el);
    });
    bannerView = new Banner;
    $("#banner").html(bannerView.render().el);
    if (!window._loggedIn) {
      return console.log(true);
    }
  });

}).call(this);
