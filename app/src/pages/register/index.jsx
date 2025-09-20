import { useState } from "react";
import "./style.css";

function Register() {
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registration, setRegistration] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      if (!userType) {
        throw new Error("Please, select your user type.");
      }

      const endpoint =
        userType === "librarian"
          ? "librarians"
          : userType === "teacher"
          ? "teachers"
          : "students";

      const response = await fetch(`http://localhost:3000/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, registration, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      const data = await response.json();
      console.log("Welcome to Smart School Library.", data);

      if (userType === "librarian") {
        window.location.href = "/librarian/dashboard";
      } else if (userType === "teacher") {
        window.location.href = "/teacher/dashboard";
      } else {
        window.location.href = "/student/dashboard";
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="register-form-container">
      <div className="register-form-box">
        <form onSubmit={handleRegister}>
          {/* Header */}
          <div className="header">
            <div className="logo-icons">
              <span className="material-symbols-outlined logo-icon logo-blue">
                auto_stories
              </span>
              <span className="material-symbols-outlined logo-icon logo-yellow">
                auto_stories
              </span>
              <span className="material-symbols-outlined logo-icon logo-red">
                auto_stories
              </span>
              <span className="material-symbols-outlined logo-icon logo-green">
                auto_stories
              </span>
            </div>
            <h2>Smart School Library</h2>
          </div>

          {/* User Type */}
          <div>
            <label className="user-type-label">
              Select your user type
            </label>
            <div className="user-type-options">
              <input
                type="radio"
                id="librarian"
                name="userType"
                value="librarian"
                className="user-type-radio"
                checked={userType === "librarian"}
                onChange={(e) => setUserType(e.target.value)}
              />
              <label htmlFor="librarian">Librarian</label>

              <input
                type="radio"
                id="teacher"
                name="userType"
                value="teacher"
                className="user-type-radio"
                checked={userType === "teacher"}
                onChange={(e) => setUserType(e.target.value)}
              />
              <label htmlFor="teacher">Teacher</label>

              <input
                type="radio"
                id="student"
                name="userType"
                value="student"
                className="user-type-radio"
                checked={userType === "student"}
                onChange={(e) => setUserType(e.target.value)}
              />
              <label htmlFor="student">Student</label>
            </div>
          </div>

          {/* Inputs */}
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Registration"
            required
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Botão */}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
