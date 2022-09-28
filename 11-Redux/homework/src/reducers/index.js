import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC } from '../actions';

const initialState = {
  count: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
  console.log(`En reducer, action: ${action.type}`);
  switch (action.type) {
    case INCREMENT:
      console.log(`En reducer, count: ${state.count}`);
      return {
        count: ++state.count
      };
    case DECREMENT:
      return {
        count: --state.count
      };
    default:
      console.log(`En default de reducer`);
      return state;
  }
};