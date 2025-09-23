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
        <Route path="/student/search-books" element={<StudentDashboard />} />
        <Route path="/student/search-authors" element={<StudentDashboard />} />
        <Route path="/student/my-loans" element={<StudentDashboard />} />
        <Route path="/student/teachers-reading-suggestions" element={<StudentDashboard />} />

        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/search-books" element={<TeacherDashboard />} />
        <Route path="/teacher/search-authors" element={<TeacherDashboard />} />
        <Route path="/teacher/my-loans" element={<TeacherDashboard />} />
        <Route path="/teacher/teachers-reading-suggestions" element={<TeacherDashboard />} />
        <Route path="/teacher/my-reading-suggestions" element={<TeacherDashboard />} />

        <Route path="/librarian/dashboard" element={<LibrarianDashboard />} />
        <Route path="/librarian/search-books" element={<LibrarianDashboard />} />
        <Route path="/librarian/manage-books" element={<LibrarianDashboard />} />
        <Route path="/librarian/search-authors" element={<LibrarianDashboard />} />
        <Route path="/librarian/manage-authors" element={<LibrarianDashboard />} />
        <Route path="/librarian/my-loans" element={<LibrarianDashboard />} />
        <Route path="/librarian/manage-loans" element={<LibrarianDashboard />} />
        <Route path="/librarian/teachers-reading-suggestions" element={<LibrarianDashboard />} />
        <Route path="/librarian/manage-reading-suggestions" element={<LibrarianDashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
