import { combineReducers } from 'redux';
import { peopleReducer } from "./people_reducer"  
import { usersReducer } from "./users_reducer"

const rootReducer = combineReducers({
  peopleReducer, usersReducer,
 });
 
 export default rootReducer;