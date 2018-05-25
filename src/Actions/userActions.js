import fetch from 'isomorphic-fetch'
import { history } from '../App'

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
          //post to auth_user to retrieve JWT
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
          //call action to set current user and store token
          dispatch({type: 'SET_TOKEN', payload: responseJson}) 
      }).then(res=>{ 
        //for now, having terms and conditons/opening remarks pop up as a 1-time alert on signup
        alert("Terms and Conditions: We, the creators of RateYourAcquaintance, recognize the potential for this product to cause great harm and negatively impact lives. However, when used properly, we believe it can also be a tool for empowerment, used to bring others up. This is an application for mature adults, and should be used as such. Hate speech, libel and the spreading of rumors will not be tolerated. Negative reviews must reference a   SPECIFIC ENCOUNTER or else they will be removed at the moderator's discretion. If you must leave a negative review, try to maintain the Karmic balance by leaving a positive review for somebody else. Above all, remember, the way you talk about others speaks volumes about you. By proceeding, you acknowledge these terms.")
      }).then(res => { 
        history.push(`/`) 
      })
    })
  } 
}

export function signInUser(user){
    return function(dispatch){ 
      let didError;
        dispatch({type: 'SIGN_IN_USER', payload: user})
        //post to auth_user to retrieve JWT
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
            if (responseJson.errors) { 
              alert(responseJson.errors) 
              didError = true;
            } 
            else { 
              //call action to set current user and store token
              dispatch({type: 'SET_TOKEN', payload: responseJson}) 
            } 
            }).then(res => { 
              if (!didError) {
                history.push(`/`) 
              }
            }) 
}
}  
