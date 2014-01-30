define ->
  class User extends Backbone.Model
    urlRoot: '/v1/users'
    url: ->
      if @get 'handle'
        console.log  "#{@urlRoot}?handle=#{@get 'handle'}&populate=author"
        return "#{@urlRoot}?handle=#{@get 'handle'}&populate=author"
      return @urlRoot
  return User