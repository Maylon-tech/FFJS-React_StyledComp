import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    height: 10vh;
    background-color: #eee;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: green;
    font-size: 1.3rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    letter-spacing: 1px;

    span  {
        color: #222;
        font-weight: bold;
        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
    }
    
`

export const Navbar = styled.nav`

    ul {

    }

    a {
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        margin: 0 1rem;
        font-size: 1.3rem;
        cursor: pointer;
        color: #222;
    }
`

export const Header = styled.header`
    

    > h1 {
        color: #222;
        font-family: Arial, Helvetica, sans-serif;
        margin: 1.8rem 0;
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`