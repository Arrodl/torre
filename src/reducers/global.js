import initialState from './initialState';

export default (state = initialState().global, action) => {
    return state;
};