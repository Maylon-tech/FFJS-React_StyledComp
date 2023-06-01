import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 130px;
  background-color: lightgray;
  padding: 1rem;
  position: absolute;
  top: 100px;
  right: 100px;

  display: ${({ show }) => show ? 'block' : 'none'};
`

export const Text = styled.p`
 font-size: 1.2rem;
 color: #222;
`

export const XButtonClose = styled.button`
 font-size: 1.2rem;
 color: #222;
`