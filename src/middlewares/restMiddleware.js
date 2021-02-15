import { setGlobalAttribute } from "../actions";
import { RETRIEVE_USER } from "../actions/rest";
import axios from 'axios';

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com';

export default (storeAPI) => (next) => async (action) => {
    if ([
        RETRIEVE_USER
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
    }

    return next(action);
};