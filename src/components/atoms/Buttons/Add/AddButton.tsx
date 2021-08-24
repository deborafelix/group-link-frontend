import React from 'react';
import { FiPlus, FiSearch, FiShare2 } from 'react-icons/fi'
import { Container, Circle } from './styles';

export const AddButton = (): any => {
    return (
        <>
        <Container>
            <Circle>
                <FiPlus size={20} color="#000"/>
            </Circle>
        </Container>
        <Container>
            <Circle>
                <FiSearch size={20} color="#000"/>
            </Circle>
        </Container>
        <Container>
            <Circle>
                <FiShare2 size={20} color="#000"/>
            </Circle>
        </Container>
        </>
        
    )
}