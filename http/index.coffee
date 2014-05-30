app = require "./express"
apis = require "./apis"

require "./passport-twitter"
require "./passport-facebook"
require './spa'
require "./httpServer"

module.exports = app
