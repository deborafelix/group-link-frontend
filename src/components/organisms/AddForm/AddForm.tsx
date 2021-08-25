import React from 'react';
import { AddButton } from '../../atoms/Buttons/Add/AddButton';
import { LineForm } from '../../molecules/LineForm/LineForm';
import { Container } from './styles';

export const AddForm = () => {
    return(
        <Container>
            <LineForm text={'Titulo do link'} isBig={false}/>
            <LineForm text={'Link'} isBig={false}/>
            <LineForm text={'Descrição'} isBig={true}/>
            <AddButton />
        </Container >
    );
}