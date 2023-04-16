import React from 'react'
import '../components/Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div className="logo">
            <span>LOGO</span>
        </div>
       
        <nav className="navbar">
            <ul className="menu">
              
                <Link to="/">Home</Link>

                <Link to="/contents">Contents</Link>

                <Link></Link>

                <Link></Link>

            </ul>
        </nav>
    </header>
  )
}

export default Header