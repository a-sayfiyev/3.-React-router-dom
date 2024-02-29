import { createStore } from "redux";
import rootReducer from "./reducers";
import { initialArizalar } from "./initialArizalar";

const initialState = {
  isLogin: false,
  isSidebarHidden: false,
  arizaReducer: { arizalar: initialArizalar },
};

const store = createStore(rootReducer, initialState);

export default store;
