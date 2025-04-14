
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Schedule: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateSchedule = hasPermission('Driver', 'write');

  return (
    <DashboardLayout 
      title="Vehicle Schedule" 
      actions={
        canCreateSchedule ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> New Schedule
          </Button>
        ) : null
      }
    >
      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Delivery Run</h3>
                <p className="text-sm text-gray-500">Vehicle: Toyota Hilux (KBC 123A)</p>
                <p className="text-sm text-gray-500">Driver: John Doe</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Date: 2025-04-15</p>
              <p>Time: 08:00 - 17:00</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Goods Transport</h3>
                <p className="text-sm text-gray-500">Vehicle: Isuzu Truck (KCA 456B)</p>
                <p className="text-sm text-gray-500">Driver: Jane Smith</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Date: 2025-04-16</p>
              <p>Time: 09:00 - 18:00</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium">Long Haul Delivery</h3>
                <p className="text-sm text-gray-500">Vehicle: Mercedes Actros (KDC 789C)</p>
                <p className="text-sm text-gray-500">Driver: Mike Johnson</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Date: 2025-04-18 - 2025-04-20</p>
              <p>Time: All Day</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Schedule;
