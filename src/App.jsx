import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import GlobalStyle from './GlobalStyles/GlobalStyle'
import ApisCall from './pages/API/ApisCall'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header title="Formacao FullStack" />

      <Routes>
        <Route path="/api" element={ <ApisCall />} />
        <Route path="/" element={ <Home />} />

      </Routes>
    </Router>
  )
}

export default App
