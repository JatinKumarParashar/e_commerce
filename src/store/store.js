import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import { thunk } from "redux-thunk";

// The Redux store is configured here with thunk middleware.
// Thunk enables async action creators that can dispatch actions after data fetches.
const store=createStore(rootReducer,applyMiddleware(thunk));

export default store;