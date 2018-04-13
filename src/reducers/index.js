import { combineReducers } from 'redux';
import { peopleReducer } from "./people_reducer";
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  peopleReducer, 
  router: routerReducer
 });
 
 export default rootReducer;