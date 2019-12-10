import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import { setAuthorizationToken , setCurrentUser} from '../store/actions/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore();

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  //prevent someone manually tampering with jwt key
  try{
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch(e){
    store.dispatch(setCurrentUser(e));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='onboarding'>
        <Navbar/>
        <Main/>
      </div>
    </Router>
  </Provider>
)

export default App;
