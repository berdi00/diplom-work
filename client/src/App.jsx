import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Layout from "./pages/layouts/Layout";
import AdminLayout from "./pages/layouts/AdminLayout";
import Diploma from "./pages/Admin/Diploma/Index";
import DiplomWorkLayout from "./pages/layouts/DiplomWorkLayout";
import Item from "./pages/Admin/Diploma/Item";
import Student from "./pages/Admin/Student/Index";
import StudentItem from "./pages/Admin/Student/Item";
import StudentDiplomas from "./pages/User";
function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<DiplomWorkLayout />}>
          <Route path="/" element={<StudentDiplomas />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="diploma" element={<Diploma />} />
          <Route path=":diplomId" element={<Item />} />
          <Route path="students" element={<Student />} />
          <Route path="students/:studentId" element={<StudentItem />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
