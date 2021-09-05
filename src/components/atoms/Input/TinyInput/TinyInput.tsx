import React from 'react';
import { Container, Input } from './styles';

type InputProps = {
    onChange: (inputText: string) => void;
    value: string;
}

export const TinyInput: React.FC<InputProps> = ({onChange, value}: InputProps) => {
    return(
        <Container>
            <Input onChange={(event) => onChange(event.target.value)} value={value}/>
        </Container>
    );
}