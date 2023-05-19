import React, { useEffect, useState } from 'react'
import { Container, Cards, Title } from './CustomerStyle'
import Card from './Card'
import axios from 'axios'

const Customer = () => {
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        axios("https://reqres.in/api/users")
            .then(response => {
                const { data } = response.data
                setCustomer(data)
                console.log(data)
            })     
    }, [])

  return (
    <Container>
        <Title>Sessao de Clientes</Title>
        <Cards>
            {
                customer.map(item => {
                   return (
                        <Card key={item.id}
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                        />                        
                   )
})
            }
        </Cards>
    </Container>
  )
}

export default Customer