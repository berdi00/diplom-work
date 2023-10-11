import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Layout from "./pages/layouts/Layout";
import CashierLayout from "./pages/layouts/CashierLayout";
import AdminLayout from "./pages/layouts/AdminLayout";
import Cashier from "./pages/Cashier/Index";
import Admin from "./pages/Admin/Index";
function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<CashierLayout />}>
          <Route index element={<Cashier />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
