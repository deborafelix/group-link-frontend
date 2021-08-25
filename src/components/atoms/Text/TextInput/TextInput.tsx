import React from 'react';
import { Container, Text } from './styles';

type InputProps = {
    text: string
}

export const TextInput: React.FC<InputProps> = ({text}: InputProps) => {
    return(
        <Container>
            <Text>{text}</Text>
        </Container>
    );
}