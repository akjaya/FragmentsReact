import React, { Fragment } from 'react';
import './App.css';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
     <FragmentDemo />
     <Table className ="table" />
    </div>
  );
}

export default App;
