import React, { useEffect, useState } from 'react'
import { Container, Cards, Title, RegisterButton } from './CustomerStyle'
import Card from './Card'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Customer = ({ id }) => {
    const [customer, setCustomer] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get("https://reqres.in/api/users")
            .then(response => {
                const { data } = response.data
                setCustomer(data)
            })     
    }, [])

    const handleRemoveCustomer = id => {
        
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(response => {
           
                const newCustomerState = customer.filter(customer => customer.id !== id)
                setCustomer(newCustomerState)
            })
    }

    // const handleSinglePage = () => {
       
    // } 


  return (
    <Container>
        <Title>Sessao de Clientes</Title>
        <RegisterButton onClick={() => navigate("register")}>New Register</RegisterButton>
        <Cards>
            {
                customer.map(item => {
                   return (
                        <Card 
                            key={item.id}
                            id={item.id}
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            onRemoveCustomer={handleRemoveCustomer}
                            // onSingleCustomer={handleSinglePage}
                        />                        
                   )
})
            }
        </Cards>
    </Container>
  )
}

export default Customer