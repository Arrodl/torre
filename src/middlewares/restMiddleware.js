

export default (storeAPI) => (next) => (action) => {
    console.log("[REST] Middleware", action, next, storeAPI);

    return next(action);
};