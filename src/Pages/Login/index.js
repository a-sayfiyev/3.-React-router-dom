// Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../actions";
import LoginWrapper from "./LoginWrapper";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setLogin(true));
    navigate("/dashboard");
  };

  return (
    <LoginWrapper>
      <div className="InnerWrapper">
        <img
          className="mb-3"
          src={process.env.PUBLIC_URL + "/site-logo.png"}
          alt="404"
        />
        <h1 className="display-1">Sign in</h1>
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
          <button className="btn btn-primary" onClick={handleLogin}>
            Sign in
          </button>
        </div>
      </div>
    </LoginWrapper>
  );
}
