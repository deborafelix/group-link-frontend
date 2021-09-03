import React from 'react';
import { Options } from '../../atoms/Buttons/Options/Options';
import { Date } from '../../atoms/Text/Date/Date';
import { Container } from './styles';

type MenuCardProps = {
    date: string
}

export const MenuCard: React.FC<MenuCardProps> = ({date}: MenuCardProps) => {
    return(
    <Container>
        <Date text={date}/>
        <Options/> 
    </Container>  
    );
}