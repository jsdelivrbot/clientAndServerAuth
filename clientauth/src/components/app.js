import React from 'react';
import {Component} from 'react';
import Header from './header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import Feature from './feature';
import Authentication from './auth/require_auth_component';
import About from './about';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
         <Switch>
	 <Route exact path="/" component={Welcome} />
         
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About}/>
        <Route path="/feature" component={Authentication(Feature)} />
</Switch>
      </div>
    );
  }
}
export default App;
