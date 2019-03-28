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

app
  // Static files
  .use(serve(`${__dirname}/../client/build`))

  // Other middleware
  .use(helmet())
  .use(convert(bodyParser()))
  .use(cors())

  // Routes
  .use(routes())
  .use(allowedMethods())

  // Send React app
  .use(async ctx => send(ctx, 'client/build/index.html'))

export default app
