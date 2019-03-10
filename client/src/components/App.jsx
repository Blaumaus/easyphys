import React, { Component } from 'react'
import '../styles/App.scss'
import '../styles/animate.css'
import Header from './layout/Header'
import Menu from './menu/Menu'
import Form from './menu/Form'
import Results from './layout/Results'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: undefined,
      result: undefined,
      subject: undefined
    }
  }

  updateState = (value) => {
    this.setState(value)
  }

  render() {
    return (
      <Router>
        <>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/form" render= { () => <Form subject={this.state.subject} data={this.state.data} updateState={this.updateState}/> }/>
              <Route path="/results" render= { () => <Results data={this.state.result}/> }/>
              <Route path="/" render= { () => <Menu updateState={this.updateState}/> }/>
            </Switch>
          </div>
          </>
      </Router>
    )
  }
}

export default App