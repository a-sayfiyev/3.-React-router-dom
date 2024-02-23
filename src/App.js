import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DashboardHome from "./Pages/Dashboard";
import Products from "./Pages/Products";
import DashboardTemplate from "./Components/DashboardTemplate";
import Add from "./Pages/Add";
import Statistics from "./Pages/Statistics";
import Users from "./Pages/Users";
import Page404 from "./Pages/404";
import Login from "./Pages/Login";
import { createContext, useState } from "react";

const LoginContext = createContext({isLogin: false, setIsLogin: () => {}});

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardTemplate />}>
            <Route path="home" element={<DashboardHome />} />
            <Route path="products" element={<Products />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="add" element={<Add />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </LoginContext.Provider>
    </Router>
  );
}

export {LoginContext};
export default App;