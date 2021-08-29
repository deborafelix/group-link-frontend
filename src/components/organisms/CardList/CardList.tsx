import React from 'react';
import { Card } from '../../molecules/Card/Card';
import { Container } from './styles';


export const CardList = ()  => {
    return (
        <Container>
            <Card 
                title={'titulo'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis turpis vitae blandit fringilla. Cras congue vehicula commodo.'}
            />
            <Card 
                title={'titulo'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis turpis vitae blandit fringilla. Cras congue vehicula commodo.'}
            />
            <Card 
                title={'titulo'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis turpis vitae blandit fringilla. Cras congue vehicula commodo.'}
            />
            <Card 
                title={'titulo'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis turpis vitae blandit fringilla. Cras congue vehicula commodo.'}
            />
        </Container>
);
}