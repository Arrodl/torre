import { agregateOpportunities, setGlobalAttribute } from "../actions";
import { RETRIEVE_OPPORTUNITIES, RETRIEVE_USER } from "../actions/rest";
import axios from 'axios';

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com';

export default (storeAPI) => (next) => async (action) => {
    if ([
        RETRIEVE_USER,
        RETRIEVE_OPPORTUNITIES
    ].includes(action.type)) {
        console.log("[REST] Middleware", action);

        if (action.type === RETRIEVE_USER) {
            storeAPI.dispatch(setGlobalAttribute({
                key: 'info',
                value: {
                    data: null,
                    loading: true,
                    error: false,
                }
            }));

            try {
                const { data } = await axios.get(`/https://torre.bio/api/bios/${action.payload}`);
                
                if (data) {
                    storeAPI.dispatch(setGlobalAttribute({
                        key: 'info',
                        value: {
                            data: data,
                            loading: false,
                            error: false,
                        }
                    }));
                } else {
                    storeAPI.dispatch(setGlobalAttribute({
                        key: 'info',
                        value: {
                            data: null,
                            loading: false,
                            error: 'Unknown error.',
                        }
                    }));
                }
            } catch (e) {
                storeAPI.dispatch(setGlobalAttribute({
                    key: 'info',
                    value: {
                        data: null,
                        loading: false,
                        error: e.message,
                    }
                }));
            }
        }

        if (action.type === RETRIEVE_OPPORTUNITIES) {
            storeAPI.dispatch(agregateOpportunities({
                loading: true,
                data: [],
                error: false,
            }));

            try {
                const { data } = await axios.post(`/https://search.torre.co/opportunities/_search/?offset=${action.payload.offset}&size=${action.payload.size}`);

                const { results } = data;

                storeAPI.dispatch(agregateOpportunities({
                    loading: false,
                    data: results,
                    error: false,
                }));
            } catch (e) {
                storeAPI.dispatch(agregateOpportunities({
                    loading: false,
                    data: [],
                    error: e.message,
                }));
            }
        }
    }

    return next(action);
};