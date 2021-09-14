import { combineReducers } from 'redux';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  // ! WTF IS THE PROBLEM
  auth: authReducer,
});

export default rootReducer;
