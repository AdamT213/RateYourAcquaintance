import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddPersonForm } from '../Inputs/AddPersonForm'; 
import  AddReviewForm  from '../Inputs/AddReviewForm';
import { FormattedPerson } from '../Presentational/FormattedPerson'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"; 

export class Person extends Component { 
     
  render() { 

    if (this.props.person == "unfound") { 
      return ( 
        <div> 
          {this.props.history.push('/add-person')}
        </div>
      )

    } else { 

      return ( 
        <div> 
          <div className= "container">
          <Router> 
        <div>
          <Link to={`${this.props.match.url}/reviews/new`}>
              Add a New Review for this Person
          </Link><br />
          <Link to='/add-person'
              >Not the {this.props.person.name} you were looking for? Add them to our system! 
          </Link>
          <div>
          <Switch>
            <Route path={`${this.props.match.url}/reviews/new`} 
            component={AddReviewForm} /> 
            <Route path='/add-person' component={AddPersonForm}/>
          </Switch> 
          </div> 
          </div>
         </Router> 
         </div>
        <FormattedPerson name= {this.props.person.name} description= {this.props.person.description} location= {this.props.person.location} reviews= {this.props.person.reviews} 
         /> 
        </div> 
      ); 
    }
  }
} 

function mapStateToProps(state){ 
  return {person: state.peopleReducer.person}
}

export default connect(mapStateToProps, null)(Person); 