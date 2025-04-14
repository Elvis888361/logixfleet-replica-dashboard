
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, 
  Users, 
  Car, 
  FileText,
  Settings,
  ChevronDown, 
  ChevronRight,
  ShieldCheck,
  Activity,
  Truck
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Logo from './Logo';

interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  permissions?: { doctype: string; permission: string };
  submenu?: MenuItem[];
  isCollapsed?: boolean;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { hasPermission } = useAuth();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: 'Users',
      path: '/users',
      icon: <Users size={18} />,
      permissions: { doctype: 'User', permission: 'read' },
    },
    {
      name: 'Vehicles',
      path: '/vehicles',
      icon: <Car size={18} />,
      permissions: { doctype: 'Vehicle', permission: 'read' },
      isCollapsed: true,
      submenu: [
        {
          name: 'All Vehicles',
          path: '/vehicles',
          icon: <Car size={18} />,
          permissions: { doctype: 'Vehicle', permission: 'read' },
        },
        {
          name: 'Inspections',
          path: '/inspections',
          icon: <ShieldCheck size={18} />,
          permissions: { doctype: 'Vehicle Inspection', permission: 'read' },
        },
        {
          name: 'Insurance',
          path: '/insurance',
          icon: <FileText size={18} />,
          permissions: { doctype: 'Vehicle', permission: 'read' },
        },
        {
          name: 'Service',
          path: '/service',
          icon: <Activity size={18} />,
          permissions: { doctype: 'Vehicle', permission: 'read' },
        },
      ],
    },
    {
      name: 'Drivers',
      path: '/drivers',
      icon: <Truck size={18} />,
      permissions: { doctype: 'Driver', permission: 'read' },
    },
    {
      name: 'Reports',
      path: '/reports',
      icon: <FileText size={18} />,
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: <Settings size={18} />,
    },
  ]);

  const toggleSubmenu = (index: number) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index].isCollapsed = !newMenuItems[index].isCollapsed;
    setMenuItems(newMenuItems);
  };

  return (
    <div className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b">
        <Logo />
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            // Skip rendering if user doesn't have required permissions
            if (
              item.permissions && 
              !hasPermission(item.permissions.doctype, item.permissions.permission)
            ) {
              return null;
            }

            return (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className={`nav-link w-full justify-between ${
                        location.pathname.startsWith(item.path) ? 'active' : ''
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {item.icon}
                        {item.name}
                      </span>
                      {item.isCollapsed ? (
                        <ChevronRight size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    
                    {!item.isCollapsed && (
                      <div className="sidebar-submenu">
                        {item.submenu.map((subItem) => {
                          if (
                            subItem.permissions && 
                            !hasPermission(subItem.permissions.doctype, subItem.permissions.permission)
                          ) {
                            return null;
                          }

                          return (
                            <NavLink
                              key={subItem.name}
                              to={subItem.path}
                              className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                              }
                            >
                              <span className="flex items-center gap-3">
                                {subItem.icon}
                                {subItem.name}
                              </span>
                            </NavLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    <span className="flex items-center gap-3">
                      {item.icon}
                      {item.name}
                    </span>
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
