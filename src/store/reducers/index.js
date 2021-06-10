import { combineReducers } from "redux";
import authReducer from "./authReducer";
import siteReducer from "./siteReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  site: siteReducer,
});

export default rootReducers;
