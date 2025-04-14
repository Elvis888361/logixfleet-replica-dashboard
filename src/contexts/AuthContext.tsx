
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
    if (storedToken) {
      setToken(storedToken);
      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async () => {
    try {
      const storedEmail = localStorage.getItem('logixfleet_email');
      if (!storedEmail) return;

      const response = await fetch(
        `https://rjlogistics.logixfleetapp.com/api/method/erpnext.api.get_user_details?email=${storedEmail}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('logixfleet_token')}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }

      const data = await response.json();
      setUserData(data.message);
      setIsAuthenticated(true);
      console.log('User data loaded:', data.message);
    } catch (error) {
      console.error('Error fetching user details:', error);
      setIsAuthenticated(false);
      localStorage.removeItem('logixfleet_token');
      localStorage.removeItem('logixfleet_email');
      navigate('/login');
    }
  };

  const login = async (email: string, password: string) => {
    try {
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

      // For demo purposes using hardcoded token
      const tokenToUse = "326ce9899dd14ad:40bdcef41b46097";
      
      localStorage.setItem('logixfleet_token', tokenToUse);
      localStorage.setItem('logixfleet_email', email);
      setToken(tokenToUse);
      
      // Fetch user details after successful login
      await fetchUserDetails();
      
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
