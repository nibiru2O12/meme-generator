import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import RootReducers from './Reducers';
import {fetch_memeData} from './Actions';

import App from './Components/App';

const store=createStore(RootReducers,applyMiddleware(thunk))
store.subscribe(()=>console.log(store.getState()));
store.dispatch(fetch_memeData());

const rootDocument = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDocument
);
