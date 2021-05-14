import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoLater } from './context/TodoContext';
import reducer , {initialState} from './context/reducer';


ReactDOM.render(
  <React.StrictMode>
    <TodoLater initialState = {initialState} reducer = {reducer}>
      <App />
    </TodoLater>
  </React.StrictMode>,
  document.getElementById('root')
);

