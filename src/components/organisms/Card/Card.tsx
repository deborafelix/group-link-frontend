import React from 'react';
import { Description } from '../../atoms/Text/Description/Description';
import { Title } from '../../atoms/Text/Title/Title';
import { MenuCard } from '../../molecules/MenuCard/MenuCard';
import { Container, CardLink } from './styles';

export const Card = () => {
    return(
        <Container>
            <CardLink>
                <Title text={'titulo do card'}/>
                <Description text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis turpis vitae blandit fringilla. Cras congue vehicula commodo.'} />
                <MenuCard />
            </CardLink>
        </Container >
    );
}