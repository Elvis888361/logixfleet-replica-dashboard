
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Plus, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Inspections: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateInspection = hasPermission('Vehicle Inspection', 'create');

  return (
    <DashboardLayout 
      title="Vehicle Inspections" 
      actions={
        canCreateInspection ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> New Inspection
          </Button>
        ) : null
      }
    >
      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Pre-Trip Inspection</h3>
                <p className="text-sm text-gray-500">Vehicle: Toyota Hilux (KBC 123A)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Date: 2025-04-12</p>
              <p>Status: <span className="text-green-600">Passed</span></p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Monthly Inspection</h3>
                <p className="text-sm text-gray-500">Vehicle: Isuzu Truck (KCA 456B)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Date: 2025-04-10</p>
              <p>Status: <span className="text-green-600">Passed</span></p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 mr-4">
                <ShieldCheck className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium">Pre-Trip Inspection</h3>
                <p className="text-sm text-gray-500">Vehicle: Mercedes Actros (KDC 789C)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Date: 2025-04-14</p>
              <p>Status: <span className="text-red-600">Failed</span></p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Inspections;
