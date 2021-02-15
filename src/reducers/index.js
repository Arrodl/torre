import { combineReducers } from 'redux';
import { default as global } from './global';
import { default as opportunities } from './opportunities';

const rootReducer = combineReducers({
    global,
    opportunities,
});

export default rootReducer;