import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddPersonForm } from '../Inputs/AddPersonForm';
import { FormattedPerson } from '../Presentational/FormattedPerson';
import Loader from 'react-loader';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"; 

export class Person extends Component { 
     
  render() { 

    if (this.props.loading) { 
      return (
        <Loader />
      )
    }

    if (this.props.person == "unfound") { 
      return ( 
        <div> 
          {this.props.history.push('/add-person')}
        </div>
      )

    } else { 

      return (
        <div> 
          {FormattedPerson} 
        </div>
      ); 
    }
  }
} 

function mapStateToProps(state){ 
  return {person: state.peopleReducer.person, loading: state.peopleReducer.loading}
}

export default connect(mapStateToProps, null)(Person); 