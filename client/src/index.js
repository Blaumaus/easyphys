// Dependencies Imports
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// Styles
import './styles/index.scss'

// Components
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
