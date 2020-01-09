import React from 'react';
import './App.css';

import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import store from './reducers';

import UsersPage from './pages/UsersPage';


function App() {

  return (
    <StoreProvider store={store}>
        <div className="App">
          <Router>
            <h1>UQ Standard React Redux Boilerplate</h1>
            
              <Switch>
                <Route path="/users">
                  <UsersPage />
                </Route>
                <Route path="/">
                  Home page! <Link to="/users">Go to users page!</Link>
                </Route>        
              </Switch>
            
          </Router>
        </div>
    </StoreProvider>
  );
}

export default App;
