import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

// Store -> Globalizar el estado, state
// Action -> Describe que es lo que quiero hacer. "Tengo Hambre" no "Ir a comprar comida". Es sólo un nombre
// Reducer -> Modifica el Store. Se pueden tener varios reducers
// Dispatch -> Ejecuta Action al Reducer. Reducer

// Función que retorna un objeto. TYPE es el nombre
// Increment
const increment = () => {
	return {
		type: 'INCREMENT'
	}
}
// Decrement
const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

// Reducer -> Modifica el Store
// Se pueden tener varios reducers

// Revisa el action, para poder modificar el store acorde
// Valor inicial, action
const counter = (state = 0 , action) => {
	switch(action.type){
		case "INCREMENT":
			return state+1;
		case "DECREMENT":
			return state-1;
	}
}

//STORE iniciar al final. Recibe como parámetros el o los reducers
let store = createStore(counter);
store.subscribe(() =>{
	console.log("Store subscribe();");
	console.log(store.getState())
});
// Dispatch -> Ejecuta Action al Reducer. Reducer

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
