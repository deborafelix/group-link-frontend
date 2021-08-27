import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const Top = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 10vh;
`;

export const CardContainer = styled.div`
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
  }
`;

export const CardHeader = styled.div`
  align-self: center;
  width: 95%;
  height: 50px;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
  width: 100%;
`;
