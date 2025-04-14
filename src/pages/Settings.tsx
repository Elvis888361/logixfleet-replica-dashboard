
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bell, Globe, Lock, Mail, Shield, User } from 'lucide-react';

const SettingItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start">
        <div className="p-3 rounded-full bg-blue-100 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Card>
  );
};

const Settings: React.FC = () => {
  return (
    <DashboardLayout 
      title="Settings" 
      actions={
        <Button variant="outline">
          Save Changes
        </Button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SettingItem 
          icon={<User className="h-6 w-6 text-blue-600" />}
          title="Account Settings"
          description="Manage your account information and preferences"
        />
        
        <SettingItem 
          icon={<Lock className="h-6 w-6 text-blue-600" />}
          title="Security"
          description="Update password and security settings"
        />
        
        <SettingItem 
          icon={<Bell className="h-6 w-6 text-blue-600" />}
          title="Notifications"
          description="Configure email and system notifications"
        />
        
        <SettingItem 
          icon={<Mail className="h-6 w-6 text-blue-600" />}
          title="Email Templates"
          description="Customize notification email templates"
        />
        
        <SettingItem 
          icon={<Shield className="h-6 w-6 text-blue-600" />}
          title="Roles & Permissions"
          description="Manage user roles and access control"
        />
        
        <SettingItem 
          icon={<Globe className="h-6 w-6 text-blue-600" />}
          title="System Settings"
          description="Configure global system preferences"
        />
      </div>
    </DashboardLayout>
  );
};

export default Settings;
