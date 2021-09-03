import React from 'react';
import { Container, Input } from './styles';

type InputProps = {
    onChange: (inputText: string) => void;
}

export const TinyInput: React.FC<InputProps> = ({onChange}: InputProps) => {
    return(
        <Container>
            <Input onChange={(event) => onChange(event.target.value)} />
        </Container>
    );
}