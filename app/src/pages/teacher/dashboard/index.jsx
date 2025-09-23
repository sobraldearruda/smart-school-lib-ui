import "./style.css";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="material-symbols-outlined">auto_stories</span>
          <span>Smart School Library</span>
        </div>

        <nav className="sidebar-nav">
          <Link to="/teacher/dashboard" className="sidebar-link active">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>

          <Link to="/teacher/search-books" className="sidebar-link">
            <span className="material-symbols-outlined">search</span>
            <span>Search Books</span>
          </Link>

          <Link to="/teacher/search-authors" className="sidebar-link">
            <span className="material-symbols-outlined">person_search</span>
            <span>Search Authors</span>
          </Link>

          <Link to="/teacher/my-loans" className="sidebar-link">
            <span className="material-symbols-outlined">book</span>
            <span>My Loans</span>
          </Link>

          <Link to="/teacher/teachers-reading-suggestions" className="sidebar-link">
            <span className="material-symbols-outlined">record_voice_over</span>
            <span>Teachers Reading Suggestions</span>
          </Link>

          <Link to="/teacher/my-reading-suggestions" className="sidebar-link">
            <span className="material-symbols-outlined">lightbulb</span>
            <span>My Reading Suggestions</span>
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
            <h1>Welcome, Teacher!</h1>
            <p>Inspire, guide, and enrich your students' reading journey.</p>
          </div>
        </header>
      </main>
    </div>
  );
}
