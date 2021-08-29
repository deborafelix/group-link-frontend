import React from 'react';
import { CircleButton } from '../../atoms/Buttons/Circle/CircleButton';
import { Container } from './styles';
import { FiPlus, FiSearch, FiShare2 } from 'react-icons/fi';


export const MenuCircle: React.FC = ()  => {
    return (
        <Container>
            <CircleButton  Icon={FiPlus}/>
            <CircleButton  Icon={FiSearch}/>
            <CircleButton  Icon={FiShare2}/>
        </Container>
);
}
