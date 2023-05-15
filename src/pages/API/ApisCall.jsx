import React, { useEffect } from 'react'
import { AlbumContainer, AlbumsCard, Container, ContentAlbum, ContentUsers } from './styles'
import { useState } from 'react'

const ApisCall = () => {
  const [albums, setAlbuns] = useState([])
  const [loading, setLoading] = useState(false)

  // e uma funcao assincrona.. ou seja executa e nao espera.. ja renderiza a pagina
  useEffect(() => {     /*  */
  setLoading(true)
    /* Fazendo um Get em Albuns do fakeAPI - jsonPlaceholder  */
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())   /* Repondendo em Json() */
    .then(data => {       /* Resposta do Dados da API */
      setAlbuns(data)   /*  Atualizando o Estado com data.  */
      setLoading(false)
    })
  }, [])
    // SE estive fora do UseEffect o componente seria renderizado toda vez.
  return (
    <Container>
      
      <ContentAlbum>
        <h1>Albuns</h1>
        {
          loading === true ? 'Loading...' : "" 
        }
        <AlbumContainer>
          {
            albums.map((item) => {
              return (
                <AlbumsCard>
                  <h3>{item.title}</h3>  
                  <span>id: {item.id}</span>
                </AlbumsCard>
              )
            })
          }
          </AlbumContainer>
      </ContentAlbum>

      <ContentUsers>
       <h1> Users api call...</h1>
      </ContentUsers>
    </Container>
  )
}

export default ApisCall