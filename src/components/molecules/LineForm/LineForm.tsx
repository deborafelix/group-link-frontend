import React from 'react';
import { BigInput } from '../../atoms/Input/BigInput/BigInput';
import { TinyInput } from '../../atoms/Input/TinyInput/TinyInput';
import { TextInput } from '../../atoms/Text/TextInput/TextInput';
import { Container } from './styles';

type InputProps = {
    text: string,
    isBig: boolean,
    onChange: (inputText: string) => void;
}

export const LineForm: React.FC<InputProps> = ({text, isBig, onChange}: InputProps) => {
    return(
        <Container>
            <TextInput text={text}/>
            {(isBig) ? <BigInput onChange={onChange}/> : <TinyInput onChange={onChange}/>}   
        </Container >
    );
}