import React from 'react';
import { Description } from '../../atoms/Text/Description/Description';
import { Title } from '../../atoms/Text/Title/Title';
import { MenuCard } from '../MenuCard/MenuCard';
import { Container, CardLink } from './styles';

type CardProps = {
    title: string,
    description: string,
    link: string,
    date: string,
    id: string
}

export const CardHighlighted: React.FC<CardProps> = ({title, description, link, date, id}: CardProps) => {
    return(
        <Container href={link} target='_blank'>
            <CardLink>
                <Title text={title}/>
                <Description text={description} />
                <MenuCard date={date} id={id}/>
            </CardLink>
        </Container >
    );
}