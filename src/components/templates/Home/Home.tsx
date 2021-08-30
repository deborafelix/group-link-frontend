import React from 'react';
import { Header } from '../../organisms/Header/Header';
import { Container, Div, Menu } from './styles';
import { CardContainer } from '../../organisms/CardContainer/CardContainer';
import { AddForm } from '../../molecules/AddForm/AddForm';

export const Home: React.FC = () => {
    const isAdding = true;
    return(
        <Container>
            <Header />
                {(isAdding) 
        
                ? <Div>
                    <Menu />
                    <CardContainer />
                    <AddForm />
                </Div>
                
                : <Div>
                    <Menu />
                    <CardContainer />
                </Div>
                
                }    
        </Container>
    );
}