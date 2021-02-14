

export default (storeAPI) => (next) => (action) => {
    const actualState = storeAPI.getState();

    const resultState = next(action);

    const diff = Object.entries(resultState).reduce((ps, [k, v]) => {
        if (actualState[k] !== v) {
            ps[k] = [actualState[k], v];
        }
        return ps;
    }, {});

    if (Object.keys(diff).length > 0) {
        console.log("[Trace] Middleware", diff);
    }

    return resultState;
};