export function usersReducer(state = {currentUser: null, user_id: null}, action) {
  switch (action.type) {

    case 'CREATE_SESSION':  
      return Object.assign({}, state, {currentUser: {id: action.payload.id, email: action.payload.email, password: action.payload.password }, user_id: action.payload.id}) 
    case 'SET_TOKEN': 
      localStorage.setItem('token', action.payload.auth_token); 
      return Object.assign({}, state, {currentUser: {id: action.payload.user.id, email: action.payload.user.email}})
    default:
      return state
  }
}