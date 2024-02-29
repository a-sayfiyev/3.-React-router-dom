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

export const DELETE_ARIZA = "DELETE_ARIZA";
export const deleteAriza = (index) => ({
  type: DELETE_ARIZA,
  payload: { index },
});


export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (index) => ({
  type: DELETE_PRODUCT,
  payload: { index },
});