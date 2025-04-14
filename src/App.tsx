
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

// Create placeholder pages for all routes
import VehiclesPage from "./pages/Vehicles";
import InspectionsPage from "./pages/Inspections";
import InsurancePage from "./pages/Insurance";
import ServicePage from "./pages/Service";
import DriversPage from "./pages/Drivers";
import IssuesPage from "./pages/Issues";
import InventoryPage from "./pages/Inventory";
import MaintenancePage from "./pages/Maintenance";
import VendorsPage from "./pages/Vendors";
import SchedulePage from "./pages/Schedule";
import ReportsPage from "./pages/Reports";
import SettingsPage from "./pages/Settings";
import UsersPage from "./pages/Users";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/vehicles" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "Vehicle", permission: "read" }}>
                  <VehiclesPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/inspections" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "Vehicle Inspection", permission: "read" }}>
                  <InspectionsPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/insurance" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "Vehicle", permission: "read" }}>
                  <InsurancePage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/service" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "Vehicle", permission: "read" }}>
                  <ServicePage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/drivers" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "Driver", permission: "read" }}>
                  <DriversPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/issues" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "Issue", permission: "read" }}>
                  <IssuesPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/inventory" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "Stock Entry", permission: "read" }}>
                  <InventoryPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/maintenance" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "Maintenance Schedule", permission: "read" }}>
                  <MaintenancePage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/vendors" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "Supplier", permission: "read" }}>
                  <VendorsPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/schedule" 
              element={
                <ProtectedRoute requiredModule="Fleet Management">
                  <SchedulePage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/reports" 
              element={
                <ProtectedRoute requiredModule="Reports">
                  <ReportsPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/settings" 
              element={
                <ProtectedRoute requiredModule="Logix">
                  <SettingsPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/users" 
              element={
                <ProtectedRoute requiredPermission={{ doctype: "User", permission: "read" }}>
                  <UsersPage />
                </ProtectedRoute>
              } 
            />
            
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
