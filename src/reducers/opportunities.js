import initialState from './initialState';
import OPPORTUNITIES from '../actions/opportunities';

export default (state = initialState().opportunities, action) => {
    if (action.type === OPPORTUNITIES.AGGREGATE_OPPORTUNITIES) {
        return {
            data: [...state.data, ...action.payload.data],
            loading: action.payload.loading,
            error: action.payload.error
        };
    }
    return state;
};