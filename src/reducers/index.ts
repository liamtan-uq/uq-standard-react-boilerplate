import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Reducer
} from "redux";
import thunk from "redux-thunk";

import { IStore } from "../types";

// Import reducers to combine into root reducer
import apiReducer, { defaultState as apiState } from "./api";

const rootReducer: Reducer<IStore> = combineReducers({
  ...apiReducer
});

// Boilerplate configuration for Redux DevTools chrome extension
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Setup thunk middleware here to appropriately deal with side-effects
export default createStore(
  rootReducer,
  // configure default states here
  {
    apiState
  },
  composeEnhancers(applyMiddleware(thunk))
);
