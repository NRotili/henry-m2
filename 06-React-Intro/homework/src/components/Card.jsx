import React from 'react';

export default function Card(props) {
  // acá va tu código
  console.log(props);

  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <div>
        <div>
          <p>Min</p>
          <p>{props.min - 273.15}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{props.max - 273.15}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
      </div>
    </div>);
};