import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Check from "./Check";

import AdminLog from "./pages/admin/AdminLog";
import Login from "./pages/doctors/Login";
import Doctors from "./pages/doctors/Doctors";
import AdminDash from "./pages/admin/AdminDash";
import CheckUser from "./pages/admin/CheckUser";
import DoctorSignUp from "./pages/admin/DoctorSignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Check pageTitle="MainSpring"/>} />
        {/* <Route path="/appointment" element={<NewAppoint />} /> */}
        <Route path="/doctor" element={<Login/>} />
        <Route path="/doctordash" element={<Doctors/>} />
        <Route path="/admin" element={<AdminLog />} />
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/doctorsignup" element={<DoctorSignUp/>} />

         <Route path="/checkUser" element={<CheckUser />} />

      </Routes>
    </>
  );
}

export default App;
