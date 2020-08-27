import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Home from './Home'


const App = () => {
  return (
    <Router>
      <>
        <Link to={`/`}>Homepage</Link>
        <div style={{ display: 'flex' }}>
          <Route exact path="/" component={Home} />

        </div>
      </>
    </Router>
  )
}

export default App

