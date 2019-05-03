import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Libs */
import { BrowserRouter } from 'react-router-dom'

/* Redux */
import { Provider } from 'react-redux'
import store from './store/store'

/* JSS */
import { JssProvider } from 'react-jss'
import jss from './lib/jss';

const app =
  <Provider store={store}>
    <BrowserRouter>
      <JssProvider jss={jss}>
        <App />
      </JssProvider>
    </BrowserRouter>
  </Provider>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
