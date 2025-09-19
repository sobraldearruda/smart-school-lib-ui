"use client";
import { useState } from "react";
import Link from 'next/link';

export default function StudentDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { href: "/student/dashboard", icon: "dashboard", label: "Dashboard", active: true },
    { href: "/student/search-books", icon: "search", label: "Search Books" },
    { href: "/student/search-authors", icon: "person_search", label: "Search Authors" },
    { href: "/student/loans", icon: "book", label: "My Loans" },
    { href: "/student/reading-suggestions", icon: "record_voice_over", label: "Teachers Reading Suggestions" },
  ];

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
            <h1 className="text-3xl font-extrabold text-gray-800">Welcome, Student!</h1>
            <p className="text-gray-500">Explore, learn, and grow with our library.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-smart-blue"
                placeholder="Search for books..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            </div>
            
            {/* User Profile */}
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-4xl text-gray-400">account_circle</span>
              <div>
                <p className="font-semibold text-sm">Maria Clara</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Books Borrowed</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-blue">book</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Books Read</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-green">check_circle</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Overdue Books</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-red">warning</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Favorite Authors</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-yellow">favorite</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Reading Suggestions</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-blue">lightbulb</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Days Until Return</p>
                <p className="text-2xl font-bold text-gray-900">7</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-green">schedule</span>
            </div>
          </div>
        </div>
        
        {/* Current Loans */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Current Loans</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-blue">menu_book</span>
                  <div>
                    <p className="font-medium">&apos;The Great Gatsby&apos;</p>
                    <p className="text-sm text-gray-500">Due: March 15, 2024</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white bg-smart-green px-2 py-1 rounded-full">7 days left</span>
              </div>
            </div>
            
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-blue">menu_book</span>
                  <div>
                    <p className="font-medium">&apos;1984&apos;</p>
                    <p className="text-sm text-gray-500">Due: March 20, 2024</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white bg-smart-green px-2 py-1 rounded-full">12 days left</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-blue">menu_book</span>
                  <div>
                    <p className="font-medium">&apos;Dom Casmurro&apos;</p>
                    <p className="text-sm text-gray-500">Due: March 25, 2024</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white bg-smart-green px-2 py-1 rounded-full">17 days left</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reading Suggestions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Reading Suggestions from Teachers</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-yellow">lightbulb</span>
                  <div>
                    <p className="font-medium">&apos;To Kill a Mockingbird&apos;</p>
                    <p className="text-sm text-gray-500">Suggested by: Prof. Maria Santos - Literature</p>
                  </div>
                </div>
                <button className="bg-smart-blue text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-yellow">lightbulb</span>
                  <div>
                    <p className="font-medium">&apos;The Alchemist&apos;</p>
                    <p className="text-sm text-gray-500">Suggested by: Prof. Carlos Lima - Philosophy</p>
                  </div>
                </div>
                <button className="bg-smart-blue text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-yellow">lightbulb</span>
                  <div>
                    <p className="font-medium">&apos;Sapiens&apos;</p>
                    <p className="text-sm text-gray-500">Suggested by: Prof. Ana Costa - History</p>
                  </div>
                </div>
                <button className="bg-smart-blue text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}