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
    position: relative;
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

/*  Menu Drawer - Side Bar  */

export const Drawer = styled.div`
    height: 100vh;
    width: 320px;
    background-color: lightgray;
    border: 2px solid orange;
    padding: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .6s;
    left: ${({ control }) => control ? '-1%' : '-100%'};
    z-index: 10;
`

export const OverLay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: ${({ control }) => control ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)'};
    
`

export const List = styled.ul`
    list-style: none;
    border: 3px solid white;
`

export const ListItem = styled.li`
    border: 3px solid green;
    margin: 1rem 0;
    padding: 1.3rem;
    cursor: pointer;
`

export const ListItemIcon = styled.span`
    margin-right: 1rem;
    
`

export const ListItemText = styled.span`
    color: #fff;
`

export const IconButton = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    color: #222;
    font-size: 2rem;
    > svg {
        color: #333;
    }
`

export const CloseButton = styled.button`
    padding: .6rem;
    background-color: crimson;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 25px;
`