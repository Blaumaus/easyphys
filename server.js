// Imports
const express = require('express')
const bodyParser = require('body-parser')

// Routes
const appDataRoutes = require('./routes/app/data')

// Init Port
const port = process.env.PORT || 5000

// Init Express
const app = express()

// Body Parser
app.use(bodyParser.json())

// Static Client Files
app.use(express.static(`./client/build`))

// App Requests
app.use('/app/data', appDataRoutes)

// Send All Other Requests To React Router
app.get('*', (req, res) => res.sendStatus(200))

app.listen(port, () => console.log(`App started on port ${port} ...`))
