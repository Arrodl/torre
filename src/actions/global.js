const SET_GLOBAL = 'set-global';

export const setGlobalAttribute = ({ key, value }) => ({
    type: SET_GLOBAL,
    payload: { key, value },
});

export default {
    SET_GLOBAL
};

