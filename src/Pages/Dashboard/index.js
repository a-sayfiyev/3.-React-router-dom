import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAriza } from "../../actions";

export default function Dashboard() {
  const arizalar = useSelector((state) => state.arizaReducer.arizalar);
  const dispatch = useDispatch();

  const [filterText, setFilterText] = useState("");
  const [editedPrice, setEditedPrice] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const calculateOverall = (price, amount) => {
    const numericPrice = parseInt(price.replace(/\s/g, ""), 10);
    const numericAmount = parseInt(amount, 10);
    return (numericPrice * numericAmount).toLocaleString();
  };

  const calculateTotalOverall = () => {
    if (!arizalar || arizalar.length === 0) return "0";
    const totalOverall = arizalar.reduce((total, ariza) => {
      const numericPrice = parseInt(ariza.price.replace(/\s/g, ""), 10);
      const numericAmount = parseInt(ariza.amount, 10);
      return total + numericPrice * numericAmount;
    }, 0);
    return totalOverall.toLocaleString();
  };

  const filteredArizalar = arizalar.filter((ariza) => {
    const fullName = `${ariza.firstName} ${ariza.mealName}`.toLowerCase();
    return fullName.includes(filterText.toLowerCase());
  });

const handleDeleteAriza = (index) => {
  dispatch(deleteAriza(index));
};

  const handleEditPrice = (index, price) => {
    setEditedPrice(price);
    setEditIndex(index);
  };

  const handleSavePrice = (index) => {
    const updatedArizalar = [...arizalar];
    updatedArizalar[index].price = editedPrice;
    setEditIndex(null);
  };

  return (
    <>
      <div className="container p-4">
        <h1>Arizalar</h1>
        <p>Yetib kelgan arizalarni kuzatishingiz mumkin</p>
        <table className="table" id="teachersTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Ism</th>
              <th>Taom nomi</th>
              <th>Narxi</th>
              <th>Soni</th>
              <th>Umumiy narxi</th>
              <th>Telefon raqami</th>
              <th>Izoh</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredArizalar.map((ariza, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{ariza.firstName}</td>
                <td>{ariza.mealName}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editedPrice}
                      onChange={(e) => setEditedPrice(e.target.value)}
                    />
                  ) : (
                    ariza.price
                  )}
                </td>
                <td>{ariza.amount}</td>
                <td>{calculateOverall(ariza.price, ariza.amount)}</td>
                <td>{ariza.phone}</td>
                <td>{ariza.comment}</td>
                <td>
                  {editIndex === index ? (
                    <button
                      className="btn"
                      onClick={() => handleSavePrice(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check2-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className="btn"
                      onClick={() => handleEditPrice(index, ariza.price)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                      </svg>
                    </button>
                  )}
                  <button
                    className="btn"
                    onClick={() => handleDeleteAriza(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="overall-sum d-flex align-items-center justify-content-between">
          <h5>Jami</h5>
          <p className="fw-bold me-5">{calculateTotalOverall()} so'm</p>
        </div>
      </div>
    </>
  );
}
