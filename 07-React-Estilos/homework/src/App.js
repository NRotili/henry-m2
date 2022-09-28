import React from 'react';
import s from './App.module.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
// import foto from './components/assets/foto.jpg';  // incluir una foto 

function App() {
  return (
    <div>
      <div className={s.header}>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
        {/* <img src={foto} alt="" /> cómo incluir una foto */}
      </div>
      <div className={s.main}>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
