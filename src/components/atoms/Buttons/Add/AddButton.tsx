import React from 'react';
import { Container, Button } from './styles';

type ButtonProps = {
    text: string,
    onClick: () => void;
}

export const AddButton: React.FC<ButtonProps> = ({text, onClick}: ButtonProps) => {
    return (
        <>
        <Container onClick={onClick}>
            <Button>{text}</Button>
        </Container>
        </>
        
    )
}