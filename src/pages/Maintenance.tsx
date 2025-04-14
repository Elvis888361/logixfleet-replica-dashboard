
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Wrench, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Maintenance: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateMaintenance = hasPermission('Maintenance Schedule', 'create');

  return (
    <DashboardLayout 
      title="Maintenance Schedule" 
      actions={
        canCreateMaintenance ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Schedule Maintenance
          </Button>
        ) : null
      }
    >
      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Routine Maintenance</h3>
                <p className="text-sm text-gray-500">Vehicle: Toyota Hilux (KBC 123A)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Due: 2025-05-15</p>
              <p>Status: <span className="text-blue-600">Scheduled</span></p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <Wrench className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium">Tire Replacement</h3>
                <p className="text-sm text-gray-500">Vehicle: Isuzu Truck (KCA 456B)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Due: 2025-04-25</p>
              <p>Status: <span className="text-yellow-600">Due Soon</span></p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 mr-4">
                <Wrench className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium">Engine Overhaul</h3>
                <p className="text-sm text-gray-500">Vehicle: Mercedes Actros (KDC 789C)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Due: 2025-04-18</p>
              <p>Status: <span className="text-red-600">Overdue</span></p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Maintenance;
