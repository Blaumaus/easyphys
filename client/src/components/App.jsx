import React, { useState, useEffect } from 'react'
import '../styles/App.scss'
import '../styles/animate.css'
import Header from './layout/Header'
import Menu from './menu/Menu'
import Form from './menu/Form'
import Results from './layout/Results'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function () {
  const [data, setData] = useState(null)
  const [result, setResult] = useState(null)
  const [subject, setSubject] = useState(null)

  return (
    <Router>
      <>
        <Header />
        <div className="container">
          <Switch>
            <Route 
              path="/form"
              render={ () => (
                <Form 
                  subject={subject} 
                  data={data}
                  updateData={setData}
                  updateResult={setResult}
                />
              )}
            />
            <Route 
              path="/results"
              render={ () => <Results data={result}/> }
            />
            <Route
              path="/"
              render={ () => (
                <Menu 
                  updateData={setData}
                  updateSubject={setSubject}
                />
              )}
            />
          </Switch>
        </div>
      </>
    </Router>
  )
}
