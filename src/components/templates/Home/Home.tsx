import React from 'react';
import { Header } from '../../organisms/Header/Header';
import { Container, Div } from './styles';
import { CardContainer } from '../../organisms/CardContainer/CardContainer';
import { AddForm } from '../../molecules/AddForm/AddForm';
import { SearchForm } from '../../molecules/SearchForm/SearchForm';
import { useApp } from '../../../context';
import { Group } from '../../organisms/Group/Group';

export const Home: React.FC = () => {
    const {searchFormIsOpen, addFormIsOpen} = useApp();
    return(
        <Container>
            <Header />
                {(addFormIsOpen) 
        
                ? <Div>
                    <Group/>
                    <CardContainer />
                    <AddForm />
                </Div>
                
                : <Div>
                    <Group />
                    <CardContainer />
                    <SearchForm />
                </Div>
                
                }    
        </Container>
    );
}