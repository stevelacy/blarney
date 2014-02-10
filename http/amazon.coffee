knox = require 'knox'
config = require '../config'


client = knox.createClient
	key: config.keys.amazonKey
	secret: config.keys.amazonSecret
	bucket: config.amazon.bucket
	region: config.amazon.region

module.exports = client