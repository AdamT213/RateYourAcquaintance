export function usersReducer(state = {currentUser: null, user_id: null}, action) {
  switch (action.type) {
    // one single action catches sign in and sign up, sets token in localstorage for access in requests, and sets current user for verification of login
    case 'SET_TOKEN': 
      localStorage.setItem('token', action.payload.auth_token); 
      return Object.assign({}, state, {currentUser: {id: action.payload.user.id, email: action.payload.user.email}})
    default:
      return state
  }
}