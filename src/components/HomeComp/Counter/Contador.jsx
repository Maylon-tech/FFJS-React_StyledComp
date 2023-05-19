import React, { useState } from 'react'
import { Buttons, Container, CounterRes } from './styles'
import { useEffect } from 'react'


const Contador = ({ title }) => {
  const [counter, setCounter] = useState(0)

  const handleClick = operador => {
    let value = operador === '+'
      ? counter + 1
      : counter - 1
      setCounter(value)
  }

  useEffect(() => {
    
  }, [])

  return (
    
      <Container>
          <h3>{ title }</h3>
          <Buttons>
            <button onClick={() => handleClick('+')}>Mais</button>
            <button onClick={() => handleClick('-')}>Menos</button>
          </Buttons>

          <CounterRes>
            {counter}
          </CounterRes>
      </Container>
 
  )
}

export default Contador