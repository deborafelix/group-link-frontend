import React from 'react';
import { BigInput } from '../../atoms/Input/BigInput/BigInput';
import { TinyInput } from '../../atoms/Input/TinyInput/TinyInput';
import { TextInput } from '../../atoms/Text/TextInput/TextInput';
import { Container } from './styles';

type InputProps = {
    text: string,
    isBig: boolean
}

export const LineForm: React.FC<InputProps> = ({text, isBig}: InputProps) => {
    return(
        <Container>
            <TextInput text={text}/>
            {(isBig) ? <BigInput /> : <TinyInput />}   
        </Container >
    );
}