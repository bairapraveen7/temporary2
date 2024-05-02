import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ApiContainer } from './components/api/ApiContainer';
import { ListContainer } from './components/todolist/ListContainer';
import { ApiData } from './context/ApiData';

function App() {
  return (
     <div className='App'>
        <h1 className='main-heading'>Just A Test App</h1>
        <ApiData children={<ApiContainer />} />
        <ListContainer />
     </div>
  );
}

export default App;
