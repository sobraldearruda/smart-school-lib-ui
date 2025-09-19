"use client";

import { useState } from "react";
import Link from 'next/link';

export default function LibrarianDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { href: "/librarian/dashboard", icon: "dashboard", label: "Dashboard", active: true },
    { href: "/librarian/search-books", icon: "search", label: "Search Books" },
    { href: "/librarian/manage-books", icon: "menu_book", label: "Manage Books" },
    { href: "/librarian/search-authors", icon: "person_search", label: "Search Authors" },
    { href: "/librarian/manage-authors", icon: "group", label: "Manage Authors" },
    { href: "/librarian/loans", icon: "book", label: "My Loans" },
    { href: "/librarian/manage-loans", icon: "checklist", label: "Manage Loans" },
    { href: "/librarian/reading-suggestions", icon: "record_voice_over", label: "Teachers Reading Suggestions" },
    { href: "/librarian/manage-suggestions", icon: "lightbulb", label: "Manage Reading Suggestions" },
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
            <h1 className="text-3xl font-extrabold text-gray-800">Welcome, Librarian!</h1>
            <p className="text-gray-500">Manage the library with ease and efficiency.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-smart-blue"
                placeholder="Search for anything..."
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
                <p className="font-semibold text-sm">Ana Oliveira</p>
                <p className="text-xs text-gray-500">Librarian</p>
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
                <p className="text-sm font-medium text-gray-500">Total Books</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-blue">menu_book</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Loans</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-green">book</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Overdue Books</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-red">warning</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Authors</p>
                <p className="text-2xl font-bold text-gray-900">456</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-yellow">group</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Reading Suggestions</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-blue">lightbulb</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Available Books</p>
                <p className="text-2xl font-bold text-gray-900">1,145</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-green">check_circle</span>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-green">check_circle</span>
                  <div>
                    <p className="font-medium">Book returned: &apos;The Great Gatsby&apos;</p>
                    <p className="text-sm text-gray-500">by Student João Silva - 2 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-blue">book</span>
                  <div>
                    <p className="font-medium">New loan: &apos;1984&apos;</p>
                    <p className="text-sm text-gray-500">by Teacher Maria Santos - 15 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-yellow">lightbulb</span>
                  <div>
                    <p className="font-medium">New reading suggestion submitted</p>
                    <p className="text-sm text-gray-500">by Teacher Carlos Lima - 1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
