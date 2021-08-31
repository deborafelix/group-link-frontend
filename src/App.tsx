import React from 'react';
import './App.css';
import { Home } from './components/templates/Home/Home';
import { AppProvider } from './context';


function App(): any {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
