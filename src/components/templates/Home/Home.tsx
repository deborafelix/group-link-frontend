import React from 'react';
import { MenuCircle } from '../../molecules/MenuCircle/MenuCircle';
import { Card } from '../../organisms/Card/Card';
import { Container, ContainerCard, Top, ListCard } from './styles';

export const Home = () => {
    return(
        <Container>
            <Top>
                <MenuCircle />
            </Top>
            <ContainerCard>
                <ListCard>
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
                </ListCard>
            </ContainerCard>
        </Container>
    );
}