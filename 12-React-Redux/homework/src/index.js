import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/index";

// Solución al error process is not defined cuando se recompila:
// https://stackoverflow.com/questions/70368760/react-uncaught-referenceerror-process-is-not-defined
// instalar el siguiente paquete: npm i -D react-error-overlay@6.0.9 


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
