import React, { createContext, useReducer } from "react";
import {
  textState,
  textReducer,
  commentTriggerState,
  commentTriggerReducer,
} from "./genericReducer";

const reduceReducers = (...reducers) => (prevState, value, ...args) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...args),
    prevState
  );

const combinedReducers = reduceReducers(textReducer, commentTriggerReducer);

const initialState = {
  ...textState,
  ...commentTriggerState,
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
