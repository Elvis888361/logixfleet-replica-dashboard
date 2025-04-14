
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Activity, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Service: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateService = hasPermission('Vehicle', 'write');

  return (
    <DashboardLayout 
      title="Vehicle Service" 
      actions={
        canCreateService ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Schedule Service
          </Button>
        ) : null
      }
    >
      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Oil Change</h3>
                <p className="text-sm text-gray-500">Vehicle: Toyota Hilux (KBC 123A)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Completed: 2025-04-01</p>
              <p>Next Due: 2025-07-01</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <Activity className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium">Brake Service</h3>
                <p className="text-sm text-gray-500">Vehicle: Isuzu Truck (KCA 456B)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Scheduled: 2025-04-20</p>
              <p>Status: <span className="text-yellow-600">Pending</span></p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 mr-4">
                <Activity className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium">Engine Repair</h3>
                <p className="text-sm text-gray-500">Vehicle: Mercedes Actros (KDC 789C)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Scheduled: 2025-04-16</p>
              <p>Status: <span className="text-red-600">Urgent</span></p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Service;
