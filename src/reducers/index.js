// reducers/index.js
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import sidebarReducer from "./sidebarReducer";

const initialState = {
  users: [
    {
      fullName: "Akobir Sayfiyev",
      phone: "90 123 40 41",
      role: "admin",
    },
    {
      fullName: "Lorem Ipsumov",
      phone: "90 123 40 41",
      role: "yetkazuvchi",
    },
    {
      fullName: "Cristiano Ronaldo",
      phone: "90 123 40 41",
      role: "foydalanuvchi",
    },
    {
      fullName: "Leo Messi",
      phone: "90 123 40 41",
      role: "foydalanuvchi",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_ROLE":
      const { index, role } = action.payload;
      const updatedUsers = [...state.users];
      updatedUsers[index].role = role;
      return {
        ...state,
        users: updatedUsers,
      };
    case "DELETE_USER":
      const { deleteIndex } = action.payload;
      const filteredUsers = state.users.filter(
        (_, index) => index !== deleteIndex
      );
      return {
        ...state,
        users: filteredUsers,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isLogin: loginReducer,
  isSidebarHidden: sidebarReducer,
  users: usersReducer,
});


export default rootReducer;