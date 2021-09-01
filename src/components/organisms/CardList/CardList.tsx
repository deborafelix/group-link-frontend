import React from 'react';
import { useApp } from '../../../context';
import { Card } from '../../molecules/Card/Card';
import { Container } from './styles';


export const CardList: React.FC = ()  => {
    const {links} = useApp();
    // TODO: tratar de não tiver descrição 
    // TODO: data formato
    const formatDate = (date: Date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day > 10 ? day : '0'+day} - ${month > 10 ? month : '0'+month} - ${year}`;
    }
    return (
        <Container>
            {links?.map((link) => (
                <Card 
                key = {link.id}
                title={link.title} 
                description={link.description || link.url}
                link={'https://'+link.url}
                date={formatDate(new Date(link.createdAt))}
                isFav={link.fav}
            />
            ))}
            
        </Container>
);
}