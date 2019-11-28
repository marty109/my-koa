const Koa = require('koa')
const Router = require('koa-router')
const service = require('./service')
const moment = require('moment')

const app = new Koa()
const router = new Router()

app.use(async (ctx, next) => {
  if (ctx.path === '/') {
    ctx.body = 'home'
  } else {
    await next
  }
})

app.listen(3000)
console.log("127.0.0.1:3000 start at ----- " + moment().format("YYYY-MM-DD HH:mm:ss"))