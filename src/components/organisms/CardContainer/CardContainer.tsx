import React from 'react';
import { CardList } from '../CardList/CardList';
import { Container, CardHeader } from './styles';


export const CardContainer: React.FC = ()  => {
    return (
        <Container>
            <CardHeader>

            </CardHeader>
            <CardList />
        </Container>
);
}