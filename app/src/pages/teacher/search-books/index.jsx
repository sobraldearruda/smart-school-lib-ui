import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TeacherSearchBooks() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3000/api/books");
        if (!response.ok) throw new Error("Failed to fetch all books.");

        const data = await response.json();
        setResults(data);
      } catch {
        setError("Could not load books. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllBooks();
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3000/api/books");
        if (!response.ok) throw new Error("Failed to fetch all books.");

        const data = await response.json();
        setResults(data);
      } catch {
        setError("Could not load books. Please try again.");
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `http://localhost:3000/api/books/${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setResults([]);
          setError("Book not found.");
        } else {
          throw new Error("Failed to fetch book.");
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

          <Link to="/teacher/search-books" className="sidebar-link active">
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
            to="/teacher/teachers-reading-suggestions"
            className="sidebar-link">
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
            <h1>Search Books</h1>
            <p>Find books in the library collection.</p>
          </div>

          {/* 🔍 Barra de pesquisa */}
          <div className="search-bar">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter book title..."
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
            <p>No books available.</p>
          )}

          {!loading &&
            !error &&
            results.length > 0 &&
            results.map((book) => (
              <div className="result-item" key={book.bookId}>
                <strong> <br />{book.bookTitle}</strong> <br />
                Authors: {book.Authors && book.Authors.length > 0 
                    ? book.Authors.map((a) => a.authorName).join(", ") 
                    : "No authors"} <br />
                ISBN: {book.bookIsbn} <br />
                Published: {book.bookPublicationYear} <br />
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}
