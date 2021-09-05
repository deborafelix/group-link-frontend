import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { api } from '../../../../config/api';
import { useApp } from '../../../../context';
import { Container, ContainerIcon } from './styles';

type OptionsProps = {
    id: string
}

export const Options: React.FC<OptionsProps> = ({id}: OptionsProps) => {
    const {getLinks} = useApp();
    const deleteLink = async () => {
        console.log("cheguei", id)
        await api.delete(`/${id}`)
        await getLinks();

    }
    return(
        <Container>
            <ContainerIcon>
                <FiEdit size={13} color="#000"/>         
            </ContainerIcon>
            <ContainerIcon onClick={deleteLink}>
                <FiTrash2 size={13} color="#000"/>         
            </ContainerIcon>
        </Container>
    );
}