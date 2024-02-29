import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, setLogin, toggleSidebar } from "../../actions";

export default function Products() {
  const initialArizalar = [
    {
      firstName: "Akobir Sayfiyev",
      mealName: "Osh",
      price: "20 000",
      amount: "3",
      overall: "overall price",
      phone: "90 123 40 41",
      comment: "Yetkazilgan",
    },
    {
      firstName: "Lorem Ipsumov",
      mealName: "Osh",
      price: "20 000",
      amount: "5",
      overall: "overall price",
      phone: "90 123 40 41",
      comment: "Yetkazilgan",
    },
    {
      firstName: "Ter Stegen",
      mealName: "Manti",
      price: "5 000",
      amount: "10",
      overall: "overall price",
      phone: "90 123 40 41",
      comment: "Yetkazilgan",
    },
    {
      firstName: "Lorem Ipsumov",
      mealName: "Big Lavash",
      price: "24 000",
      amount: "3",
      overall: "overall price",
      phone: "90 123 40 41",
      comment: "Yetkazilgan",
    },
  ];

  const [arizalar, setArizalar] = useState(initialArizalar);
  const [filterText, setFilterText] = useState("");
  const [editedComment, setEditedComment] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const calculateOverall = (price, amount) => {
    const numericPrice = parseInt(price.replace(/\s/g, ""), 10);
    const numericAmount = parseInt(amount, 10);
    return (numericPrice * numericAmount).toLocaleString();
  };

  const calculateTotalOverall = () => {
    const totalOverall = arizalar.reduce((total, ariza) => {
      const numericPrice = parseInt(ariza.price.replace(/\s/g, ""), 10);
      const numericAmount = parseInt(ariza.amount, 10);
      return total + numericPrice * numericAmount;
    }, 0);

    return totalOverall.toLocaleString();
  };

  const handleEditComment = (index) => {
    setEditIndex(index);
    setEditedComment(arizalar[index].comment);
  };

  const handleSaveComment = () => {
    const updatedArizalar = [...arizalar];
    updatedArizalar[editIndex].comment = editedComment;
    setArizalar(updatedArizalar);
    setEditIndex(null);
    setEditedComment("");
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditedComment("");
  };

  const handleDeleteAriza = (index) => {
    const updatedArizalar = [...arizalar];
    updatedArizalar.splice(index, 1);
    setArizalar(updatedArizalar);
  };

  const filteredArizalar = arizalar.filter((ariza) => {
    const fullName = `${ariza.firstName} ${ariza.mealName}`.toLowerCase();
    return fullName.includes(filterText.toLowerCase());
  });

  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

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
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredArizalar.map((ariza, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{ariza.firstName}</td>
                <td>{ariza.mealName}</td>
                <td>{ariza.price}</td>
                <td>{ariza.amount}</td>
                <td>{calculateOverall(ariza.price, ariza.amount)}</td>
                <td>{ariza.phone}</td>
                <td>{ariza.comment}</td>
                <td>
                  {editIndex === index ? (
                    <>
                      <select
                        value={editedComment}
                        onChange={(e) => setEditedComment(e.target.value)}
                      >
                        <option value="Qabul qilindi">Qabul qilindi</option>
                        <option value="Yetkazilmoqda">Yetkazilmoqda</option>
                        <option value="Yetkazildi">Yetkazildi</option>
                      </select>
                      <button
                        className="btn btn-sm ms-2"
                        onClick={handleSaveComment}
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
                      <button
                        className="btn btn-sm ms-1"
                        onClick={handleCancelEdit}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>{" "}
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn btn-sm"
                      onClick={() => handleEditComment(index)}
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
                </td>
                <td>
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