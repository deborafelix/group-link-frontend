import React from 'react';
import { IconType } from 'react-icons/lib';
import { Icons } from '../../../../constants/icon';
import { Container, ContainerIcon } from './styles';

type IconProps = {
    Icon: IconType
}

export const IconInput: React.FC<IconProps> = ({Icon}: IconProps) => {
    return(
    <Container>
    { Object.keys(Icons).map((Icon2, index) => {
        const CurrentIcon = Icons[Icon2]
        return (
        <>
            <ContainerIcon key={index}>
                <CurrentIcon />               
            </ContainerIcon>
        </>
    )})
    }
    </Container>
    );
}