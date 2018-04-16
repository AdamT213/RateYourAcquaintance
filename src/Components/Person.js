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
    if (this.props.person !== "unfound") { 
      return (
        <div> 
          {FormattedPerson} 
        </div>
      ); 
    } else { 
      return ( 
        <div> 
          {this.props.history.push('/add-person')}
        </div>
      )
    }
  }
} 

function mapStateToProps(state){ 
  return {person: state.peopleReducer.person}
}

export default connect(mapStateToProps, null )(Person);