"use client"; // Mark this file as a client component

import { useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Modal from "@/components/Modal";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar open/close state

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close sidebar when needed
  };

  return (
    <html lang="en">
      <body
        className="bg-slate-100"
        style={{ fontFamily: `${geistSans.variable}, ${geistMono.variable}` }}
      >
        {/* Sidebar Toggle Button */}
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

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className="ml-20 transition-all duration-300 ease-in-out">
          {children} {/* Render child components */}
        </div>

        {/* Modal */}
        <Modal />
      </body>
    </html>
  );
}
