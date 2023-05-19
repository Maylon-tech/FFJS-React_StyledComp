import React, { useEffect, useState } from 'react'
import { UserCards, UserContainer } from '../../../pages/API/styles'
import Template from '../../DefaultPage/Template'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())   
    .then(data => {       
      setUsers(data)  
      setLoading(false)
    })
  }, [])

  return (
    <Template title="Users">
        {
          loading === true ? 'Loading...' : "" 
        }
        <UserContainer>
          {
            users.map((item) => {
              return (
                <UserCards>
                  <span>
                    {item.id}: {item.username} ---- <h4>{item.name}</h4>
                  </span>
                  <h3>{item.phone}</h3>
                  <span>{item.email}</span>
                </UserCards>
              )
            })
          }
        </UserContainer>
    </Template>
  )
}

export default Users