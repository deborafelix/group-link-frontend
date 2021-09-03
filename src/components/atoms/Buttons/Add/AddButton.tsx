import React from 'react';
import { Container, Button } from './styles';

type ButtonProps = {
    onClick: () => void;
}

export const AddButton: React.FC<ButtonProps> = ({onClick}: ButtonProps) => {
    return (
        <>
        <Container onClick={onClick}>
            <Button>Adicionar</Button>
        </Container>
        </>
        
    )
}