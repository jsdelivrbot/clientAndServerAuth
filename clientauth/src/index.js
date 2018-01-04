/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

  <Router history={browserHistory}>
<Route path="/" component={App} >
	<Route path="signin" component={Signin} />
</Route>
  </Router>

  </Provider>
  , document.querySelector('.container'));*/


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import history from './components/history';
import {AUTH_USER} from './actions/types';

import App from './components/App';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


//To persist your data
const token = localStorage.getItem('token');
//if we have a token, consider the user 'signed in'

if (token){
//we'll need to update the application state
store.dispatch({type: AUTH_USER});

}



ReactDOM.render(
  <Provider
    store={store}
  >
    <Router history={history}>
      <App  />

    </Router>
  </Provider>,
  document.querySelector('.container')
);





































