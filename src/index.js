// Imports
import ip from 'ip'
import { port } from './utils/config'
import app from './app'

// Init URL
const url = `${ip.address()}:${port}`

// Start Server
app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`\nServer available at: \n\nYour local network: http://${url}/\nYour computer: http://localhost:${port}/\n`)
  }
})