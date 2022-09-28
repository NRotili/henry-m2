import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import About from './Components/About';
import ApiProduct from './Components/ApiProducts';
import LocalProduct from './Components/LocalProduct'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Create from './Components/Create';
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'><Home name={'Mercado (no tan) Libre'} location={'Argentina'} /></Route>
      <Route exact path='/create'><Create /></Route>
      <Route exact path='/products' render={() => <ApiProduct />}></Route>
      <Route exact path='/local' component={LocalProduct} />
      <Route exact path='/about' component={About} />
      <Route exact path='/product/:id' component={Detail} />
    </div>
  );
}

export default App;
