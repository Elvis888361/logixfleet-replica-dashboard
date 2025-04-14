
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Users as UsersIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Users: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateUser = hasPermission('User', 'create');

  return (
    <DashboardLayout 
      title="Users" 
      actions={
        canCreateUser ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add User
          </Button>
        ) : null
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <UsersIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">John Admin</h3>
              <p className="text-sm text-gray-500">admin@logixfleet.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Role</p>
              <p>Administrator</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-green-600">Active</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <UsersIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Sarah Manager</h3>
              <p className="text-sm text-gray-500">manager@logixfleet.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Role</p>
              <p>Fleet Manager</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-green-600">Active</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-gray-100 mr-4">
              <UsersIcon className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium">Mark Support</h3>
              <p className="text-sm text-gray-500">support@logixfleet.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Role</p>
              <p>Support Team</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-gray-600">Inactive</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Users;
