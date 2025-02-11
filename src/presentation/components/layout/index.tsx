'use client';

import React, { useState } from 'react';

import { Header } from './header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col w-full">
        <Header 
          toggleSidebar={toggleSidebar} 
        />

        <main className="flex-1 px-4 py-6 mt-16 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};
