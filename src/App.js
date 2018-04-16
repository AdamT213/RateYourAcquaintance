import React, { Component } from 'react';
import './App.css'; 
import { Router, Route } from 'react-router-dom';
import FindPersonForm from './Components/FindPersonForm'; 
import AddPersonForm  from './Components/AddPersonForm'; 
import Person from './Components/Person'; 

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

// add navbar with link to homepage for easier testing/debugging. debating use of navbar in production, and what links it should have

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">RateYourAcquaintance</h1>
        <p className="App-intro"> 
        The day of Reckoning has come!
        </p> 
        <Router history= {history}> 
          <div> 
            <Route exact path='/' component={FindPersonForm}/> 
            <Route path='/person-show' component={Person}/> 
            <Route path='/add-person' component={AddPersonForm}/> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
