import React from 'react';
import { Fav } from '../../atoms/Buttons/Fav/Fav';
import { Date } from '../../atoms/Text/Date/Date';
import { Container } from './styles';

type MenuCardProps = {
    isFav: boolean,
    date: string
}

export const MenuCard: React.FC<MenuCardProps> = ({date, isFav}: MenuCardProps) => {
    return(
    <Container >
        <Date text={date}/>
        <Fav isFav={isFav} /> 
    </Container>  
    );
}