import React, { ReactNode } from 'react';
import { LineForm } from '../../atoms/LineForm/LineForm';
import { Container } from './styles';
import { Link, useApp } from '../../../context';

export const UserForm = () => {
    return(
    <Container>
      <LineForm text={'Encontre o seu link:'} isBig={false} onChange={() => console.log("oi")} value={''}/>
    </Container>
    );
}