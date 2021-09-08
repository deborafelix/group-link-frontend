import React from 'react';
import { BigInput } from '../Input/BigInput/BigInput';
import { TinyInput } from '../Input/TinyInput/TinyInput';
import { TextInput } from '../Text/TextInput/TextInput';
import { Container } from './styles';

type InputProps = {
    text: string,
    isBig: boolean,
    onChange: (inputText: string) => void;
    value: string;
}

export const LineForm: React.FC<InputProps> = ({text, isBig, onChange, value}: InputProps) => {
    return(
        <Container>
            <TextInput text={text}/>
            {(isBig) ? <BigInput onChange={onChange} value={value}/> : <TinyInput onChange={onChange} value={value}/>}   
        </Container >
    );
}