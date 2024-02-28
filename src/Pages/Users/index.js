import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUserRole, deleteUser } from "../../actions";

export default function Users() {
  const [users, setUsers] = useState([
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
  ]);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setSelectedRole("");
  };

  const handleShow = (index) => {
    setSelectedUserIndex(index);
    setShowModal(true);
  };

  const handleRoleChange = () => {
    if (selectedUserIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[selectedUserIndex].role = selectedRole;
      setUsers(updatedUsers);
      handleClose();
    }
  };

  const handleDeleteUser = (index) => {
    const filteredUsers = users.filter((_, idx) => idx !== index);
    setUsers(filteredUsers);
  };

  return (
    <>
      <div className="container p-4">
        <h1>Foydalanuvchilar</h1>
        <p>Rollarni biriktirishingiz mumkin</p>

        <table className="table" id="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ism</th>
              <th>Telefon raqami</th>
              <th>Roli</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.fullName}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn edit-btn"
                    onClick={() => handleShow(index)}
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
                  <button
                    className="btn"
                    onClick={() => handleDeleteUser(index)}
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
          <p className="fw-bold me-5">{users.length} ta foydalanuvchi</p>
        </div>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rolni tanlang</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              as="select"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Tanlang...</option>
              <option value="admin">Admin</option>
              <option value="yetkazuvchi">Yetkazuvchi</option>
              <option value="foydalanuvchi">Foydalanuvchi</option>
            </Form.Control>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Bekor qilish
            </Button>
            <Button
              variant="primary"
              onClick={handleRoleChange}
              disabled={!selectedRole}
            >
              Saqlash
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
