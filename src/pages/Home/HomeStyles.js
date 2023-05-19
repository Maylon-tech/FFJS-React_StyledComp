import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding: 1rem;
  background-color: #fff;
  font-family: Arial, Helvetica, sans-serif;

  h1 {
    text-align: center;
    margin: 1rem 0;
  }
`

export const Section = styled.section`
  width: 100%;
  height: 480px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  place-items: center;
`

export const CardComp = styled.div`
  width: 320px;
  height: 350px;
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

  > div {
    width: 85%;
    height: 65%;
    display: flex;
    place-items: center;

   > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
    
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

`
