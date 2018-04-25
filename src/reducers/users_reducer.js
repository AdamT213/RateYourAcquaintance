export function usersReducer(state = {currentUser: {}, user_id: null}, action) {
  switch (action.type) {

    case 'CREATE_SESSION':  
      return Object.assign({}, state, {currentUser: {id: action.payload.id, email: action.payload.email, password: action.payload.password }, user_id: action.payload.id})
    default:
      return state
  }
}