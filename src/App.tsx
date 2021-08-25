import React from 'react';
import './App.css';
import { Icone } from './components/atoms/Buttons/Icone/Icone';
import { AddForm } from './components/organisms/AddForm/AddForm';
import { FiArchive } from 'react-icons/fi';
import { Card } from './components/organisms/Card/Card';
import { MenuCircle } from './components/molecules/MenuCircle/MenuCircle';

function App(): any {
  return (
    <>
      <AddForm />
      <Card />
      <Icone Icon={FiArchive}/>
      <MenuCircle />
    </>
  );
}

export default App;
