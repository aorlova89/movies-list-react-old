import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import paramsReducer from "./params/reducer";
import moviesReducer from "./movies/reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const reducers = combineReducers({params: paramsReducer, movies: moviesReducer});

const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers,
    composeEnhancer(applyMiddleware(...middleware)));

export default store;
