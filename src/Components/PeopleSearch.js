import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPersonById } from '../Actions/personActions'
import  AddPersonForm  from '../Inputs/AddPersonForm'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"; 

export class PeopleSearch extends Component { 

  handleClick = event => { 
    event.preventDefault();
    let personId = event.target.id
    this.props.setPersonById(personId)  
  }
     
  render() { 

    const people = this.props.people.map((person) => { 
      return <div className= "container"><p>Name: {person.name}</p><p>Description: {person.description}</p><p>Location: {person.location}</p><button id= {person.id} onClick= {this.handleClick}>This is the person I'm looking for</button></div> 
    });  

      return ( 
        <div> 
          <Router> 
        <div>
          <Link to='/add-person'
              >Don't see the person you were looking for? Add them to our system! 
          </Link>
          <div>
          <Switch> 
            <Route path='/add-person' component={AddPersonForm}/>
          </Switch> 
          </div> 
          </div>
         </Router> 
          <ul> 
            {people} 
          </ul>
        </div>
      ); 
    }
  }

function mapStateToProps(state){ 
  return {people: state.peopleReducer.people} 
}

export default connect(mapStateToProps, { setPersonById })(PeopleSearch); 