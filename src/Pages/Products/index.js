import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, toggleSidebar } from "../../actions";

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

  const filteredArizalar = arizalar.filter((ariza) => {
    const fullName = `${ariza.firstName} ${ariza.mealName}`.toLowerCase();
    return fullName.includes(filterText.toLowerCase());
  });

  const isLogin = useSelector((state) => state.isLogin); // Access the isLogin state from Redux
  const dispatch = useDispatch(); // Get the dispatch function

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
