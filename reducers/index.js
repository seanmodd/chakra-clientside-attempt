import { combineReducers } from 'redux';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  // ! NEED TO SHOW RYAN
  // auth: authReducer,
  auth: undefined,
});

export default rootReducer;
