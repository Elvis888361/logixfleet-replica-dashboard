
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Insurance: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateInsurance = hasPermission('Vehicle', 'create');

  return (
    <DashboardLayout 
      title="Vehicle Insurance" 
      actions={
        canCreateInsurance ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Insurance
          </Button>
        ) : null
      }
    >
      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Comprehensive Insurance</h3>
                <p className="text-sm text-gray-500">Vehicle: Toyota Hilux (KBC 123A)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Expiry: 2025-12-31</p>
              <p>Status: <span className="text-green-600">Active</span></p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Commercial Insurance</h3>
                <p className="text-sm text-gray-500">Vehicle: Isuzu Truck (KCA 456B)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Expiry: 2025-08-15</p>
              <p>Status: <span className="text-green-600">Active</span></p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium">Commercial Insurance</h3>
                <p className="text-sm text-gray-500">Vehicle: Mercedes Actros (KDC 789C)</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Expiry: 2025-05-10</p>
              <p>Status: <span className="text-yellow-600">Expiring Soon</span></p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Insurance;
