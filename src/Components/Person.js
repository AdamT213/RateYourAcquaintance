import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPerson } from '../actions/personActions'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


export class Person extends Component { 
    constructor(props) {
    super(props) 
    }
    
    componentWillMount = event => {
        event.preventDefault();
        this.props.showPerson(person);
    }
//make presentational component for formatting person 
//figure out how to work with redirects
  render() { 
    if (this.state.person !== {}) { 
      return (
        <div className= "App"> 
          {FormattedPerson} 
        </div>
      ); 
    } else { 
      return ( 
            <Route
           <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          />
      )
    }
  }
} 

function mapStateToProps(state){
  return {person: state.peopleReducer.person}
}

export default connect(mapStateToProps, { showPerson })(Person);