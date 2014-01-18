define ->
  auth =
    loggedIn: -> window._loggedIn
    id: -> window._loggedInId
    image: -> window._image
    clearToken: -> window.location.href = "/logout"
    login: -> Backbone.history.navigate "/login"
  return auth