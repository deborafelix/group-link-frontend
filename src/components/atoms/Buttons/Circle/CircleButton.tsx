import React from 'react';
import { IconType } from 'react-icons/lib';
import { Container, Circle } from './styles';

type IconProps = {
    Icon: IconType
}


export const CircleButton: React.FC<IconProps> = ({Icon}: IconProps)  => {
    return (
        <>
        <Container>
            <Circle>
                <Icon size={12} color="#000"/>
            </Circle>
        </Container>
        </>
        
    )
}