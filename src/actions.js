// actions/index.js
export const setLogin = (isLogin) => ({
  type: "SET_LOGIN",
  payload: isLogin,
});

export const toggleSidebar = () => ({
  type: "TOGGLE_SIDEBAR",
});

export const setUserRole = (index, role) => ({
  type: "SET_USER_ROLE",
  payload: { index, role },
});

export const deleteUser = (deleteIndex) => ({
  type: "DELETE_USER",
  payload: { deleteIndex },
});
