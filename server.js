// Imports
const express = require('express')
const bodyParser = require('body-parser')

// Routes
const apiDataRoutes = require('./routes/api/data')

// Init Port
const port = process.env.PORT || 5000

// Init Express
const app = express()

// Enable CORS for requests from client
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  
  next()
})

// Body Parser
app.use(bodyParser.json())

// Static Client Files
app.use(express.static(`./client/build`))

// App Requests
app.use('/api/data', apiDataRoutes)

// Send All Other Requests To React Router
app.get('*', (req, res) => res.sendStatus(200))

app.listen(port, () => console.log(`App started on port ${port} ...`))
