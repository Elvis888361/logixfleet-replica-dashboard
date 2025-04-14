
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Building, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Vendors: React.FC = () => {
  const { hasPermission } = useAuth();
  const canCreateVendor = hasPermission('Supplier', 'create');

  return (
    <DashboardLayout 
      title="Vendors" 
      actions={
        canCreateVendor ? (
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Vendor
          </Button>
        ) : null
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Auto Parts Inc.</h3>
              <p className="text-sm text-gray-500">ID: VEN001</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Contact</p>
              <p>+1 234 567 8901</p>
            </div>
            <div>
              <p className="text-gray-500">Category</p>
              <p>Parts Supplier</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">ServiceMaster</h3>
              <p className="text-sm text-gray-500">ID: VEN002</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Contact</p>
              <p>+1 234 567 8902</p>
            </div>
            <div>
              <p className="text-gray-500">Category</p>
              <p>Service Provider</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">TireCo</h3>
              <p className="text-sm text-gray-500">ID: VEN003</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Contact</p>
              <p>+1 234 567 8903</p>
            </div>
            <div>
              <p className="text-gray-500">Category</p>
              <p>Tire Supplier</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Vendors;
