import React from 'react'
import { Container, Text, XButtonClose } from './SnackbarStyled'


const Snackbar = ({ open, onClose, text }) => {
    
    const handleCloseToasty = () => {
        onClose(false)
    }

  return (
    <Container
        show={open}
        onClose
     >
        
        <Text>
           { text }
        </Text>
        <XButtonClose onClick={handleCloseToasty}> X </XButtonClose>
    </Container>
  )
}

export default Snackbar 