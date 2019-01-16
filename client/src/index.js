// Dependencies Imports
import React from 'react'
import ReactDOM from 'react-dom'

// Styles
import './styles/index.scss'

// Components
import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
