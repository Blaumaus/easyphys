import React, { Component, useState } from 'react'
import '../styles/App.scss'
import '../styles/animate.css'
import Header from './layout/Header'
import Menu from './menu/Menu'
import Form from './menu/Form'
import Results from './layout/Results'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = props => {
  const [ state, updateState ] = useState({
    data: undefined,
    result: undefined,
    subject: undefined
  })
  
  updateState = (value) => {
    setState(value)
  }

  return (
    <Router>
      <>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/form" render= { () => <Form subject={state.subject} data={state.data} updateState={updateState}/> }/>
            <Route path="/results" render= { () => <Results data={state.result}/> }/>
            <Route path="/" render= { () => <Menu updateState={updateState}/> }/>
          </Switch>
        </div>
        </>
    </Router>
  )
}

export default App
