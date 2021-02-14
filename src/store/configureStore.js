import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { rest, trace } from '../middlewares';

const configureStoreDev = (initialState) => {
    const middlewares = [
        rest,
        trace,
        thunk,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    ));

    return store;
};

const configureStoreProd = (initialState) => {
    const middlewares = [
        thunk,
        rest,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    ));

    return store;
};

export default process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;