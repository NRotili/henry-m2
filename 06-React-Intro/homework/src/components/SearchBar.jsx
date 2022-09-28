import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  const onSearch = () => {
    // Tomo la ciudad ingresada
    const ciudad = document.getElementById('search').value;
    props.onSearch(ciudad);
  }
  return (
    <div>
      <input type="text" name="search" id="search" placeholder='Ciudad...'/>
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
};