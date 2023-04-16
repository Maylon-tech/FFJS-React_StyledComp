import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import Contents from './pages/Contents'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contents" element={ <Contents />} />
        <Route path="/" element={ <Home />} />

      </Routes>
    </Router>
  )
}

export default App
