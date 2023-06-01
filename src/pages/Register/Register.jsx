import React, { useState } from 'react'
import { Container, NewRegister, InputTitle, InputFiled, ButtonConfirm } from './RegisterStyled'
import Snackbar from '../../components/SnackBar/Snackbar'


const Register = () => {
  const [toasty, setToasty] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleConfirm = () => {
    setToasty(!toasty)
    setLoading(!loading)
  }


  return (
    <Container>
        <h1>Form for register</h1>
        <NewRegister>

          <InputTitle>Nome:</InputTitle>
          <InputFiled type="text" />
          <InputTitle>Sobre nome:</InputTitle>
          <InputFiled type="text" />
          <InputTitle>Job:</InputTitle>
          <InputFiled type="text" />


          <ButtonConfirm onClick={handleConfirm}>
            {
              loading ? 'Carregando..' : 'Cadastrar' 
            }            
          </ButtonConfirm>
        </NewRegister>
        {toasty && <Snackbar open={setToasty} text="com sucesso!!" /> }
    </Container>
  )
}

export default Register