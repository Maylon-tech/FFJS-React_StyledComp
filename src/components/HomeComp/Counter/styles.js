import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 300px;
  background: #eee;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 1rem;

  > h3 {
    font-size: 1.6rem;
  }

  span {
    width: 160px;
    height: 160px;
    position: absolute;
    bottom: 20px;
    right: 30%;
    color: #111;
    font-size: 2.7rem;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  > button{
    width: 140px;
    height: 50px;
    margin: 2.5rem auto;
    cursor: pointer;
    font-size: 1.4rem;
    color: #333;
    border: none;
    outline: none;
    border-radius: 8px;

    &:first-child {
      background-color: lightblue;
    }
    &:last-child {
      background-color: crimson;
    }
  }
`

export const CounterRes = styled.div`
  padding: 1.5rem;
  font-size: 2.5rem;
  border-bottom: 2px solid #444;
`