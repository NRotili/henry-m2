const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const contador = store.getState().contador;
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  console.log(`store.getState(): ${store.getState()}`)
  console.log(`store.contador: ${contador}`)
  valor.innerText = contador;
}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador);


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
const btnIncremento = document.getElementById("incremento");
btnIncremento.addEventListener('click',(e) => {
  console.log("Incrementar contador");
  store.dispatch(incremento());
});

const btnDecremento = document.getElementById("decremento");
btnDecremento.addEventListener('click', (e) => store.dispatch(decremento()));

const btnIncrementoImpar = document.getElementById("incrementoImpar");
btnIncrementoImpar.addEventListener('click', (e) => {
  const contador = store.getState().contador;
  if (contador % 2 !== 0) store.dispatch(incremento());
})

const btnIncrementoAsync = document.getElementById("incrementoAsync");
btnIncrementoAsync.addEventListener('click', (e) => {
  setTimeout(() => store.dispatch(incremento()), 1000);
})

