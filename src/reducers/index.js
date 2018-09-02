import { combineReducers } from 'redux';

import { USER_INFO } from '../constants';
import initialState from './initialState';

// This is just a sample user state
function user(state=initialState.currentUser, action) {
  if (action.type === USER_INFO) {
    return state;
  }
  return state;
}

export default combineReducers({
  currentUser: user
});
