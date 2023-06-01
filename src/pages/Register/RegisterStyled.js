import styled from 'styled-components'

export const Container = styled.div`
  height:80vh;
  background-color: gray;
  position: relative;
  display: grid;
  place-items: center;

  h1 {
    color: #fff;
    
  }
`
export const NewRegister = styled.form`
  max-width: 100%;
  width: 450px;
  height: 350px;
  max-height: 100vh;
  padding: 1rem;
  border-radius: 7px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
 
`

export const ButtonConfirm = styled.button`
  margin-top: 1.5rem;
  width: 120px;
  padding: 1rem;
  background-color: crimson;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`

export const InputTitle = styled.label`
  margin-top: .8rem;
`

export const InputFiled = styled.input`
  padding: 0%.8rem;
  border-radius: 5px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #444;
`