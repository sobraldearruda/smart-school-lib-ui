import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TeacherSearchAuthors() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllAuthors = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3000/api/authors");
        if (!response.ok) throw new Error("Failed to fetch all authors.");

        const data = await response.json();
        setResults(data);
      } catch {
        setError("Could not load authors. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllAuthors();
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3000/api/authors");
        if (!response.ok) throw new Error("Failed to fetch all authors.");

        const data = await response.json();
        setResults(data);
      } catch {
        setError("Could not load authors. Please try again.");
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `http://localhost:3000/api/authors/${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setResults([]);
          setError("Author not found.");
        } else {
          throw new Error("Failed to fetch author.");
        }
        return;
      }

      const data = await response.json();
      setResults([data]);
    } catch {
      setError("Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

          <Link to="/teacher/search-authors" className="sidebar-link active">
            <span className="material-symbols-outlined">person_search</span>
            <span>Search Authors</span>
          </Link>

          <Link to="/teacher/my-loans" className="sidebar-link">
            <span className="material-symbols-outlined">book</span>
            <span>My Loans</span>
          </Link>

          <Link
            to="/teacher/teachers-reading-suggestions"
            className="sidebar-link">
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
            <h1>Search Authors</h1>
            <p>Find authors in the library collection.</p>
          </div>

          {/* 🔍 Barra de pesquisa */}
          <div className="search-bar">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter author name..."
            />
            <button className="search-button" onClick={handleSearch}>
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </header>

        {/* Resultado */}
        <section className="search-results">
          <h2>Results</h2>
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && !error && results.length === 0 && (
            <p>No authors available.</p>
          )}

          {!loading &&
            !error &&
            results.length > 0 &&
            results.map((author) => (
              <div className="result-item" key={author.bookId}>
                <strong> <br />{author.authorName}</strong> <br />
                Biography: {author.authorBiography} <br />
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}
