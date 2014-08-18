define ->
  auth =
    loggedIn: -> window._loggedIn
    level: -> window._level
    id: -> window._id
    name: -> window._name
    image: -> window._image
    handle: -> window._handle
    clearToken: -> window.location.href = "/logout"
    login: -> Backbone.history.navigate "/login"
  return auth
