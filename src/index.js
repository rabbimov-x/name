import ReactDOM from 'react-dom';
import {applyMiddleware , compose,createStore} from "redux"
import {Provider} from "react-redux"
import { Rootreduser } from './redux/redusers/rootReduser';
import thunk from "redux-thunk"
import React from 'react';
import App from './App';
import './index.css'
// ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store  = createStore(Rootreduser, compose( applyMiddleware(thunk) ))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


