import React from 'react';
import { IconType } from 'react-icons/lib';
import { Container } from './styles';

type IconProps = {
    Icon: IconType
}

export const Icone: React.FC<IconProps> = ({Icon}: IconProps) => {
    return(
        <Container>
            <Icon />
        </Container>
    );
}