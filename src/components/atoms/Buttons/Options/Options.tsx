import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { api } from '../../../../config/api';
import { Link, useApp } from '../../../../context';
import { Container, ContainerIcon } from './styles';

type OptionsProps = {
    id: string
}

export const Options: React.FC<OptionsProps> = ({id}: OptionsProps) => {
    const {getLinks, handleOnLinkFormClick} = useApp();
    const deleteLink = async () => {
        await api.delete(`/${id}`)
        await getLinks();
    }

    return(
        <Container>
            <ContainerIcon onClick={() => handleOnLinkFormClick(id)}>
                <FiEdit size={13} color="#000"/>         
            </ContainerIcon>
            <ContainerIcon onClick={deleteLink}>
                <FiTrash2 size={13} color="#000"/>         
            </ContainerIcon>
        </Container>
    );
}