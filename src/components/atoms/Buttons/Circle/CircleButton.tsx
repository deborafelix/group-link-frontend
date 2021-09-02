import React from 'react';
import { IconType } from 'react-icons/lib';
import { Container, Circle } from './styles';

type IconProps = {
    Icon: IconType
    onClick?: () => void;
}


export const CircleButton: React.FC<IconProps> = ({Icon, onClick}: IconProps)  => {
    return (
        <>
        <Container onClick={onClick}>
            <Circle>
                <Icon size={20} color="#000"/>
            </Circle>
        </Container>
        </>
        
    )
}