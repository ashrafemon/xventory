import { combineReducers } from "redux";
import authReducer from "./authReducer";
import siteReducer from "./siteReducer";
import staffReducer from "./staffReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  site: siteReducer,
  staff: staffReducer,
});

export default rootReducers;
