import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Container } from './styles';

export const Fav = () => {
    return(
        <Container>
            <FaStar size={12} color="#000"/>
            <FaRegStar size={12} color="#000"/>
        </Container>
    );
}