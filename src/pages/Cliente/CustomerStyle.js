import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
 
`
export const Title = styled.h1`
   font-size: 2rem;
   color: #222;
   text-align: center;
   padding: 1.5rem 0;
   font-family: Arial, Helvetica, sans-serif;
`

export const Cards = styled.div`
    padding: 2rem;

    max-width: 1120px;
    margin: 0 auto;
    background-color: lightgray;
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    place-items: center;
    row-gap: 1.2rem;
`

export const ProfileInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;

   > h1 {
        font-size: 1.3rem;
        font-family: Arial, Helvetica, sans-serif;
    }
    > p {
        margin: .5rem 0;
    }
`

export const ProfileContent = styled.div`
   display: flex;
   justify-content: space-between;

    > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 1rem;
    }
`

export const CardGrid = styled.div`
    width: 320px;
    height: 220px;
    border-radius: 8px;
    padding: 1rem;
    background-color: #eee;
    color: #222;
    
`

export const IconContent = styled.div`
    cursor: pointer;
    padding: 1rem;
    display: flex;
    gap: 1.3rem;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.div`

`


export const ContainerSingle = styled.div`
background-color: gray;
    height: 100vh;
    display: 100vw;
    display: grid;
    place-items: center;
`