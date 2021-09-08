import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    background-color: #fff;
`;

export const ChangeFormButton = styled.button`
    margin: 10px;
    font-size: 10px;
` 