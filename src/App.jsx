import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import GlobalStyle from './GlobalStyles/GlobalStyle'
import Basics from './pages/Basics/Basics'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header title="Formacao FullStack" />

      <Routes>
        <Route path="/basics" element={ <Basics />} />
        <Route path="/" element={ <Home />} />

      </Routes>
    </Router>
  )
}

export default App
