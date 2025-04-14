
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useAuth } from '@/contexts/AuthContext';

interface DashboardLayoutProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ title, children, actions }) => {
  const { userData } = useAuth();
  
  const firstLetter = userData?.user ? userData.user.charAt(0).toUpperCase() : 'U';
  const userName = userData?.user?.split('@')[0] || 'User';

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Logix Fleet Management System" />
        
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-semibold">{title}</h1>
                {title === 'Dashboard' && <p className="text-gray-500">Welcome back, {userName}!</p>}
              </div>
              {actions && <div>{actions}</div>}
            </div>
            {children}
          </div>
        </div>
        
        <div className="bg-white border-t p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              {firstLetter}
            </div>
            <div>
              <p className="text-sm">{userName}</p>
              <p className="text-xs text-gray-500">Fleet Manager</p>
            </div>
          </div>
          
          <button 
            className="text-red-500 flex items-center gap-1 text-sm" 
            onClick={() => console.log('Sign out')}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
              />
            </svg>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
