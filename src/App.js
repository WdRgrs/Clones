import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Google from './google/Google'
import Home from './Home'
import Midwestern from './midwestern/Midwestern'
import Netflix from './netflix/Netflix'
import NetflixHomePg from './netflix/NetflixHomePg'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/netflix' exact>
            <Netflix 
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          </Route>

          <Route path='/netflix/browse' exact>
            <NetflixHomePg 
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
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
