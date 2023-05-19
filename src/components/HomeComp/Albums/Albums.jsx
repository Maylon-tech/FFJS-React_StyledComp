import React, { useState, useEffect } from 'react'
import { AlbumContainer, AlbumsCard } from '../../../pages/API/styles'

import Loading from '../../Loading'
import Template from '../../DefaultPage/Template'

const Albums = () => {
  const [albums, setAlbuns] = useState([])
  const [isLoading, setIsLoading] = useState(false)

    // e uma funcao assincrona.. ou seja executa e nao espera.. ja renderiza a pagina
  useEffect(() => {     /*  */
  setIsLoading(true)
    /* Fazendo um Get em Albuns do fakeAPI - jsonPlaceholder  */
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())   /* Repondendo em Json() */
    .then(data => {       /* Resposta do Dados da API */
      setAlbuns(data)   /*  Atualizando o Estado com data.  */
      setIsLoading(false)
    })
  }, [])

  return (
    <Template title="Albums">
      <Loading visible={isLoading} />
      
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
    </Template>
  )
}

export default Albums