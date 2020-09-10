import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'

//ACTION
const increment = ()=>{
  return {
    type : 'INCREMENT'
  }
}

const decrement = ()=>{
  return {
    type : 'DECREMENT'
  }
}

//REDUCER 
const counter = (state = 0, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
     
    case 'DECREMENT':
     return state - 1
      
    default: return state
  }
}


//STORE
let store = createStore(counter)


//DISPATCH
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

store.subscribe(()=>  console.log(store))


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
