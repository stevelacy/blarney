define ->
  logged = false
  request = $.ajax
    type: "GET"
    url: '/checkauth'
    statusCode: ->
      200: ->
        logged "status 200"
        logged = true
  return logged