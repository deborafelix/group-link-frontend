import React, { ReactNode } from 'react';
import { LineForm } from '../../atoms/LineForm/LineForm';
import { Container, Form, ChangeFormButton} from './styles';
import { Link, useApp } from '../../../context';
import { AddButton } from '../../atoms/Buttons/Add/AddButton';

export const OnBoarding = () => {
    const newAccount = false;
    return(
    <Container>
        <Form>
        {(newAccount) 
        ? <>
            <LineForm text={'E-mail:'} isBig={false} onChange={() => console.log("oi")} value={''}/>
            <LineForm text={'Senha:'} isBig={false} onChange={() => console.log("oi")} value={''}/>
            <AddButton text={'Login'} onClick={() => console.log("oi")}/>
            <ChangeFormButton>Nova conta</ChangeFormButton>
        </>
        : <>
        <LineForm text={'Nome:'} isBig={false} onChange={() => console.log("oi")} value={''}/>
        <LineForm text={'E-mail:'} isBig={false} onChange={() => console.log("oi")} value={''}/>
        <LineForm text={'Senha:'} isBig={false} onChange={() => console.log("oi")} value={''}/>
        <AddButton text={'Login'} onClick={() => console.log("oi")}/>
        <ChangeFormButton>Entrar</ChangeFormButton>
    </>
        }
        </Form>
    </Container>
    );
}