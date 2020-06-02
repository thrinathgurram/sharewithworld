import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-social'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Components/reducer/rootReducer';
//import jwtDecode from 'jwt-decode';
import { setCurrentUser,setAuthorizationToken } from './Components/actions/actions';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken && localStorage.USER_INFO) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually setting a key of 'jwtToken' in localStorage
  try {
    store.dispatch(setCurrentUser(JSON.parse(localStorage.USER_INFO)));
  } catch(e) {
    store.dispatch(setCurrentUser(JSON.parse(localStorage.USER_INFO)));
  }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
