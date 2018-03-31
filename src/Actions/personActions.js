import fetch from 'isomorphic-fetch'

export function findPerson(person){ 
  return function(dispatch){
   dispatch({type: 'LOADING_PEOPLE'})
   return fetch('https://rateyouracquaintanceapi.herokuapp.com/people')
     .then(res => {
       return res.json()
     }).then(responseJson => {
       dispatch({type: 'GET_PERSON', payload: responseJson})
   })
 }