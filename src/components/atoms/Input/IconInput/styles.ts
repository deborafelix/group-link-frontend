import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(35px, 1fr));
    justify-content: center;
    width: 200px;
`

export const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #f5f3f4;
    border-radius: 4px;
    margin: 2px;
`