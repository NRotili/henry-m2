import React from 'react';
import s from '../styles/search.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.search}>
      <input type="text" name="search" id="search" placeholder='Ciudad...' className={s.input}/>
      <button onClick={() => props.onSearch('Denver')} className={s.btn}>Search</button>
    </div>
  );
};