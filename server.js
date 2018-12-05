// Importss
const express = require('express')
const bodyParser = require('body-parser')

// Init Port
const port = process.env.PORT || 5000

// Init Express
const app = express()

// Body parser
app.use(bodyParser.json())

// Static Client Files
app.use(express.static(`./client/build`))

// Send all other traffic to rect
app.get('*', (req, res) => res.sendStatus(200))

app.listen(port, () => console.log(`App successfully startrd on port ${port}`))
