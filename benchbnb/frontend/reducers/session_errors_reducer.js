import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

// project says RECEIVE_SESSION_ERRORS, but I think they just mean RECEIVE_ERRORS

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return []
    default: 
      return state;
  }
}

export default sessionErrorsReducer;