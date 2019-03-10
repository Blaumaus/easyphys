// imports
import Koa from 'koa'
import bodyParser from 'koa-body-parser'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import convert from 'koa-convert'
import serve from 'koa-static'
import send from 'koa-send'
import { routes, allowedMethods } from './routes/api/router'

// Init Koa
const app = new Koa()

// Static files
app.use(serve(`${__dirname}/../client/build`))

// Middleware
app.use(helmet())
app.use(convert(bodyParser()))
app.use(cors())

// Router
app
  .use(routes())
  .use(allowedMethods())

// Send React app
app.use(async ctx => await send(ctx, 'client/build/index.html'))

export default app  
