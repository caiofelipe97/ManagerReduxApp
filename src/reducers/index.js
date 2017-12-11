import { combineReducers } from 'redux';
import AuthReducer from './AuthReduer';

export default combineReducers({
    auth: AuthReducer
});