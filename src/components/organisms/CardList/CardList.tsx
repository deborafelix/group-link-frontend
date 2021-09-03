import React from 'react';
import { useApp } from '../../../context';
import { formatDate } from '../../../utils/formatDate';
import { Card } from '../../molecules/Card/Card';
import { Container } from './styles';


export const CardList: React.FC = ()  => {
    const {links} = useApp();
    // TODO: tratar de não tiver descrição 
    // TODO: data formato
    
    return (
        <Container>
            {links?.map((link) => (
                <Card 
                key = {link.id}
                title={link.title} 
                description={link.description || link.url}
                link={'https://'+link.url}
                date={formatDate(new Date(link.createdAt))}
            />
            ))}
            
        </Container>
);
}