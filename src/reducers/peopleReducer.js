import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

export function peopleReducer(state = {loading: false, person: {}, action) {
  switch (action.type) {

     case 'GET_PERSON': 
     let currentPerson = action.payload 
     // experimenting with the best way to redirect to the add person form if no existing person is found. Thought is to redirect to person show page if person is found and person add form if no person is found
     if (currentPerson.name != null) { 
      return {loading: false, person: currentPerson}; 
     } else { 
      return state;
     }
    default:
      return state;
  }
} 