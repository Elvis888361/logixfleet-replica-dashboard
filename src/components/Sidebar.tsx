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
  Truck,
  AlertTriangle,
  Package,
  Wrench,
  Building,
  Calendar,
  BarChart4
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Logo from './Logo';

interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  permissions?: { doctype: string; permission: string };
  module?: string;
  submenu?: MenuItem[];
  isCollapsed?: boolean;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { hasPermission, hasModule } = useAuth();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <LayoutDashboard size={18} />,
      module: 'Dashboard',
    },
    {
      name: 'Users',
      path: '/users',
      icon: <Users size={18} />,
      permissions: { doctype: 'User', permission: 'read' },
      module: 'Logix',
    },
    {
      name: 'Vehicles',
      path: '/vehicles',
      icon: <Car size={18} />,
      permissions: { doctype: 'Vehicle', permission: 'read' },
      module: 'Fleet Management',
      isCollapsed: true,
      submenu: [
        {
          name: 'All Vehicles',
          path: '/vehicles',
          icon: <Car size={18} />,
          permissions: { doctype: 'Vehicle', permission: 'read' },
          module: 'Fleet Management',
        },
        {
          name: 'Inspections',
          path: '/inspections',
          icon: <ShieldCheck size={18} />,
          permissions: { doctype: 'Vehicle Inspection', permission: 'read' },
          module: 'Fleet Management',
        },
        {
          name: 'Insurance',
          path: '/insurance',
          icon: <FileText size={18} />,
          permissions: { doctype: 'Vehicle', permission: 'read' },
          module: 'Fleet Management',
        },
        {
          name: 'Service',
          path: '/service',
          icon: <Activity size={18} />,
          permissions: { doctype: 'Vehicle', permission: 'read' },
          module: 'Fleet Management',
        },
      ],
    },
    {
      name: 'Drivers',
      path: '/drivers',
      icon: <Truck size={18} />,
      permissions: { doctype: 'Driver', permission: 'read' },
      module: 'Fleet Management',
    },
    {
      name: 'Issues',
      path: '/issues',
      icon: <AlertTriangle size={18} />,
      permissions: { doctype: 'Issue', permission: 'read' },
      module: 'Fleet Management',
    },
    {
      name: 'Inventory',
      path: '/inventory',
      icon: <Package size={18} />,
      permissions: { doctype: 'Stock Entry', permission: 'read' },
      module: 'Fleet Management',
    },
    {
      name: 'Maintenance',
      path: '/maintenance',
      icon: <Wrench size={18} />,
      permissions: { doctype: 'Maintenance Schedule', permission: 'read' },
      module: 'Fleet Management',
    },
    {
      name: 'Vendors',
      path: '/vendors',
      icon: <Building size={18} />,
      permissions: { doctype: 'Supplier', permission: 'read' },
      module: 'Logix',
    },
    {
      name: 'Schedule',
      path: '/schedule',
      icon: <Calendar size={18} />,
      module: 'Fleet Management',
    },
    {
      name: 'Reports',
      path: '/reports',
      icon: <BarChart4 size={18} />,
      module: 'Reports',
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: <Settings size={18} />,
      module: 'Logix',
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
            const hasRequiredPermission = !item.permissions || 
              hasPermission(item.permissions.doctype, item.permissions.permission);
            
            const hasRequiredModule = !item.module || hasModule(item.module);
            
            if (!hasRequiredPermission || !hasRequiredModule) {
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
                          const hasSubPermission = !subItem.permissions || 
                            hasPermission(subItem.permissions.doctype, subItem.permissions.permission);
                          
                          const hasSubModule = !subItem.module || hasModule(subItem.module);
                          
                          if (!hasSubPermission || !hasSubModule) {
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
