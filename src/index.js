import ReactDOM from 'react-dom';
import {createStore} from "redux"
import {Provider} from "react-redux"
import { Rootreduser } from './redux/redusers/rootReduser';
import React from 'react';
import App from './App';
import './index.css'

const store  = createStore(Rootreduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


