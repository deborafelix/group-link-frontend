import React from 'react';
import { Header } from '../../organisms/Header/Header';
import { Container, Div, Menu } from './styles';
import { CardContainer } from '../../organisms/CardContainer/CardContainer';
import { AddForm } from '../../molecules/AddForm/AddForm';
import { SearchForm } from '../../molecules/SearchForm/SearchForm';
import { useApp } from '../../../context';

export const Home: React.FC = () => {
    const {searchFormIsOpen, addFormIsOpen} = useApp();
    return(
        <Container>
            <Header />
                {(addFormIsOpen) 
        
                ? <Div>
                    <Menu />
                    <CardContainer />
                    <AddForm />
                </Div>
                
                : <Div>
                    <Menu />
                    <CardContainer />
                    <SearchForm />
                </Div>
                
                }    
        </Container>
    );
}