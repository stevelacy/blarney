$(document).ready ->

  # Fix the stupid Facebook calback error
  if `window.location.pathname == "/_=_"`
    window.location = "/"