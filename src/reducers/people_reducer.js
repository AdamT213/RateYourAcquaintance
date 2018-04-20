
export function peopleReducer(state = {loading: true, person: "unfound", 
reviews: {}}, action) {
  switch (action.type) {

     case 'GET_PERSON': 
     let currentPerson = action.payload[0].find((person => person.name == action.payload[1].name)) 
     if (currentPerson != undefined) { 
      return {loading: false, person: currentPerson}; 
     } else { 
      return  {loading: false, person: state.person}; 
     }
      case 'SET_PERSON':  
        currentPerson = action.payload;
        return {loading: false, person: currentPerson}; 
       case 'ADD_REVIEW': 
        let review = action.payload 
        return {loading: false, reviews: state.person.reviews.concat(review)};
     default:
       return state; 
  }
} 