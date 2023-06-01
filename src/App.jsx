import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home/Home'
import GlobalStyle from './GlobalStyles/GlobalStyle'
import TemplateDefault from './template/TemplateDefault'
import Customer from './pages/Cliente/Customer'
import SingleCustomer from './pages/Cliente/SingleCustomer'
import Register from './pages/Register/Register'

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/customer" element={ <Customer />} />
          <Route path="/customer/:id" element={ <Register />} />
          <Route path="/customer/:id" element={ <SingleCustomer /> } />
        </Routes>
      </TemplateDefault>
    </Router>

  )
}

export default App
