"use client";

import Image from "next/image";
import Link from 'next/link';

export default function Home() {
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
            Your school library, simpler and more interactive
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white/20 backdrop-blur-md py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-200/20">
            <div className="space-y-6">
              <Link 
                href="/login" 
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-smart-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smart-blue transition ease-in-out duration-150"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-smart-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smart-green transition ease-in-out duration-150"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
