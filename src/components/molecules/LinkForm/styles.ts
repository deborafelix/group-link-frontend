import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;

    @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #fff;
    padding: 0;
    padding-top: 30px;
}

`