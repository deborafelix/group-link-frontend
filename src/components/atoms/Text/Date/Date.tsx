import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { Container, Text } from './styles';

type InputProps = {
    text: string
}

export const Date: React.FC<InputProps> = ({text}: InputProps) => {
    return(
        <Container>
            <FiCalendar size={12} color="#000"/>
            <Text>{text}</Text>
        </Container>
    );
}