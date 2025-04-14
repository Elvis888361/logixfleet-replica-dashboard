
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Plus, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Drivers: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateDriver = hasPermission('Driver', 'create');

  return (
    <DashboardLayout 
      title="Drivers" 
      actions={
        canCreateDriver ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Driver
          </Button>
        ) : null
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium">John Doe</h3>
              <p className="text-sm text-gray-500">ID: DRV001</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Phone</p>
              <p>+1 234 567 8901</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-green-600">Available</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium">Jane Smith</h3>
              <p className="text-sm text-gray-500">ID: DRV002</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Phone</p>
              <p>+1 234 567 8902</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-green-600">Available</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium">Mike Johnson</h3>
              <p className="text-sm text-gray-500">ID: DRV003</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Phone</p>
              <p>+1 234 567 8903</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-yellow-600">On Leave</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Drivers;
