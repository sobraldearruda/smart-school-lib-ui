"use client";

import { useState } from "react";
import Link from 'next/link';

export default function LibrarianSearchBooks() {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { href: "/librarian/dashboard", icon: "dashboard", label: "Dashboard" },
    { href: "/librarian/search-books", icon: "search", label: "Search Books", active: true },
    { href: "/librarian/manage-books", icon: "menu_book", label: "Manage Books" },
    { href: "/librarian/search-authors", icon: "person_search", label: "Search Authors" },
    { href: "/librarian/manage-authors", icon: "group", label: "Manage Authors" },
    { href: "/librarian/loans", icon: "book", label: "My Loans" },
    { href: "/librarian/manage-loans", icon: "checklist", label: "Manage Loans" },
    { href: "/librarian/reading-suggestions", icon: "record_voice_over", label: "Teachers Reading Suggestions" },
    { href: "/librarian/manage-suggestions", icon: "lightbulb", label: "Manage Reading Suggestions" },
  ];

  const books = [
    {
      id: 1,
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      status: "Available",
      available: true
    },
    {
      id: 2,
      title: "Dom Casmurro",
      author: "Machado de Assis",
      status: "Available",
      available: true
    },
    {
      id: 3,
      title: "Iracema",
      author: "José de Alencar",
      status: "Borrowed",
      available: false
    },
    {
      id: 4,
      title: "Capitães da Areia",
      author: "Jorge Amado",
      status: "Available",
      available: true
    }
  ];

  const handleBorrow = (bookId: number) => {
    console.log(`Borrowing book with ID: ${bookId}`);
    // Implement borrow logic here
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center p-4 space-x-2 border-b">
          <span className="material-symbols-outlined text-3xl text-smart-blue">auto_stories</span>
          <span className="text-xl font-extrabold text-text-primary">Smart School Library</span>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                item.active
                  ? "text-gray-700 bg-gray-200"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="material-symbols-outlined mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        
        {/* Logout */}
        <div className="p-4 border-t">
          <Link
            href="/"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors"
          >
            <span className="material-symbols-outlined mr-3">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800">Search Books</h1>
            <p className="text-gray-500">Find your next favorite book.</p>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-4xl text-gray-400">account_circle</span>
            <div>
              <p className="font-semibold text-sm">Maria Oliveira</p>
              <p className="text-xs text-gray-500">Librarian</p>
            </div>
          </div>
        </header>
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              className="w-full pl-12 pr-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-smart-blue text-lg"
              placeholder="Search by title, author, or ISBN..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl">search</span>
          </div>
        </div>
        
        {/* Books List */}
        <div className="bg-white rounded-lg shadow">
          <ul className="divide-y divide-gray-200">
            {books.map((book) => (
              <li key={book.id} className="p-4 hover:bg-gray-50 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Book Cover Placeholder */}
                  <div className="w-16 h-24 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-gray-400 text-4xl">menu_book</span>
                  </div>
                  
                  {/* Book Info */}
                  <div>
                    <p className="font-bold text-lg text-gray-800">{book.title}</p>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <div className="flex items-center mt-2">
                      <span
                        className={`text-sm font-semibold text-white px-2 py-0.5 rounded-full ${
                          book.available ? "bg-smart-green" : "bg-smart-red"
                        }`}
                      >
                        {book.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Action Button */}
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    book.available
                      ? "bg-smart-blue text-white hover:bg-blue-600"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  disabled={!book.available}
                  onClick={() => book.available && handleBorrow(book.id)}
                >
                  {book.available ? "Borrow" : "Borrowed"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
