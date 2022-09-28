import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  function onChange(e) {
    // console.log(`value=${e.target.value}`);
    setCity(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault(); // evita que se refresque la página
      onSearch(city);
      // document.querySelector('input').value = "";
      setCity('');        // con esta línea y definir value={city} en el input, hago lo mismo que con la línea de arriba para limpiar el input
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={onChange}
        value={city}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
