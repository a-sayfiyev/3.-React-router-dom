const initialState = {
  isLogin: false,
  isSidebarHidden: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarHidden: !state.isSidebarHidden,
      };
    default:
      return state;
  }
};

export default rootReducer;
