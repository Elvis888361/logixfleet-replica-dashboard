
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Issues: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateIssue = hasPermission('Issue', 'create');

  return (
    <DashboardLayout 
      title="Vehicle Issues" 
      actions={
        canCreateIssue ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Report Issue
          </Button>
        ) : null
      }
    >
      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 mr-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium">Engine Overheating</h3>
                <p className="text-sm text-gray-500">Vehicle: Toyota Hilux (KBC 123A)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Reported: 2025-04-13</p>
              <p>Priority: <span className="text-red-600">High</span></p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium">Brake Noise</h3>
                <p className="text-sm text-gray-500">Vehicle: Isuzu Truck (KCA 456B)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Reported: 2025-04-12</p>
              <p>Priority: <span className="text-yellow-600">Medium</span></p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Oil Leak</h3>
                <p className="text-sm text-gray-500">Vehicle: Mercedes Actros (KDC 789C)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Reported: 2025-04-10</p>
              <p>Priority: <span className="text-blue-600">Low</span></p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Issues;
