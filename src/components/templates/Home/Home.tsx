import React from 'react';
import { MenuCircle } from '../../molecules/MenuCircle/MenuCircle';
import { Card } from '../../organisms/Card/Card';
import { Container, CardContainer, Top, CardList, CardHeader } from './styles';

export const Home = () => {
    return(
        <Container>
            <Top>
                <MenuCircle />
            </Top>
            <CardContainer>
                <CardHeader>

                </CardHeader>
                <CardList>
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
                </CardList>
            </CardContainer>
        </Container>
    );
}