import React from 'react'
import { Container, Navbar } from './styles'
import { Link } from 'react-router-dom'


const Header = ({ title }) => {
  return (
    <Container>
        <span>
            LOGO
        </span>

       {title}
       
        <Navbar>
            <ul>
                <Link to="/">Home</Link>

                <Link to="/customer">Clientes</Link>

                <Link></Link>

                <Link></Link>
            </ul>
        </Navbar>
    </Container>
  )
}

export default Header