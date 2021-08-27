import styled from 'styled-components';

export const Container = styled.div`
    margin: 5px;
`

export const Text = styled.text`
    font-size: 30px;
    font-weight: 700;

    @media (max-width: 600px) {
    font-size: 25px;
   }

   @media (max-width: 350px) {
    font-size: 20px;
   }
}
`