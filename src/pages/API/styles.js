import styled from 'styled-components'

export const Container = styled.div`
  background-color: burlywood;
  padding: 1rem;
`

export const ContentAlbum = styled.div`
  height: 100vh;
  background-color: azure;
  display: grid;
  place-items: center;
  overflow: hidden;

  > h1 {
    color: #222;
    font-family: Arial, Helvetica, sans-serif;
    margin: 1.8rem 0;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

export const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  padding: 1.4rem;
  position: relative;
  border: 3px solid orangered;

`

export const AlbumsCard = styled.div`
  width: 200px;
  height: 150px;
  border: 2px solid orange;
  padding: 1rem;
  border-radius: 8px;
  background-color: #333;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  > h3 {
    font-size: 1.1rem;
    text-align: center;
  }
  > span {
    color: lightgreen;
    font-weight: bold;
  }
`



export const ContentUsers = styled.div`
  height: 100vh;
  background-color: brown;
  display: grid;
  place-items: center;
`


