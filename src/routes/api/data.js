// Imports
import Router from 'koa-router'

// Handler
import handle from '../../../models/processor/handle'

// Validator
import validate from '../../../models/processor/validate'

// Database handler
import data from '../../../models/db/db'

// Init router
const router = new Router

// Basic CRUD functionality
router
  // @route   GET api/topics
  // @desc    Get All The Topics Names
  // @access  Public
  .get('/topics', async ctx => ctx.body = data.topic_list)

  // @route   GET api/data/:topicName
  // @desc    Get The Topic Data
  // @access  Public
  .get('/:topicName', async ctx => {
    const topicName = ctx.params.topicName
    const topicData = data[String(topicName)]

    if (topicData) {
      ctx.body = topicData
    } else {
      ctx.status = 404
    }
  })

  // @route   POST api/send
  // @desc    Send Data To Server For Calculation
  // @access  Public
  .post('/send', async ctx => {
    if (process.env.NODE_ENV === 'development') {
      console.log(ctx.request.body)
    }

    if (!validate(ctx.request.body)) {
      ctx.status = 404
    } else {
      const result = handle(ctx.request.body)

      if (result) {
        ctx.body = result
      } else {
        ctx.status = 520
      }
    }
  })

export default () => router.routes()
