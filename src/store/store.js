import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducer";

const initialState = {};
const middleware = [thunk];

let composeEnhancers = null;

if (
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
