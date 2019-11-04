import React from 'react';
import BoxModals from './BoxModals';
import SortColor from './SortColor';
import colors from './colors';
import './App.css';

function App() {
  const gradient = colors.map(color => <BoxModals key={color.id} color={color}/>)
  return (
    <div className="App">
      <SortColor />
      <header className="App-header"> 
        {gradient}
      </header>
    </div>
  );
}

export default App;
