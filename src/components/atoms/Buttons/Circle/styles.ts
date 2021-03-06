import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    @media (max-width: 600px) {
    width: 35px;
    height: 35px;
   }
`

export const Circle = styled.div`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;    
    border-width: 0.5px;
    border-color: black;
    border-style: solid;
    border-radius: 50%;

    ${Container}:hover & {
    background-color: #f5f3f4;
  }

    @media (max-width: 600px) {
    width: 30px;
    height: 30px;
   }
`