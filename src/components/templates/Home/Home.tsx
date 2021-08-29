import React from 'react';
import { Header } from '../../organisms/Header/Header';
import { Container } from './styles';
import { CardContainer } from '../../organisms/CardContainer/CardContainer';

export const Home: React.FC = () => {
    return(
        <Container>
            <Header />
            <CardContainer />
        </Container>
    );
}