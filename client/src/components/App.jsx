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
      data: undefined
    }
  }

  updateData = (value) => {
    this.setState({ data: value })
  }

  render() {
    return (
      <Router>
        <>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/form" render= { () => <Form data={this.state.data}/> }/>
              <Route path="/results" render= { () => <Results /> }/>
              <Route path="/" render= { () => <Menu updateData={this.updateData}/> }/>
            </Switch>
          </div>
        </>
      </Router>
    )
  }
}

export default App
