import React from 'react'
import { Header } from './styles'

const Headering = ({ title }) => {
  return (
    <Header>
        <h1>{ title }</h1>
    </Header>
  )
}

export default Headering