"use client"; // Mark this file as a client component

import { useState } from "react"; // Import useState hook
import localFont from "next/font/local"; // Import local font from Next.js
import "./globals.css"; // Import global CSS
import Sidebar from "@/components/Sidebar"; // Import Sidebar component
import Modal from "@/components/Modal"; // Import Modal component
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import the Bars3Icon and XMarkIcon

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// RootLayout component to manage layout and state
export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar state

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar open state
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close the sidebar
  };

  return (
    <html lang="en">
      <body
        className="bg-slate-100"
        style={{ fontFamily: `${geistSans.variable}, ${geistMono.variable}` }}
      >
        {/* Button to toggle sidebar visibility */}
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-7 left-4 z-[999] p-2 bg-custom-pink text-black rounded-full"
        >
          {isSidebarOpen ? (
            <XMarkIcon className="h-6 w-6" /> // Show close icon when sidebar is open
          ) : (
            <Bars3Icon className="h-6 w-6" /> // Show hamburger icon when sidebar is closed
          )}
        </button>

        {/* Sidebar with toggle functionality */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className={`ml-20 transition-all duration-300 ease-in-out`}>
          {children} {/* Render the page components */}
        </div>

        {/* Modal should be part of the main layout */}
        <Modal />
      </body>
    </html>
  );
}
