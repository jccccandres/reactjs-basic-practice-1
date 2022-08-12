import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import users from './reducers/users'
import budgetTracker from "./reducers/budgetTracker";

const middlewares = compose(applyMiddleware(thunk, logger));

const reducers = combineReducers({
    users,
    budgetTracker
});

export default createStore(reducers, middlewares)