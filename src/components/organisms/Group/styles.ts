import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    width: 5%;

    @media (max-width: 800px)
    {
        width: 10%; 
    }

    @media (max-width: 700px)
    {
        width: 20%; 
    }
`
