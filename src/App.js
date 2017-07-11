import React, { Component } from 'react'
import logo from './logo.svg'
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an API party</h3>
            <h1>API Party</h1>
          </div>
        </div>
        <ul className="nav-links">
            <li>
              <NavLink to="/github">Github API</NavLink>
            </li>
        </ul>
        <Switch>
          <Route path="/github" render={() => <h1>Github</h1>}/>
          <Route render={() =>  <p>To get started, click of the links above</p>}/>
        </Switch>
      </div>
    )
  }
}

export default App
