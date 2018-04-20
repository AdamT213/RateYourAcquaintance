import React, { Component } from 'react';
import './App.css'; 
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import FindPersonForm from './Inputs/FindPersonForm'; 
import AddPersonForm  from './Inputs/AddPersonForm'; 
import Person from './Components/Person'; 
import Navbar from './Components/Navbar';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


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
            <Navbar />
            <Route exact path='/' component={FindPersonForm}/> 
            <Route path='/person-show' component={Person}/> 
            <Route path='/add-person' component={AddPersonForm}/> 
          </div>
        </Router>
      </div>
    );
  }
} 

function mapStateToProps(state){ 
  return {person: state.peopleReducer.person}
}

export default connect(mapStateToProps, null)(App) 
