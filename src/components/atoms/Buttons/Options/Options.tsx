import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Container, ContainerIcon } from './styles';

type OptionsProps = {
}

export const Options: React.FC<OptionsProps> = () => {
    return(
        <Container>
            <ContainerIcon>
                <FiEdit size={13} color="#000"/>         
            </ContainerIcon>
            <ContainerIcon>
                <FiTrash2 size={13} color="#000"/>         
            </ContainerIcon>
        </Container>
    );
}