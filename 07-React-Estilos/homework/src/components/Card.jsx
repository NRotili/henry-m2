import React from 'react';
import s from '../styles/card.module.css';

export default function Card(props) {
  // acá va tu código

  return (
    <div className={s.card}>
      <h1 className={s.name}>{props.name}</h1>
      <button className={s.btn} onClick={props.onClose}>x</button>
      <div className={s.content}>
        <div className={s.temp}>
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <div className={s.temp}>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
      </div>
    </div>);
};