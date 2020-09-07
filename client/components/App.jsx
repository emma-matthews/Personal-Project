import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


import Home from './Home'


const App = () => {
  return (
    <Router>
      <>
        <div className='main'>
          <Route exact path="/" component={Home} />
        </div>

      </>
    </Router>
  )
}
export default App
