import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './netflix/netflix.module.css'
import Google from './google/Google'
import Home from './Home'
import Midwestern from './midwestern/Midwestern'
import Netflix from './netflix/Netflix'
import NetflixHomePg from './netflix/NetflixHomePg'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/netflix' exact>
            <Netflix/>
          </Route>

          <Route path='/netflix/browse' exact>
            <NetflixHomePg/>
          </Route>

          <Route path='/google' exact>
            <Google />
          </Route>
          
          <Route path='/midwestern' exact>
            <Midwestern />
          </Route>

        </Switch>
      </Router>
      
    </div>
  )
}

export default App
