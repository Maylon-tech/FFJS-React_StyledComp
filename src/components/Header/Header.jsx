import React, { useState } from 'react'
import { CloseButton, Container, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Navbar, OverLay } from './Headerstyles'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'  

const Header = ({ title }) => {
  const [drawer, setDrawer] = useState(false)

  const handleToggleMenu = () => {
    setDrawer(!drawer)
  }

  const handleCloseMenu = () => {
    setDrawer(false)
  }

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

          {/* Menu Burger para Chamar o Menu Drawer.  */}
        <IconButton onClick={() => handleToggleMenu()}>
          <AiOutlineMenu />
        </IconButton>

          {/*
              Open - e uma Propriedade para controlar o estado do MenuDrawer.
              onClose = Propriedade para controle o fechamento do Menu. Essa propriedade chama
              a Funcao handleToggleMenu().
          */}
        <OverLay />
        <Drawer control={drawer}>
          <CloseButton onClick={handleCloseMenu}>
            <GrClose />
          </CloseButton>
          <List>
            <ListItem>
              <ListItemIcon>
                <AiOutlineHome />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AiOutlineHome />
              </ListItemIcon>
              <ListItemText>Clients</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AiOutlineHome />
              </ListItemIcon>
              <ListItemText>page 1</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AiOutlineHome />
              </ListItemIcon>
              <ListItemText>page 2</ListItemText>
            </ListItem>
          </List>
        </Drawer>

        
    </Container>
  )
}

export default Header