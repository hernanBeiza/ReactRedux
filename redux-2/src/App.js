import React from 'react';
import logo from './logo.svg';
import './App.css';

//Acceder desde cualquier componente al store en Provider
import { useSelector } from 'react-redux';
//Para poder usar los action o dispatchs
import { useDispatch } from 'react-redux';
//Importar mis actions
import { increment, decrement, signIn, signOut } from './actions';

function App() {
    
  //Acceder a todo el state
  const counter = useSelector(state =>state.counter);
  const isLogged = useSelector(state =>state.isLogged);
  console.log(counter,isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Counter: {counter}</p>
        {isLogged ? <h3> Bienvenido HB</h3>: '' }
        <button onClick={ () => dispatch(increment(5)) }>Agregar</button>
        <button onClick={ () => dispatch(decrement()) }>Quitar</button>
        {!isLogged ? <button onClick={ () => dispatch(signIn()) }>Iniciar Sesión</button>: 
        <button onClick={ () => dispatch(signOut()) }>Cerrar Sesión</button>}
      </header>
    </div>
  );
}

export default App;
