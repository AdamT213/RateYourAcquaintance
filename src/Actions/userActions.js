import fetch from 'isomorphic-fetch'

export function signUpUser(user){
    var data = {email: user.email, password: user.password, password_confirmation: user.password};
    return function(dispatch){
        dispatch({type: 'SIGN_UP_USER', payload: user})
        return fetch('https://rateyouracquaintanceapi.herokuapp.com/users/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user: data}),
          }).then(res => { 
            return res.json()
        }).then(responseJson => { 
          dispatch({type: 'CREATE_SESSION', payload: user}) 
          return fetch('https://rateyouracquaintanceapi.herokuapp.com/auth_user/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: user.email, password: user.password}), 
          }).then(res => { 
            console.log(res)
            return res.json()
        }).then(responseJson => { 
          console.log(responseJson) 
          dispatch({type: 'SET_TOKEN', payload: responseJson})
      })
    })
  } 
}

export function signInUser(user){
    return function(dispatch){
        dispatch({type: 'SIGN_IN_USER', payload: user})
        return fetch('https://rateyouracquaintanceapi.herokuapp.com/auth_user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: user.email, password: user.password}),
        }).then(res => { 
            return res.json()
          }).then(responseJson => {
            dispatch({type: 'SET_TOKEN', payload: responseJson})
    })
}
}  
