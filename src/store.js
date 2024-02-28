import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  isLogin: false,
  isSidebarHidden: false,
};

const store = createStore(rootReducer, initialState);


export default store;
