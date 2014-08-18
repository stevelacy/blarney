define ->
  class User extends Backbone.Model
    urlRoot: '/v1/users'
    url: ->
      if @get 'handle'
        return "#{@urlRoot}?handle=#{@get 'handle'}&populate=author"
      return @urlRoot

    parse: (res) ->
      if Array.isArray res
        return res[0]
      return res

  return User