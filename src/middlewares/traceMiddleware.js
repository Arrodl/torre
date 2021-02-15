

export default (storeAPI) => (next) => (action) => {
    const actualState = storeAPI.getState();

    const actionResult = next(action);

    const resultState = storeAPI.getState();

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