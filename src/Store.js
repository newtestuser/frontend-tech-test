import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import UserDataReducer from "./UserDataReducer";

export let configureStore;

export const init = function(initialState) {
  const middleware = [thunk];
  const reducer = combineReducers({ user: UserDataReducer });
  configureStore = createStore(
    reducer,
    initialState,

    applyMiddleware(...middleware)
  );
};
