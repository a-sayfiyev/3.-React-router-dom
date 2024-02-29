import { DELETE_ARIZA, DELETE_PRODUCT } from "../actions";

const initialArizalarState = {
  arizalar: [
    {
      firstName: "Akobir Sayfiyev",
      mealName: "Osh",
      price: "20 000",
      amount: "3",
      overall: "overall price",
      phone: "90 123 40 41",
      comment: "Lorem ipsum",
    },
    {
      firstName: "Lorem Ipsumov",
      mealName: "Osh",
      price: "20 000",
      amount: "5",
      overall: "overall price",
      phone: "90 123 40 41",
      comment: "Lorem ipsum",
    },
    {
      firstName: "Ter Stegen",
      mealName: "Manti",
      price: "5 000",
      amount: "10",
      overall: "overall price",
      phone: "90 123 40 41",
      comment: "Lorem ipsum",
    },
    {
      firstName: "Lorem Ipsumov",
      mealName: "Big Lavash",
      price: "24 000",
      amount: "3",
      overall: "overall price",
      phone: "90 123 40 41",
      comment: "Lorem ipsum",
    },
  ],
};

const arizaReducer = (state = initialArizalarState, action) => {
  switch (action.type) {
    case DELETE_ARIZA:
      const { index: arizaIndex } = action.payload;
      const updatedArizalar = state.arizalar.filter(
        (_, idx) => idx !== arizaIndex
      );
      return {
        ...state,
        arizalar: updatedArizalar,
      };
    case DELETE_PRODUCT:
      const { index: productIndex } = action.payload;
      const updatedProducts = state.arizalar.filter(
        (_, idx) => idx !== productIndex
      );
      return {
        ...state,
        arizalar: updatedProducts,
      };
    default:
      return state;
  }
};

export default arizaReducer;
