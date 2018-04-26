import React, { Component } from 'react';
import './App.css'; 
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import FindPersonForm from './Inputs/FindPersonForm'; 
import AddPersonForm  from './Inputs/AddPersonForm'; 
import UserSignUpForm from './Inputs/UserSignUpForm';
import UserSignInForm from './Inputs/UserSignInForm';
import Person from './Components/Person'; 
import Navbar from './Components/Navbar'; 

import createBrowserHistory from 'history/createBrowserHistory';
export const history = createBrowserHistory();


class App extends Component {
  render() { 
    if (this.props.currentUser !== null) { 
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
    else { 
      return ( 
        <div>
        <UserSignUpForm/>  
        <UserSignInForm/> 
        </div>
      )
    }
  }
} 

function mapStateToProps(state){ 
  return {person: state.peopleReducer.person, 
    currentUser: state.usersReducer.currentUser}
}

export default connect(mapStateToProps, null)(App) 
