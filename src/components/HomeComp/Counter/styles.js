import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 300px;
  background: #eee;
  position: relative;
  text-align: center;
  display: flex;
 
  padding: 1rem;

  button{
    width: 140px;
    height: 50px;
    margin: 2.5rem auto;
    cursor: pointer;
    font-size: 1.4rem;
    color: #333;
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
`;
