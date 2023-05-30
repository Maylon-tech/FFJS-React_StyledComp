import styled from 'styled-components'

export const Container = styled.div`
  width: 500px;
  height: 400px;
  background-color: gray;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ anima }) =>  anima ? '.9' : '0'};

`

export const ButtonClose = styled.button`
    padding: 1rem;
    background-color: crimson;
    color: #fff;
`