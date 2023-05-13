import styled from 'styled-components'

export const Container = styled.div`
  height: 90vh;
  padding: 1rem;
  background-color: #fff;
  font-family: Arial, Helvetica, sans-serif;

  h1 {
    text-align: center;
    margin: 2rem 0;
  }
`

export const Section = styled.section`
  width: 100%;
  height: 350px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  align-items: center;
  place-items: center;
`

export const CardComp = styled.div`
  width: 280px;
  height: 270px;
  background-color: #eee;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #222;
  font-size: 1rem;
  box-shadow: 2px 2px 12px rgba(0,0,0,0.5);
  cursor: pointer;
  transition: .4s ease;

  > h2 {
    margin: 1rem 0;
  }
  > p {
    margin-bottom: 1.2rem;
    text-align: center;
  }
  &:hover {
    transform: translateY(-10px);
  }
  > img {
   width: 120px;
   height: 120px;
   border-radius: 50%;
   object-fit: cover;
   
  }

`

/*  middle module - countner API fetch */

export const MiddleModule = styled.div`
  background-color: cyan;
  height: 400px;
  width: 100%;
  
  display: grid;
  place-items: center;
`