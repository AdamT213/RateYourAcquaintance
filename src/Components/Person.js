import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddPersonForm } from './AddPersonForm' 
import { FormattedPerson } from './FormattedPerson'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


export class Person extends Component { 
     
  render() { 
    debugger;
    if (this.props.person !== {}) { 
      return (
        <div className= "App"> 
          {FormattedPerson} 
        </div>
      ); 
    } else { 
      return ( 
        <Router>
        <div>
          <Redirect from= '/person-show' to='/add-person'/>
          <Route path='/add-person' component={AddPersonForm}/> 
        </div>
        </Router> 
      )
    }
  }
} 

function mapStateToProps(state){ 
  debugger;
  return {person: state.peopleReducer.person}
}

export default connect(mapStateToProps, null )(Person);