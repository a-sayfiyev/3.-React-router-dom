  import React, { useContext, useEffect, useState } from "react";
  import DashboardTemplateWrapper from "./DashboardTemplateWrapper";
  import { ListGroup } from "react-bootstrap";
  import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
  import { LoginContext } from "../../App";

  export default function DashboardTemplate() {
    const { isLogin, setIsLogin } = useContext(LoginContext);
    const navigate = useNavigate();

    const [isSidebarHidden, setIsSidebarHidden] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarHidden(!isSidebarHidden);
    };

    const keyUp = (e) => {
      if (e.key === "Escape") {
        setIsSidebarHidden(true);
      }
    };

    useEffect(() => {
      document.addEventListener("keyup", keyUp);

      return () => {
        document.removeEventListener("keyup", keyUp);
      };
    }, []);

    const handleLogout = () => {
      setIsLogin(false);
      navigate("/");
    };

    return (
      <DashboardTemplateWrapper>
        <aside className={isSidebarHidden ? "hide" : "shadow"}>
          <Link to="/">
            <img
              className="site-logo"
              src={process.env.PUBLIC_URL + "/site-logo.png"}
              alt="#"
            />
          </Link>
          <ListGroup>
            <ListGroup.Item>
              <NavLink
                to="/dashboard/home"
                className="d-flex gap-2 text-decoration-none text-black align-items-center"
                style={(navData) => {
                  return navData.isActive ? { backgroundColor: "#FFEC00" } : {};
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#78909C"
                  class="bi bi-pie-chart"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
                </svg>

                <div className="link-info">
                  <p
                    style={{ fontSize: "16px" }}
                    className="text-black m-0 fw-bold"
                  >
                    Arizalar
                  </p>
                  <p
                    style={{ fontSize: "14px", color: "#5E6366" }}
                    className="m-0"
                  >
                    Yetib kelgan arizalar
                  </p>
                </div>
              </NavLink>
            </ListGroup.Item>

            <ListGroup.Item>
              <NavLink
                to="/dashboard/products"
                className="d-flex gap-2 text-decoration-none text-black align-items-center"
                style={(navData) => {
                  return navData.isActive ? { backgroundColor: "#FFEC00" } : {};
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#78909C"
                  class="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                <div className="link-info">
                  <p
                    style={{ fontSize: "16px" }}
                    className="text-black m-0 fw-bold"
                  >
                    Yetkazilgan
                  </p>
                  <p
                    style={{ fontSize: "14px", color: "#5E6366" }}
                    className="m-0"
                  >
                    Yetkazilgan taomlar ro’yxati
                  </p>
                </div>
              </NavLink>
            </ListGroup.Item>

            <ListGroup.Item>
              <NavLink
                to="/dashboard/statistics"
                className="d-flex gap-2 text-decoration-none text-black align-items-center"
                style={(navData) => {
                  return navData.isActive ? { backgroundColor: "#FFEC00" } : {};
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#78909C"
                  class="bi bi-bar-chart-line-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z" />
                </svg>

                <div className="link-info">
                  <p
                    style={{ fontSize: "16px" }}
                    className="text-black m-0 fw-bold"
                  >
                    Statistika
                  </p>
                  <p
                    style={{ fontSize: "14px", color: "#5E6366" }}
                    className="m-0"
                  >
                    Diagrammalar statistikasi
                  </p>
                </div>
              </NavLink>
            </ListGroup.Item>

            <ListGroup.Item>
              <NavLink
                to="/dashboard/add"
                className="d-flex gap-2 text-decoration-none text-black align-items-center"
                style={(navData) => {
                  return navData.isActive ? { backgroundColor: "#FFEC00" } : {};
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#367BF5"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>

                <div className="link-info">
                  <p
                    style={{ fontSize: "16px" }}
                    className="text-black m-0 fw-bold"
                  >
                    Qo’shish
                  </p>
                  <p
                    style={{ fontSize: "14px", color: "#5E6366" }}
                    className="m-0"
                  >
                    Yangi taom qo’shish
                  </p>
                </div>
              </NavLink>
            </ListGroup.Item>

            <ListGroup.Item>
              <NavLink
                to="/dashboard/users"
                className="d-flex gap-2 text-decoration-none text-black align-items-center"
                style={(navData) => {
                  return navData.isActive ? { backgroundColor: "#FFEC00" } : {};
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#78909C"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>

                <div className="link-info">
                  <p
                    style={{ fontSize: "16px" }}
                    className="text-black m-0 fw-bold"
                  >
                    Foydalanuvchilar
                  </p>
                  <p
                    style={{ fontSize: "14px", color: "#5E6366" }}
                    className="m-0"
                  >
                    Rollarni biriktirish
                  </p>
                </div>
              </NavLink>
            </ListGroup.Item>
          </ListGroup>
        </aside>
        <div className="rightside">
          <header className="p-3 shadow d-flex align-items-center justify-content-between">
            <button class="btn" onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
            <div className="d-flex align-items-center gap-4">
              <Link
                to="/dashboard"
                className="admin-info d-flex align-items-center gap-1 text-decoration-none text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="black"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <p>Axror</p>
              </Link>
              <button className="btn btn-primary logout-btn" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          </header>
          <main className="p-3">
            <Outlet />
          </main>
        </div>
      </DashboardTemplateWrapper>
    );
    }