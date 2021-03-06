import fetch from 'isomorphic-fetch';
import { history } from '../App'

export function findPerson(person){ 
  return function(dispatch, getState){
   dispatch({type: 'LOADING_PEOPLE'})
   return fetch('https://rateyouracquaintanceapi.herokuapp.com/people', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
   },
   }) .then(res => { 
       return res.json()
     }).then(responseJson => {
       dispatch({type: 'GET_PERSON', payload: [responseJson, person]}) 
     }).then(res => { 
       let currentPerson = getState().peopleReducer.person
       if (currentPerson.id || currentPerson === "unfound") {
        history.push(`/people/${currentPerson.id}`)  
       } 
       else { 
        history.push(`/people/`)
       }
    })
 } 
} 

export function addPerson(person){ 
  return function(dispatch, getState){ 
    dispatch({type: 'ADD_PERSON'})
    return fetch('https://rateyouracquaintanceapi.herokuapp.com/people', {
    method: 'POST',
    headers: { 
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)})
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_PERSON', payload: responseJson})     
    }).then(res => { 
      let currentPerson = getState().peopleReducer.person
       if (currentPerson.id || currentPerson === "unfound") {
        history.push(`/people/${currentPerson.id}`)  
       } 
       else { 
        history.push(`/people/`)
       } 
    })
  } 
}  

export function addReview(review, person){ 
  return function(dispatch, getState){
    dispatch({type: 'ADD_REVIEW'})
    return fetch(`https://rateyouracquaintanceapi.herokuapp.com/people/${person.id}/reviews`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)}) 
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'CONCAT_REVIEW', payload: responseJson}) 
    }).then(res => { 
      history.push(`/people/${getState().peopleReducer.person.id}`) 
    })  
  } 
}   

export function removePerson(){ 
  return function(dispatch){
   dispatch({type: 'CLEAR_PERSON'})
 } 
} 

export function setPersonById(personId){ 
  return function(dispatch, getState){
    dispatch({type: 'LOADING_PEOPLE'})
    return fetch('https://rateyouracquaintanceapi.herokuapp.com/people', {
     method: 'GET',
     headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`,
       Accept: 'application/json',
       'Content-Type': 'application/json'
    },
    }) .then(res => { 
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'SET_PERSON_BY_ID', payload: [responseJson, personId]}) 
      }).then(res => { 
        let currentPerson = getState().peopleReducer.person 
        history.push(`/people/${currentPerson.id}`)
      })
 } 
} 
