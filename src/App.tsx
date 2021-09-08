import React from 'react';
import './App.css';
import { Home } from './components/templates/Home/Home';
import { OnBoarding } from './components/templates/OnBoarding/OnBoarding';
import { AppProvider } from './context';


function App(): any {
  const login = false;
  return (
    <AppProvider>
      {(login) ? <Home /> : <OnBoarding />}
    </AppProvider>
  );
}

export default App;
