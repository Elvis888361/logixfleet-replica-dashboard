
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Package, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Inventory: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateInventory = hasPermission('Stock Entry', 'create');

  return (
    <DashboardLayout 
      title="Inventory" 
      actions={
        canCreateInventory ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Item
          </Button>
        ) : null
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Engine Oil</h3>
              <p className="text-sm text-gray-500">ID: INV001</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Quantity</p>
              <p>25 liters</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-green-600">In Stock</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Brake Pads</h3>
              <p className="text-sm text-gray-500">ID: INV002</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Quantity</p>
              <p>8 sets</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-green-600">In Stock</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-yellow-100 mr-4">
              <Package className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-medium">Air Filters</h3>
              <p className="text-sm text-gray-500">ID: INV003</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Quantity</p>
              <p>3 pcs</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-yellow-600">Low Stock</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Inventory;
