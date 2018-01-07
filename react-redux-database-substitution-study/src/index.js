import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//talks to history library 
//within switch, you put the MOST SPECIFIC route URL on top of the other ones
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//promise middleware
import promise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from "./components/posts_show";


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
<div>
redmustard


<Switch>
<Route path ='/posts/new' component={PostsNew} />
<Route path='/posts/:id' component={PostsShow} />
<Route path="/" component={PostIndex} />
</Switch>
</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
