(function() {
  define(['views/Main', 'views/Item', 'views/Banner', 'views/New', 'views/Profile', 'app/auth'], function(Main, Item, Banner, New, Profile, auth) {
    var AppRouter, appRouter, bannerView;
    console.log(auth);
    AppRouter = Backbone.Router.extend({
      routes: {
        "": "main",
        "items/:id": "getItem",
        "item/:id": "item",
        "note/:id": "note",
        "new": "new",
        "*user": "profile"
      }
    });
    appRouter = new AppRouter;
    appRouter.on('route:item', function(id) {
      var view;
      console.log("Item route called -  number is " + id);
      view = new Item({
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
      console.log("new item");
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
