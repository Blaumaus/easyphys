import React, { Component } from 'react'
import '../styles/App.scss'
import Header from './layout/Header'
import Index from './layout/Index'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Index />
        </div>
      </>  
    )
  }
}

export default App
