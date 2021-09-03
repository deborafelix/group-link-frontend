import React from 'react';
import { CircleButton } from '../../atoms/Buttons/Circle/CircleButton';
import { Container } from './styles';
import { FiPlus, FiSearch, FiMenu } from 'react-icons/fi';
import { useApp } from '../../../context';


export const MenuCircle: React.FC = ()  => {
    const {handleOnAddFormClick, handleOnSearchFormClick} = useApp();
    return (
        <Container>
            <CircleButton  Icon={FiPlus} onClick={handleOnAddFormClick}/>
            <CircleButton  Icon={FiSearch} onClick={handleOnSearchFormClick}/>
            <CircleButton  Icon={FiMenu}/>
        </Container>
);
}
