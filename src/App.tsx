import React from 'react';
import { AddButton } from './components/atoms/Buttons/Add/AddButton';
import { Fav } from './components/atoms/Buttons/Fav/Fav';
import { Icone } from './components/atoms/Buttons/Icone/Icone';
import { BigInput } from './components/atoms/Input/BigInput/BigInput';
import { TinyInput } from './components/atoms/Input/TinyInput/TinyInput';
import { Date } from './components/atoms/Text/Date/Date';
import { Description } from './components/atoms/Text/Description/Description';
import { TextInput } from './components/atoms/Text/TextInput/TextInput';
import { Title } from './components/atoms/Text/Title/Title';

function App(): any {
  return (
    <>
    <TextInput text={'titulo do input'}/>
    <TinyInput />
    <BigInput />
    <AddButton />
    <Title text={'titulo do card'}/>
    <Description text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis turpis vitae blandit fringilla. Cras congue vehicula commodo.'} />
    <Description text={'www.google.com.br'} />
    <Date text={'30 de março de 2021'}/>
    <Fav />
    <Icone />
    </>
  );
}

export default App;
