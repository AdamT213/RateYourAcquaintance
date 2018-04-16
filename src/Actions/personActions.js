import fetch from 'isomorphic-fetch';

export function findPerson(person){ 
  debugger;
  return function(dispatch){
   dispatch({type: 'LOADING_PEOPLE'})
   return fetch('https://rateyouracquaintanceapi.herokuapp.com/people')
     .then(res => {
       return res.json()
     }).then(responseJson => {
       dispatch({type: 'GET_PERSON', payload: [responseJson, person]}) 
     })
 } 
} 

export function addPerson(person){ 
  return function(dispatch){
    dispatch({type: 'ADD_PERSON'})
    return fetch('https://rateyouracquaintanceapi.herokuapp.com/people', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)})
  } 
} 