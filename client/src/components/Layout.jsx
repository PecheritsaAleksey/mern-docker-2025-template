import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold tracking-wide">ToDo App</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ToDo App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
