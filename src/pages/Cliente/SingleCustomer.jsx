import React from 'react'
import { useParams } from 'react-router-dom'

import { 
  ButtonContent, 
  Container, 
  Email, 
  FavoriteButton, 
  Image, InfoContent, 
  LikeButton, 
  MainContent, 
  ProfileImg, 
  RemoveButton, 
  Title
 } from './SingleCusStyled'

const SingleCustomer = ({ name, lastname, email, avatar }) => {

  const { id } = useParams()
  console.log(id) 
   
  return (
    <Container>
        <MainContent>
          {/* <ProfileImg>
            <Image src={avatar} alt='user-Image'></Image>
            The Avatar from User here
          </ProfileImg>
        
          <InfoContent>
            
            <Title>{name} {lastname}</Title>
            <Email>{email}</Email>
          All The User Information should be here.
            <ButtonContent>
              <LikeButton></LikeButton>
              <FavoriteButton></FavoriteButton>   
              <RemoveButton></RemoveButton>
            </ButtonContent>

          </InfoContent> */}

        </MainContent>
        
    </Container>
  )
}

export default SingleCustomer