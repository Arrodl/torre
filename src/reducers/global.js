import initialState from './initialState';
import GLOBAL from '../actions/global';

export default (state = initialState().global, action) => {
    if (action.type === GLOBAL.SET_GLOBAL) {
        return {
            ...state,
            [action.payload.key]: action.payload.value,
        }
    }
    return state;
};