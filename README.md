# React - Redux

Ejemplos de Redux en React

## Conceptos

- Store -> Globalizar el estado, state
- Action -> Describe que es lo que quiero hacer. "Tengo Hambre" no "Ir a comprar comida". Es sólo un nombre
- Reducer -> Modifica el Store. Se pueden tener varios reducers
- Dispatch -> Ejecuta Action al Reducer. Reducer

### Store

- Contendrá todo el estado, datos, de la aplicación
- Recibe como parámetros el o los reducers

### Action

- Función que retorna un objeto. TYPE es el nombre
- Describe que se hará con nuestra store

### Reducer

- Recibe el valor inicial y el nombre del action

### Dispatch

- Ejecuta, dispara, la acción

## Comandos

- Instalar dependencias: `npm install`

- Ejecutar: `npm start`