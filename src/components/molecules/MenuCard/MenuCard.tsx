import React from 'react';
import { Fav } from '../../atoms/Buttons/Fav/Fav';
import { Date } from '../../atoms/Text/Date/Date';
import { Container } from './styles';

export const MenuCard = () => {
    return(
    <Container >
        <Date text={'30 de março de 2021'}/>
        <Fav /> 
    </Container>  
    );
}