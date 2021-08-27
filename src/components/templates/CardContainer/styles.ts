import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f3f4;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 80%;
  min-height: 90vh;
  border-radius: 10px;

  @media(max-width: 600px) {
    width: 70%;
    justify-content: center;
  }
`;

export const CardHeader = styled.div`
  align-self: center;
  width: 95%;
  height: 50px;
`;