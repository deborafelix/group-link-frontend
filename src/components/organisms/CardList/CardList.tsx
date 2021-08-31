import React from 'react';
import { useApp } from '../../../context';
import { Card } from '../../molecules/Card/Card';
import { Container } from './styles';


export const CardList: React.FC = ()  => {
    const {links} = useApp();
    return (
        <Container>
            {links?.map((link) => (
                <Card 
                key = {link.id}
                title={link.title} 
                description={link.description}
                link={'https://'+link.url}
            />
            ))}
            
        </Container>
);
}