
export function peopleReducer(state = {person: "unfound", people: {}
}, action) {
  switch (action.type) {

      case 'GET_PERSON': 
        let currentPerson = action.payload[0].filter((person => person.name == action.payload[1].name)) 
        if (currentPerson != undefined && currentPerson.length === 1) { 
          return {person: currentPerson[0], people: state.people}; 
        } else if (currentPerson.length > 1) { 
          return {person: currentPerson, people: currentPerson};
        } else { 
          return  {person: state.person, people: state.people}; 
        }
      case 'SET_PERSON':  
        currentPerson = action.payload;
        return {person: currentPerson}; 
      case 'CONCAT_REVIEW': 
        let review = action.payload 
        let reviews = state.person.reviews.concat(review) 
        state.person.reviews = reviews
        return {person: state.person, people: state.people}; 
      case 'CLEAR_PERSON': 
        return {person: "unfound", people: {}} 
      case 'SET_PERSON_BY_ID': 
        currentPerson = action.payload[0].filter((person => person.id == action.payload[1]));
        return {person: currentPerson[0], people: state.people};
      default:
       return state; 
  }
} 