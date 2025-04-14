
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Activity, ArrowRight, Calendar, Car, Clock, FileText, UserCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  color, 
  icon 
}: { 
  title: string; 
  value: string | number; 
  subtitle: string; 
  color: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className={`stat-card border-l-4 border-l-${color}`}>
      <div className="absolute top-5 right-5 text-gray-400">
        {icon}
      </div>
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <div className="stat-number">{value}</div>
      <div className="stat-subtitle">{subtitle}</div>
    </Card>
  );
};

const ActionCard = ({ 
  title, 
  icon, 
  onClick,
  disabled = false
}: { 
  title: string; 
  icon: React.ReactNode; 
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <Card 
      className={`action-card ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={disabled ? undefined : onClick}
    >
      <div className="p-3 rounded-full bg-gray-100 mb-3">
        {icon}
      </div>
      <p className="font-medium">{title}</p>
    </Card>
  );
};

const ActivityItem = ({ 
  title, 
  time 
}: { 
  title: string; 
  time: string;
}) => {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
      <div>
        <p className="font-medium">{title}</p>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <Clock size={14} />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

const MaintenanceItem = ({ 
  vehicle, 
  service, 
  status, 
  date 
}: { 
  vehicle: string; 
  service: string; 
  status: 'Urgent' | 'Normal'; 
  date: string;
}) => {
  return (
    <div className="item-row">
      <div className="mr-3">
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
          <Car size={16} className="text-blue-500" />
        </div>
      </div>
      <div className="flex-1">
        <p className="font-medium">{vehicle}</p>
        <p className="text-sm text-gray-500">{service}</p>
      </div>
      {status === 'Urgent' ? (
        <div className="status-badge urgent">Urgent</div>
      ) : (
        <div className="text-sm text-gray-500">{date}</div>
      )}
    </div>
  );
};

const PurchaseItem = ({ 
  po, 
  item, 
  amount 
}: { 
  po: string; 
  item: string; 
  amount: string;
}) => {
  return (
    <div className="item-row">
      <div className="mr-3">
        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
          <FileText size={16} className="text-green-500" />
        </div>
      </div>
      <div className="flex-1">
        <p className="font-medium">{po}</p>
        <p className="text-sm text-gray-500">{item}</p>
      </div>
      <div className="font-semibold">{amount}</div>
    </div>
  );
};

const InspectionItem = ({ 
  vehicle, 
  type, 
  days 
}: { 
  vehicle: string; 
  type: string; 
  days: string;
}) => {
  return (
    <div className="item-row">
      <div className="mr-3">
        <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
          <Activity size={16} className="text-yellow-500" />
        </div>
      </div>
      <div className="flex-1">
        <p className="font-medium">{vehicle}</p>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      <div className="text-sm text-gray-500">{days}</div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const { hasPermission } = useAuth();
  
  const canCreateVehicle = hasPermission('Vehicle', 'create');
  const canCreateDriver = hasPermission('Driver', 'create');

  const dashboardActions = [
    {
      title: 'Reports',
      icon: <FileText size={24} className="text-logix-blue" />,
      onClick: () => console.log('Navigate to reports'),
      requiresPermission: false,
    },
    {
      title: 'Add Driver',
      icon: <UserCheck size={24} className="text-purple-500" />,
      onClick: () => console.log('Add driver'),
      requiresPermission: true,
      permission: canCreateDriver,
    },
    {
      title: 'Schedule',
      icon: <Calendar size={24} className="text-green-500" />,
      onClick: () => console.log('Schedule'),
      requiresPermission: false,
    },
    {
      title: 'Add Vehicle',
      icon: <Car size={24} className="text-blue-500" />,
      onClick: () => console.log('Add vehicle'),
      requiresPermission: true,
      permission: canCreateVehicle,
    },
  ];

  return (
    <DashboardLayout 
      title="Dashboard" 
      actions={
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" /> Reports
          </Button>
          <Button className="bg-logix-blue hover:bg-blue-700">
            <Activity className="mr-2 h-4 w-4" /> Overview
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total Vehicles" 
          value="24" 
          subtitle="+2 since last month" 
          color="logix-blue"
          icon={<Car size={24} />}
        />
        <StatCard 
          title="Active Drivers" 
          value="18" 
          subtitle="All drivers available" 
          color="logix-green"
          icon={<UserCheck size={24} />}
        />
        <StatCard 
          title="Maintenance Due" 
          value="3" 
          subtitle="Requires attention" 
          color="logix-yellow"
          icon={<Activity size={24} />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Activity size={20} className="text-logix-blue mr-2" /> Recent Activity
            </h2>
          </div>
          <div className="divide-y">
            <ActivityItem 
              title="Vehicle #1 completed maintenance" 
              time="2 hours ago" 
            />
            <ActivityItem 
              title="Vehicle #2 completed maintenance" 
              time="2 hours ago" 
            />
            <ActivityItem 
              title="Vehicle #3 completed maintenance" 
              time="2 hours ago" 
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="ghost" className="text-logix-blue">
              View all activities <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {dashboardActions.map((action, index) => (
              <React.Fragment key={index}>
                {!action.requiresPermission || (action.requiresPermission && action.permission) ? (
                  <ActionCard 
                    title={action.title} 
                    icon={action.icon} 
                    onClick={action.onClick} 
                  />
                ) : (
                  <ActionCard 
                    title={action.title} 
                    icon={action.icon} 
                    onClick={() => {}} 
                    disabled={true}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Clock size={20} className="text-logix-blue mr-2" /> Upcoming Maintenance
            </h2>
          </div>
          <div className="space-y-2">
            <MaintenanceItem 
              vehicle="Vehicle #1" 
              service="Oil Change" 
              status="Urgent" 
              date="" 
            />
            <MaintenanceItem 
              vehicle="Vehicle #2" 
              service="Oil Change" 
              status="Normal" 
              date="In 2 days" 
            />
            <MaintenanceItem 
              vehicle="Vehicle #3" 
              service="Oil Change" 
              status="Normal" 
              date="In 3 days" 
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="ghost" className="text-logix-blue">
              View schedule <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <FileText size={20} className="text-green-500 mr-2" /> Recent Purchases
            </h2>
          </div>
          <div className="space-y-2">
            <PurchaseItem 
              po="PO-1001" 
              item="Spare Parts" 
              amount="$100.00" 
            />
            <PurchaseItem 
              po="PO-1002" 
              item="Spare Parts" 
              amount="$200.00" 
            />
            <PurchaseItem 
              po="PO-1003" 
              item="Spare Parts" 
              amount="$300.00" 
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="ghost" className="text-green-500">
              View purchases <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Activity size={20} className="text-yellow-500 mr-2" /> Recent Inspections
            </h2>
          </div>
          <div className="space-y-2">
            <InspectionItem 
              vehicle="Vehicle #1" 
              type="Routine Inspection" 
              days="1 days ago" 
            />
            <InspectionItem 
              vehicle="Vehicle #2" 
              type="Routine Inspection" 
              days="2 days ago" 
            />
            <InspectionItem 
              vehicle="Vehicle #3" 
              type="Routine Inspection" 
              days="3 days ago" 
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="ghost" className="text-yellow-500">
              View inspections <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
