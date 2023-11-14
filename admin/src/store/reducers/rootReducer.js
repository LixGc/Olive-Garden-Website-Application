import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import menuReducer from "./menuReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  menuReducer,
  categoryReducer,
  userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
