
export function peopleReducer(state = {loading: false, person: {}}, action) {
  switch (action.type) {

     case 'GET_PERSON': 
     debugger;
     let currentPerson = action.payload[0].find((person => person.name == action.payload[1].name)) 
     if (currentPerson != undefined) { 
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