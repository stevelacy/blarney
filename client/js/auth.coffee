define ->
  auth =
    loggedIn: -> window._loggedIn
    id: -> window._id
    image: -> window._image
    handle: -> window._handle
    clearToken: -> window.location.href = "/logout"
    login: -> Backbone.history.navigate "/login"
  return auth