import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import arizaReducer from "./arizaReducer";

const rootReducer = combineReducers({
  arizaReducer,
  isLogin: loginReducer,
  isSidebarHidden: sidebarReducer,
  users: usersReducer,
});

if (process.env.NODE_ENV === "development") {
  const { default: ReactDevTools } = require("react-devtools");
  ReactDevTools.loadDevTools({
    findHostInstanceByFiber: true,
  });
}

export default rootReducer;
