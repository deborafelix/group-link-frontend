import React from 'react';
import { Options } from '../../atoms/Buttons/Options/Options';
import { Date } from '../../atoms/Text/Date/Date';
import { Container } from './styles';

type MenuCardProps = {
    date: string
    id: string
}

export const MenuCard: React.FC<MenuCardProps> = ({date, id}: MenuCardProps) => {
    return(
    <Container>
        <Date text={date}/>
        <Options id={id}/> 
    </Container>  
    );
}