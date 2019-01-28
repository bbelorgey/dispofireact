import React, { Component } from 'react';
import Navigation from './components/Navigation'
import DispatchId from './components/DispatchId'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom';

import './App.css';
import './scss/App.scss';
//                          Composant principal de l'application react
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={DispatchId} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;