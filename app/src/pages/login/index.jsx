import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [registration, setRegistration] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      if (!userType) {
        throw new Error("Please, select your user type.");
      }

      const response = await fetch(`http://localhost:3000/api/${userType}s/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registration, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login. Please try again.");
      }

      const data = await response.json();
      console.log("Welcome to Smart School Library.", data);
      
      if (userType === "librarian") {
        navigate("/librarian/dashboard");
      } else if (userType === "teacher") {
        navigate("/teacher/dashboard");
      } else {
        navigate("/student/dashboard");
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="register-form-container">
      <div className="register-form-box">
        <form onSubmit={handleLogin}>
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
            <label className="user-type-label">Select your user type</label>
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
            type="registration"
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
