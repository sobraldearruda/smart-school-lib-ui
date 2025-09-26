import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TeacherUserTeachersReadingSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3000/api/reading-suggestions");
        if (!response.ok) throw new Error("Failed to fetch reading suggestions.");

        const data = await response.json();
        setSuggestions(data);
      } catch {
        setError("Could not load reading suggestions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="material-symbols-outlined">auto_stories</span>
          <span>Smart School Library</span>
        </div>

        <nav className="sidebar-nav">
          <Link to="/teacher/dashboard" className="sidebar-link">
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

          <Link
            to="/teacher/teachers-reading-suggestions" className="sidebar-link active">
            <span className="material-symbols-outlined">record_voice_over</span>
            <span>Teachers Reading Suggestions</span>
          </Link>

          <Link
            to="/teacher/my-reading-suggestions"
            className="sidebar-link">
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
            <h1>Teachers Reading Suggestions</h1>
            <p>Take a look at your teachers' suggestions.</p>
          </div>
        </header>

        {/* Resultado */}
        <section className="search-results">
          <h2>Suggestions</h2>
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && !error && suggestions.length === 0 && (
            <p>No reading suggestions available.</p>
          )}

          {!loading &&
            !error &&
            suggestions.length > 0 &&
            suggestions.map((sug) => (
              <div className="result-item" key={sug.readingSuggestionId}>
                <strong>Teacher:</strong> {sug.Teacher?.userName || "Unknown"} <br />
                <strong>Books:</strong>{" "}
                {sug.Books && sug.Books.length > 0
                  ? sug.Books.map((b) => b.bookTitle).join(", ")
                  : "No books linked"} <br />
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}
