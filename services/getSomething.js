const Redis = require('ioredis')
const redis = new Redis(6379, '127.0.0.1')

const showMeSomething = (what) => {
  return redis.get('fuck')
}

module.exports = {
  showMeSomething
}