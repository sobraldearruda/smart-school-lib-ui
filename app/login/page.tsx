"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api";
import Link from 'next/link';
import Image from "next/image";

export default function LoginPage() {
  const [userType, setUserType] = useState("");
  const [registration, setRegistration] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const endpoint =
      userType === "librarian"
        ? "/librarians/login"
        : userType === "teacher"
        ? "/teachers/login"
        : "/students/login";

      const data = await apiFetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ registration, password }),
      });

      console.log("Login bem-sucedido", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("userType", data.userType);
      
      if (userType === "librarian") {
        window.location.href = "/librarian/dashboard";
      } else if (userType === "teacher") {
        window.location.href = "/teacher/dashboard";
      } else {
        window.location.href = "/student/dashboard";
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          alt="Library bookshelf with a closer view of books"
          className="h-full w-full object-cover"
          src="/books.jpg"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
        {/* Header */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* Logo Icons */}
          <div className="flex justify-center items-center mb-4 space-x-2">
            <span className="material-symbols-outlined text-6xl" style={{ color: "var(--color-blue)" }}>
              auto_stories
            </span>
            <span className="material-symbols-outlined text-6xl" style={{ color: "var(--color-yellow)" }}>
              auto_stories
            </span>
            <span className="material-symbols-outlined text-6xl" style={{ color: "var(--color-red)" }}>
              auto_stories
            </span>
            <span className="material-symbols-outlined text-6xl" style={{ color: "var(--color-green)" }}>
              auto_stories
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-center text-4xl font-extrabold text-white">
            Smart School Library
          </h1>
          <p className="mt-2 text-center text-lg text-gray-200">
            Welcome back! Please login to your account.
          </p>
        </div>
        
        {/* Login Form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white/20 backdrop-blur-md py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-200/20">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-medium text-white mb-2 text-center">
                  Select your user type
                </label>
                <div className="flex justify-center space-x-2">
                  <input
                    checked={userType === "librarian"}
                    className="hidden user-type-radio"
                    id="librarian"
                    name="user_type"
                    type="radio"
                    value="librarian"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label
                    className={`cursor-pointer text-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
                      userType === "librarian"
                        ? "bg-smart-blue text-white border-smart-blue"
                        : "text-white hover:bg-blue-500 hover:text-white"
                    }`}
                    htmlFor="librarian"
                  >
                    Librarian
                  </label>
                  
                  <input
                    checked={userType === "teacher"}
                    className="hidden user-type-radio"
                    id="teacher"
                    name="user_type"
                    type="radio"
                    value="teacher"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label
                    className={`cursor-pointer text-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
                      userType === "teacher"
                        ? "bg-smart-blue text-white border-smart-blue"
                        : "text-white hover:bg-blue-500 hover:text-white"
                    }`}
                    htmlFor="teacher"
                  >
                    Teacher
                  </label>
                  
                  <input
                    checked={userType === "student"}
                    className="hidden user-type-radio"
                    id="student"
                    name="user_type"
                    type="radio"
                    value="student"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label
                    className={`cursor-pointer text-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
                      userType === "student"
                        ? "bg-smart-blue text-white border-smart-blue"
                        : "text-white hover:bg-blue-500 hover:text-white"
                    }`}
                    htmlFor="student"
                  >
                    Student
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white" htmlFor="registration">
                  Registration
                </label>
                <div className="mt-1">
                  <input
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:border-smart-blue focus:outline-none focus:ring-smart-blue sm:text-sm"
                    id="registration"
                    name="registration"
                    required
                    type="text"
                    value={registration}
                    onChange={(e) => setRegistration(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white" htmlFor="password">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="current-password"
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:border-smart-blue focus:outline-none focus:ring-smart-blue sm:text-sm"
                    id="password"
                    name="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>              
              
              <div>
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-smart-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smart-blue transition ease-in-out duration-150"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            
            <div className="mt-6">
              <p className="text-center text-sm text-gray-200">
                Don&#39;t have an account?{' '}
                <Link className="font-medium text-white hover:text-gray-100 underline" href="/register">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
