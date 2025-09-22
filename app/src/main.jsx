import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import StudentDashboard from "./pages/student/dashboard";
import TeacherDashboard from "./pages/teacher/dashboard";
import LibrarianDashboard from "./pages/librarian/dashboard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/librarian/dashboard" element={<LibrarianDashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
