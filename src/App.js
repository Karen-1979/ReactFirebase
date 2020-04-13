import React, { Component } from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/login/NavBar'
import Home from './components/login/Home'
import store from './components/store/store'
import {Provider} from 'react-redux'
import Example from './components/login/Example';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'
import SomeComponent from './components/login/SomeComponent';
import {UserIsAuthenticated,UserIsNotAuthenticated} from './components/helper/Userlogin'

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
      <BrowserRouter>
       <div>
         <Navbar />
         <Switch>
         
          <Route exact path='/' component={UserIsAuthenticated (Home) } />
          <Route  path='/example' component={UserIsAuthenticated  (Example) } />
          <Route  path='/signin' component={UserIsNotAuthenticated(SignIn) } />
          <Route  path='/signup' component={UserIsNotAuthenticated (SignUp) } />
          <Route  path= "/:filter" component={SomeComponent}/> 
        
         
         </Switch>
       </div>
      </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
