import { useNavigate } from "react-router-dom";
import "./style.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-box">
        {/* Logo e título */}
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
          <h2 className="homepage-title">Smart School Library</h2>
          <p className="homepage-subtitle">
            Your school library, simpler and more interactive.
          </p>
        </div>

        {/* Botões de ação */}
        <div className="homepage-actions">
          <button className="btn-login" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn-register" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
