import React from 'react';
import { Header } from '../../organisms/Header/Header';
import { Container, Div } from './styles';
import { CardContainer } from '../../organisms/CardContainer/CardContainer';
import { LinkForm } from '../../molecules/LinkForm/LinkForm';
import { SearchForm } from '../../molecules/SearchForm/SearchForm';
import { useApp } from '../../../context';
import { Group } from '../../organisms/Group/Group';

export const Home: React.FC = () => {
    const {searchFormIsOpen, linkFormIsOpen} = useApp();
    return(
        <Container>
            <Header />
                {(linkFormIsOpen) 
        
                ? <Div>
                    <Group/>
                    <CardContainer />
                    <LinkForm />
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