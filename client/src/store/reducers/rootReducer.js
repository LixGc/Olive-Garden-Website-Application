import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  menuReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
