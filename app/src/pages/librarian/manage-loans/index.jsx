import "./style.css";
import { Link } from "react-router-dom";

export default function LibrarianManageLoans() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="material-symbols-outlined">auto_stories</span>
          <span>Smart School Library</span>
        </div>

        <nav className="sidebar-nav">
          <Link to="/librarian/dashboard" className="sidebar-link">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>

          <Link to="/librarian/search-books" className="sidebar-link">
            <span className="material-symbols-outlined">search</span>
            <span>Search Books</span>
          </Link>

          <Link to="/librarian/manage-books" className="sidebar-link">
            <span className="material-symbols-outlined">menu_book</span>
            <span>Manage Books</span>
          </Link>

          <Link to="/librarian/search-authors" className="sidebar-link">
            <span className="material-symbols-outlined">person_search</span>
            <span>Search Authors</span>
          </Link>

          <Link to="/librarian/manage-authors" className="sidebar-link">
            <span className="material-symbols-outlined">group</span>
            <span>Manage Authors</span>
          </Link>

          <Link to="/librarian/my-loans" className="sidebar-link">
            <span className="material-symbols-outlined">book</span>
            <span>My Loans</span>
          </Link>

          <Link to="/librarian/manage-loans" className="sidebar-link active">
            <span className="material-symbols-outlined">checklist</span>
            <span>Manage Loans</span>
          </Link>

          <Link to="/librarian/teachers-reading-suggestions" className="sidebar-link">
            <span className="material-symbols-outlined">record_voice_over</span>
            <span>Teachers Reading Suggestions</span>
          </Link>

          <Link to="/librarian/manage-reading-suggestions" className="sidebar-link">
            <span className="material-symbols-outlined">lightbulb</span>
            <span>Manage Reading Suggestions</span>
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
            <h1>Manage Loans</h1>
            <p>Manage your library loans easily.</p>
          </div>
        </header>

        {/* Cards de ações */}
        <section className="loan-cards">
          <div className="loan-card register">
            <span className="material-symbols-outlined loan-icon">add_circle</span>
            <h3>Register Loans</h3>
            <p>Create a loan record for your school public.</p>
            <button className="loan-action-btn register-btn">Register</button>
          </div>

          <div className="loan-card register">
            <span className="material-symbols-outlined loan-icon">update</span>
            <h3>Update Loans</h3>
            <p>Update a loan record from your school public.</p>
            <button className="loan-action-btn register-btn">Update</button>
          </div>

          <div className="loan-card list">
            <span className="material-symbols-outlined loan-icon">list_alt</span>
            <h3>View Loans</h3>
            <p>View and track all loans from your school public.</p>
            <button className="loan-action-btn list-btn">View</button>
          </div>

          <div className="loan-card list">
            <span className="material-symbols-outlined loan-icon">delete</span>
            <h3>Remove Loans</h3>
            <p>Remove a loan record once it is done completely.</p>
            <button className="loan-action-btn list-btn">Remove</button>
          </div>
        </section>
      </main>
    </div>
  );
}
