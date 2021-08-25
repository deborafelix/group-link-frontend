import React from 'react';
import { Container, Text } from './styles';

type InputProps = {
    text: string
}

export const Description: React.FC<InputProps> = ({text}: InputProps) => {
    return(
        <Container>
            <Text>{text}</Text>
        </Container>
    );
}