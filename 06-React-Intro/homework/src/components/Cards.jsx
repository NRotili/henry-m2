import React from 'react';
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  // if(!props.cities) return <h2>No hay ciudades</h2>;
  if(!props.cities) return <h2>No hay ciudades</h2>;
  
  return (<div>
    {
    props.cities?.map(c => <Card   // El ? luego de props.cities significa: si props.cities es undefined no se ejecuta map
      key={c.id}
      name={c.name}
      min={c.main.temp_min}
      max={c.main.temp_max}
      img={c.weather[0].icon}
      onClose={() => alert(c.name)}
    />
    )}
  </div>)
};