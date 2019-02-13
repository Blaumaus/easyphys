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

    this.setState = this.setState.bind(this)
  }


  render() {
    let { setState, state } = this
    let { subject, result, data } = state

    return (
      <Router>
        <>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/form" render= { () => 
                <Form subject={subject}
                    data={data} 
                    updateState={setState}/> }/>

              <Route path="/results" render= { () => 
                <Results data={result}/> }/>

              <Route path="/" render= { () => 
                <Menu updateState={updateState}/> }/>
            </Switch>
          </div>
          </>
      </Router>
    )
  }
}

export default App
