import { combineReducers } from 'redux';
import { default as global } from './global';

const rootReducer = combineReducers({
    global,
});

export default rootReducer;