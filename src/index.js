import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import App from './App';

//Reducers

import authReducer from './Reducers/authentication'
import bugReducer from './Reducers/bug'
import userReducer from './Reducers/user'

//Redux
const reducer = combineReducers({
  auth:authReducer,
  bugs:bugReducer,
  user:userReducer
})

const store = configureStore({
  reducer
})
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
,
  document.getElementById('root')
);
