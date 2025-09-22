import "./style.css";

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
          <a href="#" className="sidebar-link active">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </a>
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
            <p>Explore, learn, and grow with our library.</p>
          </div>
        </header>
      </main>
    </div>
  );
}
