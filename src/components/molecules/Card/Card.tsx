import React from 'react';
import { Description } from '../../atoms/Text/Description/Description';
import { Title } from '../../atoms/Text/Title/Title';
import { MenuCard } from '../MenuCard/MenuCard';
import { Container, CardLink } from './styles';

type CardProps = {
    title: string,
    description: string,
}

export const Card: React.FC<CardProps> = ({title, description}: CardProps) => {
    return(
        <Container>
            <CardLink>
                <Title text={title}/>
                <Description text={description} />
                <MenuCard />
            </CardLink>
        </Container >
    );
}