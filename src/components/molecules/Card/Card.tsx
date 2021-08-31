import React from 'react';
import { Description } from '../../atoms/Text/Description/Description';
import { Title } from '../../atoms/Text/Title/Title';
import { MenuCard } from '../MenuCard/MenuCard';
import { Container, CardLink } from './styles';

type CardProps = {
    title: string,
    description: string,
    link: string,
}

export const Card: React.FC<CardProps> = ({title, description, link}: CardProps) => {
    return(
        <Container href={link} target='_blank'>
            <CardLink>
                <Title text={title}/>
                <Description text={description} />
                <MenuCard />
            </CardLink>
        </Container >
    );
}