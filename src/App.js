import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Pages/Welcome/index';
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import DashboardTemplate from "./Components/DashboardTemplate";
import Add from "./Pages/Add";
import Statistics from "./Pages/Statistics";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<DashboardTemplate />}>
          <Route path="" element={<Dashboard/>} />
          <Route path="products" element={<Products />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;