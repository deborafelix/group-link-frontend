import React from 'react';
import { Header } from '../Header/Header';
import { Container } from './styles';
import { CardContainer } from '../CardContainer/CardContainer';

export const Home = () => {
    return(
        <Container>
            <Header />
            <CardContainer />
        </Container>
    );
}