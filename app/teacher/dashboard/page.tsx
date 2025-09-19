"use client";
import { useState } from "react";
import Link from 'next/link';

export default function TeacherDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { href: "/teacher/dashboard", icon: "dashboard", label: "Dashboard", active: true },
    { href: "/teacher/search-books", icon: "search", label: "Search Books" },
    { href: "/teacher/search-authors", icon: "person_search", label: "Search Authors" },
    { href: "/teacher/loans", icon: "book", label: "My Loans" },
    { href: "/teacher/reading-suggestions", icon: "record_voice_over", label: "Teachers Reading Suggestions" },
    { href: "/teacher/my-suggestions", icon: "lightbulb", label: "My Reading Suggestions" },
    { href: "/teacher/create-suggestion", icon: "add_comment", label: "Create Reading Suggestion" },
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
            <h1 className="text-3xl font-extrabold text-gray-800">Welcome, Teacher!</h1>
            <p className="text-gray-500">Inspire, guide, and enrich your students reading journey.</p>
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
                <p className="font-semibold text-sm">Mr. João Silva</p>
                <p className="text-xs text-gray-500">Teacher</p>
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
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-blue">book</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Reading Suggestions Created</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-yellow">lightbulb</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Students Reached</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-green">group</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Favorite Authors</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-red">favorite</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Books Read This Month</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-blue">menu_book</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Days Until Return</p>
                <p className="text-2xl font-bold text-gray-900">10</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-smart-green">schedule</span>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/teacher/create-suggestion"
              className="bg-smart-blue text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-3xl">add_comment</span>
                <div>
                  <p className="font-semibold">Create Reading Suggestion</p>
                  <p className="text-sm opacity-90">Recommend books to your students</p>
                </div>
              </div>
            </Link>
            
            <Link
              href="/teacher/search-books"
              className="bg-smart-green text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-3xl">search</span>
                <div>
                  <p className="font-semibold">Search Books</p>
                  <p className="text-sm opacity-90">Find books for your curriculum</p>
                </div>
              </div>
            </Link>
            
            <Link
              href="/teacher/my-suggestions"
              className="bg-smart-yellow text-white p-6 rounded-lg shadow-md hover:bg-yellow-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
                <div>
                  <p className="font-semibold">My Suggestions</p>
                  <p className="text-sm opacity-90">Manage your reading suggestions</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Recent Reading Suggestions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Reading Suggestions</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-yellow">lightbulb</span>
                  <div>
                    <p className="font-medium">&apos;To Kill a Mockingbird&apos; for 9th Grade Literature</p>
                    <p className="text-sm text-gray-500">Created 2 days ago - 15 students viewed</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white bg-smart-green px-2 py-1 rounded-full">Active</span>
              </div>
            </div>
            
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-yellow">lightbulb</span>
                  <div>
                    <p className="font-medium">&apos;The Alchemist&apos; for Philosophy Class</p>
                    <p className="text-sm text-gray-500">Created 1 week ago - 23 students viewed</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white bg-smart-green px-2 py-1 rounded-full">Active</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-yellow">lightbulb</span>
                  <div>
                    <p className="font-medium">&apos;Sapiens&apos; for History Advanced Course</p>
                    <p className="text-sm text-gray-500">Created 2 weeks ago - 8 students viewed</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white bg-smart-blue px-2 py-1 rounded-full">Completed</span>
              </div>
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
                    <p className="font-medium">&apos;Pedagogy of the Oppressed&apos;</p>
                    <p className="text-sm text-gray-500">Due: March 20, 2024</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white bg-smart-green px-2 py-1 rounded-full">12 days left</span>
              </div>
            </div>
            
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-blue">menu_book</span>
                  <div>
                    <p className="font-medium">&apos;The Art of Teaching&apos;</p>
                    <p className="text-sm text-gray-500">Due: March 25, 2024</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white bg-smart-green px-2 py-1 rounded-full">17 days left</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-smart-blue">menu_book</span>
                  <div>
                    <p className="font-medium">&apos;Mindset: The New Psychology of Success&apos;</p>
                    <p className="text-sm text-gray-500">Due: April 1, 2024</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white bg-smart-green px-2 py-1 rounded-full">24 days left</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}