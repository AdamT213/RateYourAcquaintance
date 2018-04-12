
export function peopleReducer(state = {loading: false, person: {}}, action) {
  switch (action.type) {

     case 'GET_PERSON': 
     debugger;
     let currentPerson = action.payload 
     if (currentPerson.name != null) { 
      return {loading: false, person: currentPerson}; 
     } else { 
      return state;
     }
      case 'ADD_PERSON': 
        currentPerson = action.payload 
       return {loading: false, person: currentPerson}; 
     default:
       return state; 
  }
} 