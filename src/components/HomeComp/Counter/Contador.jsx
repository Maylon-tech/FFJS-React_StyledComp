import React, { useState } from 'react'
import { Container } from './styles'
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
    alert('Ok counter On..')
  }, [])

  return (
    <Container>
        { title }
        <button onClick={() => handleClick('+')}>Mais</button>
        <button onClick={() => handleClick('-')}>Menos</button>

        <span>{counter}</span>
    </Container>
  )
}

export default Contador