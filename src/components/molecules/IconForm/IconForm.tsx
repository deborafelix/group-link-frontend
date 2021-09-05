import React from 'react';
import { IconInput } from '../../atoms/Input/IconInput/IconInput';
import { TextInput } from '../../atoms/Text/TextInput/TextInput';
import { Container } from './styles';

type InputProps = {
    text: string,
    onChange: (inputText: string) => void;
    value: string;
}

export const IconForm: React.FC<InputProps> = ({text, onChange, value}: InputProps) => {
    return(
        <Container>
            <TextInput text={text}/>
            <IconInput onChange={onChange} value={value}/>  
        </Container >
    );
}