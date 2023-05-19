import React from 'react'
import { ContainerSingle } from './CustomerStyle'

const SingleCustomer = ({ id }) => {
  return (
    <ContainerSingle>
        <h1>Single Customer Show</h1>
        <h1>{id}</h1>
    </ContainerSingle>
  )
}

export default SingleCustomer