import React from 'react';
import { CircleButton } from '../../atoms/Buttons/Circle/CircleButton';
import { Container } from './styles';
import { FiPlus, FiSearch, FiShare2 } from 'react-icons/fi';
import { useApp } from '../../../context';


export const MenuCircle: React.FC = ()  => {
    const {handleOnAddFormClick} = useApp();
    return (
        <Container>
            <CircleButton  Icon={FiPlus} onClick={handleOnAddFormClick}/>
            <CircleButton  Icon={FiSearch}/>
            <CircleButton  Icon={FiShare2}/>
        </Container>
);
}
