import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers'
import { Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Axios from 'axios';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

Axios.defaults.withCredentials = true
Axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api/'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store} ><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
