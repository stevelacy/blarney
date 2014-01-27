define ->
  class User extends Backbone.Model
    urlRoot: '/v1/users'
    url: ->
      if @get 'handle'
        return "#{@urlRoot}?handle=#{@get 'handle'}"
      if @get '_id'
        return "#{@urlRoot}?_id=#{@get '_id'}"
      return @urlRoot
  return User