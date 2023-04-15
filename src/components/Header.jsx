import React from 'react'
import '../components/Header.css'


const Header = ({ titulo }) => {
  return (
    <header>
        <div className="logo">
            <span>LOGO</span>
        </div>
        { titulo }
        <nav className="navbar">
            <ul className="menu">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header