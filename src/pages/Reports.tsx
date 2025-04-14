
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { BarChart4, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Reports: React.FC = () => {
  return (
    <DashboardLayout 
      title="Reports" 
      actions={null}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <BarChart4 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Vehicle Performance</h3>
              <p className="text-sm text-gray-500">Fuel efficiency, maintenance costs</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Expense Report</h3>
              <p className="text-sm text-gray-500">Monthly expenses breakdown</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <BarChart4 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium">Driver Analysis</h3>
              <p className="text-sm text-gray-500">Performance metrics</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-yellow-100 mr-4">
              <FileText className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-medium">Maintenance History</h3>
              <p className="text-sm text-gray-500">Complete vehicle service records</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-red-100 mr-4">
              <BarChart4 className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-medium">Issue Trends</h3>
              <p className="text-sm text-gray-500">Common vehicle problems</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-indigo-100 mr-4">
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium">Inventory Status</h3>
              <p className="text-sm text-gray-500">Stock levels and usage</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
