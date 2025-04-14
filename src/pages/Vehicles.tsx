
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Car, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Vehicles: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateVehicle = hasPermission('Vehicle', 'create');

  return (
    <DashboardLayout 
      title="Vehicles" 
      actions={
        canCreateVehicle ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Vehicle
          </Button>
        ) : null
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Vehicle #1</h3>
              <p className="text-sm text-gray-500">Toyota Hilux</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Reg Number</p>
              <p>KBC 123A</p>
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
              <Car className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Vehicle #2</h3>
              <p className="text-sm text-gray-500">Isuzu Truck</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Reg Number</p>
              <p>KCA 456B</p>
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
              <Car className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Vehicle #3</h3>
              <p className="text-sm text-gray-500">Mercedes Actros</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Reg Number</p>
              <p>KDC 789C</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-yellow-600">Maintenance</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Vehicles;
