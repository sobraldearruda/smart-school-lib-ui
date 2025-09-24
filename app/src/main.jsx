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
import LibrarianSearchBooks from "./pages/librarian/search-books";
import StudentSearchBooks from "./pages/student/search-books";
import TeacherSearchBooks from "./pages/teacher/search-books";
import LibrarianSearchAuthors from "./pages/librarian/search-authors";
import StudentSearchAuthors from "./pages/student/search-authors";
import TeacherSearchAuthors from "./pages/teacher/search-authors";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/search-books" element={<StudentSearchBooks />} />
        <Route path="/student/search-authors" element={<StudentSearchAuthors />} />
        <Route path="/student/my-loans" element={<StudentDashboard />} />
        <Route path="/student/teachers-reading-suggestions" element={<StudentDashboard />} />

        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/search-books" element={<TeacherSearchBooks />} />
        <Route path="/teacher/search-authors" element={<TeacherSearchAuthors />} />
        <Route path="/teacher/my-loans" element={<TeacherDashboard />} />
        <Route path="/teacher/teachers-reading-suggestions" element={<TeacherDashboard />} />
        <Route path="/teacher/my-reading-suggestions" element={<TeacherDashboard />} />

        <Route path="/librarian/dashboard" element={<LibrarianDashboard />} />
        <Route path="/librarian/search-books" element={<LibrarianSearchBooks />} />
        <Route path="/librarian/manage-books" element={<LibrarianDashboard />} />
        <Route path="/librarian/search-authors" element={<LibrarianSearchAuthors />} />
        <Route path="/librarian/manage-authors" element={<LibrarianDashboard />} />
        <Route path="/librarian/my-loans" element={<LibrarianDashboard />} />
        <Route path="/librarian/manage-loans" element={<LibrarianDashboard />} />
        <Route path="/librarian/teachers-reading-suggestions" element={<LibrarianDashboard />} />
        <Route path="/librarian/manage-reading-suggestions" element={<LibrarianDashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
