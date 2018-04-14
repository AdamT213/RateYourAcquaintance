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
import { push } from 'react-router-redux'


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
        this.store.dispatch(push('/add-person'))
        // <Router>
        // <div>
        //   <Redirect to='/add-person'/>
        //   <Route path='/add-person' component={AddPersonForm}/> 
        // </div>
        // </Router> 
      )
    }
  }
} 

function mapStateToProps(state){ 
  return {person: state.peopleReducer.person}
}

export default connect(mapStateToProps, null )(Person);