// Imports
const express = require('express')
const router = express.Router()

// Handler
const handler = require('../../models/processor/handler')

// Validator
const validate = require('../../models/processor/validator')

// Database handler
const data = require('../../models/db/db')

// @route   GET api/topics
// @desc    Get All The Topics Names
// @access  Public
router.get('/topics', (req, res) => {
  res.json(data.topic_list)
})

// @route   GET api/data/:topicName
// @desc    Get The Topic Data
// @access  Public
router.get('/:topicName', (req, res) => {
  if (data[String(req.params.topicName)]) {
    res.json(data[req.params.topicName])
  } else {
    res.sendStatus(404)
  }
})

// @route   POST api/send
// @desc    Send Data To Server For Calculation
// @access  Public
router.post('/send', (req, res) => {
  console.log(req.body)

  if (!validate(req.body)) {
    res.sendStatus(404)
  } else {
    const calcRes = handler(req.body)

    if (calcRes) {
      res.send(calcRes)
    } else {
      res.sendStatus(520)
    }
  }
})

module.exports = router
