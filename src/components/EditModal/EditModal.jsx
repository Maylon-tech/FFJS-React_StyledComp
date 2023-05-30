import React from 'react'
import { ButtonClose, Container } from './styled'

const EditModal = ({ control }) => {

    const handleCloseModal = () => {
        control(false)
    }


  return (
    <Container anima={control}>
        <h1>Modal edit here</h1>
        <ButtonClose onClick={handleCloseModal}>Fechar</ButtonClose>
    </Container>
  )
}

export default EditModal