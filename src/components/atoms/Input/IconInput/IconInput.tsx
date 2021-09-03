import React from 'react';
import { IconType } from 'react-icons/lib';
import { Icons } from '../../../../constants/icon';
import { Container, ContainerIcon } from './styles';

type IconProps = {
    onChange: (inputText: string) => void;
}

export const IconInput: React.FC<IconProps> = ({onChange}: IconProps) => {
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
                <CurrentIcon />               
            </ContainerIcon>
        </>
    )})
    }
    </Container>
    );
}