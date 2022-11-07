import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from 'components/table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Table />
      </main>
    </div>
  );
}

export default App;
