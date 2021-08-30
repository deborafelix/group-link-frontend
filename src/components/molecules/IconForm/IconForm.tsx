import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IconInput } from '../../atoms/Input/IconInput/IconInput';
import { TextInput } from '../../atoms/Text/TextInput/TextInput';
import { Container } from './styles';

type InputProps = {
    text: string
}

export const IconForm: React.FC<InputProps> = ({text}: InputProps) => {
    return(
        <Container>
            <TextInput text={text}/>
            <IconInput Icon ={FaStar}/>  
        </Container >
    );
}