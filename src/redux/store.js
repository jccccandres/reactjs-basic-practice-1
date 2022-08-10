import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import users from './reducers/users'

const middlewares = compose(applyMiddleware(thunk, logger));

const reducers = combineReducers({
    users
});

export default createStore(reducers, middlewares)