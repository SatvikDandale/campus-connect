import rootReducer from "./Reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export function newStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION
        ? window.__REDUX_DEVTOOLS_EXTENSION()
        : (f) => f
    )
  );
  return store;
}
