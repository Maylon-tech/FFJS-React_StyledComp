import React from 'react'
import { Button, CardGrid, IconContent, ProfileContent, ProfileInfo } from './CustomerStyle'
import { AiOutlineEye, AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, name, lastname, email, avatar }) => {

    const navigate = useNavigate()

  return (
    <CardGrid>
        <ProfileContent>
            <img src={avatar} alt="" />
            <ProfileInfo>
                <h1>{name} {lastname}</h1>
                <p>{email}</p>
            </ProfileInfo>
        </ProfileContent>
        <IconContent>
            <Button>
                <RiDeleteBin6Line size={40} color='gray'/>
            </Button>
            <Button onClick={() => navigate("singleCustomer")}>
                <AiOutlineEye size={40} color='crimson'/>
            </Button>
            <Button>
                <AiOutlineEdit size={40} color='gray'/>
            </Button>            
        </IconContent>
    </CardGrid>
  )
}

export default Card