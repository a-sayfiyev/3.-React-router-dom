import React, { useContext } from "react";
import LoginWrapper from "./LoginWrapper";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";

export default function Login() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(LoginContext);

  return (
    <LoginWrapper>
      <div className="InnerWrapper">
        <img className="mb-3" src={process.env.PUBLIC_URL + "/site-logo.png"} alt="404" />
        <h1 className="display-1">Sign in</h1>
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsLogin(true);
              navigate("/dashboard");
            }}
          >
            Login
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsLogin(true);
              navigate("/dashboard");
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </LoginWrapper>
  );
}
