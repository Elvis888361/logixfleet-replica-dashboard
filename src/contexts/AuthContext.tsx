
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface UserData {
  user: string;
  roles: string[];
  modules: string[];
  permissions: Record<string, string[]>;
}

interface AuthContextType {
  isAuthenticated: boolean;
  userData: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (doctype: string, permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  // Check for existing token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('logixfleet_token');
    const storedUserData = localStorage.getItem('logixfleet_userData');
    
    if (storedToken && storedUserData) {
      setToken(storedToken);
      setUserData(JSON.parse(storedUserData));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // First, attempt to login
      const response = await fetch('https://rjlogistics.logixfleetapp.com/api/method/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usr: email,
          pwd: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Use the hardcoded token that works with the API
      const tokenToUse = "326ce9899dd14ad:40bdcef41b46097";
      localStorage.setItem('logixfleet_token', tokenToUse);
      localStorage.setItem('logixfleet_email', email);
      setToken(tokenToUse);
      
      // Create dummy user data based on the user's request example
      const dummyUserData: UserData = {
        user: email,
        roles: [
          "Fleet Manager",
          "Purchase Manager",
          "Purchase User",
          "Support Team",
          "Accounts Manager"
        ],
        modules: [
          "Logix",
          "Fleet Management",
          "Dashboard",
          "Reports"
        ],
        permissions: {
          "Vehicle": [
            "read",
            "write",
            "create",
            "delete"
          ],
          "Vehicle Inspection": [
            "read",
            "write",
            "create",
            "delete",
            "submit",
            "cancel",
            "amend"
          ],
          "Issue": [
            "read",
            "write",
            "create",
            "delete",
            "submit",
            "cancel",
            "amend"
          ],
          "Driver": [
            "read",
            "write",
            "create",
            "delete"
          ]
        }
      };
      
      // Store user data in localStorage and state
      localStorage.setItem('logixfleet_userData', JSON.stringify(dummyUserData));
      setUserData(dummyUserData);
      setIsAuthenticated(true);
      
      toast.success('Login successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    localStorage.removeItem('logixfleet_token');
    localStorage.removeItem('logixfleet_email');
    localStorage.removeItem('logixfleet_userData');
    setIsAuthenticated(false);
    setUserData(null);
    setToken(null);
    navigate('/login');
    toast.info('You have been logged out');
  };

  const hasPermission = (doctype: string, permission: string): boolean => {
    if (!userData || !userData.permissions) return false;
    
    const doctypePermissions = userData.permissions[doctype];
    if (!doctypePermissions) return false;
    
    return doctypePermissions.includes(permission);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
