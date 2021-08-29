import React from 'react';
import { GroupLink } from '../../atoms/Text/GroupLink/GroupLink';
import { MenuCircle } from '../../molecules/MenuCircle/MenuCircle';
import { Container } from './styles';


export const Header = ()  => {
    return (
        <Container>
            <GroupLink />
            <MenuCircle />
        </Container>
);
}