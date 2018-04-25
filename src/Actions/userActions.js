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
          dispatch({type: 'CREATE_SESSION', payload: responseJson})
  }) 
} 
}

export function signInUser(user){
    var data = {email: user.email, password: user.password, remember_me: user.id};
    return function(dispatch){
        dispatch({type: 'SIGN_IN_USER', payload: user})
        return fetch('https://rateyouracquaintanceapi.herokuapp.com/users/sign_in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: data}),
        }).then(res => {
            return res.json()
          }).then(responseJson => {
            dispatch({type: 'CREATE_SESSION', payload: responseJson})
    })
}
}  
