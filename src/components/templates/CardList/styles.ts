import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
  width: 100%;

  @media(max-width: 600px) {
    grid-template-columns: none;
  }
`;
