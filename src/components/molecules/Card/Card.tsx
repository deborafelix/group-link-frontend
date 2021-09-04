import React from 'react';
import { Description } from '../../atoms/Text/Description/Description';
import { Title } from '../../atoms/Text/Title/Title';
import { MenuCard } from '../MenuCard/MenuCard';
import { Container, CardLink, URLContainer } from './styles';

type CardProps = {
    title: string,
    description: string,
    link: string,
    date: string,
}

export const Card: React.FC<CardProps> = ({title, description, link, date}: CardProps) => {
    return(
        <Container>
            <CardLink>
                <URLContainer href={link} target='_blank'>
                    <Title text={title} />
                    <Description text={description} />
                </URLContainer>
                <MenuCard date={date}/>
            </CardLink>
        </Container >
    );
}