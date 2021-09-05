import React from 'react';
import { useState } from 'react';
import { IconType } from 'react-icons/lib';
import { Icons } from '../../../../constants/icon';
import { Container, ContainerIcon } from './styles';

type IconProps = {
    onChange: (inputText: string) => void;
    value: string;
}

export const IconInput: React.FC<IconProps> = ({onChange, value}: IconProps) => {
    const handleOnIconClick = (iconName: string) => {
        onChange(iconName);
    }
    return(
    <Container>
    { Object.keys(Icons).map((Icon, index) => {
        const CurrentIcon = Icons[Icon]
        return (
        <>
            <ContainerIcon key={index} onClick={() => handleOnIconClick(Icon)}>
                {(value === Icon) ? <CurrentIcon /> : <CurrentIcon color={'#a0a0a0'}/>}               
            </ContainerIcon>
        </>
    )})
    }
    </Container>
    );
}