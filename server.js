// Imports
const express = require('express')
const bodyParser = require('body-parser')
const ip = require('ip')

// Routes
const apiDataRoutes = require('./routes/api/data')

// Init Adress
const port = process.env.PORT || 5000
const ipAdress = `${ip.address()}:${port}`

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
app.get('*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`))

// Start Server
app.listen(port, () => console.log(`\nServer available at: \n\nYour local network: http://${ipAdress}/\nYour computer: http://localhost:${port}/\n`))
