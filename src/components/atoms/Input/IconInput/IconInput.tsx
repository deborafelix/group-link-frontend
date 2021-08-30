import React from 'react';
import { IconType } from 'react-icons/lib';
import { Container, ContainerIcon } from './styles';

type IconProps = {
    Icon: IconType
}

export const IconInput: React.FC<IconProps> = ({Icon}: IconProps) => {
    return(
    <Container>
    { Array(25).fill('').map((_, index) => (
        <>
            <ContainerIcon key={index}>
                <Icon />               
            </ContainerIcon>
        </>
    ))
    }
    </Container>
    );
}