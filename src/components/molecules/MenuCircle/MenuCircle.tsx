import React from 'react';
import { CircleButton } from '../../atoms/Buttons/Circle/CircleButton';
import { Container } from './styles';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useApp } from '../../../context';


export const MenuCircle: React.FC = ()  => {
    const {handleOnLinkFormClick, handleOnSearchFormClick} = useApp();
    return (
        <Container>
            <CircleButton  Icon={FiPlus} onClick={handleOnLinkFormClick}/>
            <CircleButton  Icon={FiSearch} onClick={handleOnSearchFormClick}/>
        </Container>
);
}
