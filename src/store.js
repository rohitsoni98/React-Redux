import { createStore, compose } from "redux";
import rootReducer from "./reducers/index";

const Compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, Compose());

export default store;
