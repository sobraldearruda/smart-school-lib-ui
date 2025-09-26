import "./style.css";
import { Link } from "react-router-dom";

export default function StudentMyLoans() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="material-symbols-outlined">auto_stories</span>
          <span>Smart School Library</span>
        </div>

        <nav className="sidebar-nav">
          <Link to="/student/dashboard" className="sidebar-link">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>

          <Link to="/student/search-books" className="sidebar-link">
            <span className="material-symbols-outlined">search</span>
            <span>Search Books</span>
          </Link>

          <Link to="/student/search-authors" className="sidebar-link">
            <span className="material-symbols-outlined">person_search</span>
            <span>Search Authors</span>
          </Link>

          <Link to="/student/my-loans" className="sidebar-link active">
            <span className="material-symbols-outlined">book</span>
            <span>My Loans</span>
          </Link>

          <Link to="/student/teachers-reading-suggestions" className="sidebar-link">
            <span className="material-symbols-outlined">record_voice_over</span>
            <span>Teachers Reading Suggestions</span>
          </Link>
        </nav>

        <div className="sidebar-logout">
          <a href="/" className="sidebar-link">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        <header className="main-header">
          <div>
            <h1>My Loans</h1>
            <p>Manage your personal book loans easily.</p>
          </div>
        </header>

        {/* Cards de ações */}
        <section className="loan-cards">
          <div className="loan-card register">
            <span className="material-symbols-outlined loan-icon">add_circle</span>
            <h3>Register Loan</h3>
            <p>Create a new loan record for your books.</p>
            <button className="loan-action-btn register-btn">Register</button>
          </div>

          <div className="loan-card list">
            <span className="material-symbols-outlined loan-icon">list_alt</span>
            <h3>My Loans</h3>
            <p>View and track your registered loans.</p>
            <button className="loan-action-btn list-btn">View</button>
          </div>
        </section>
      </main>
    </div>
  );
}
