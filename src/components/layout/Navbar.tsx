import { Menu, Bell, Search, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200/80 flex items-center justify-between px-4 sm:px-6 z-10 sticky top-0 shadow-sm">
      <div className="flex items-center flex-1">
        {onToggleSidebar && (
          <button onClick={onToggleSidebar} className="mr-4 p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors hidden md:block focus:outline-none focus:ring-2 focus:ring-primary-500">
            <Menu className="w-5 h-5" />
          </button>
        )}
        <div className="max-w-md w-full relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            className="block w-full pl-10 pr-4 py-2 border border-transparent rounded-full leading-5 bg-gray-100/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 sm:text-sm transition-all duration-200 ease-in-out"
            placeholder="Cihaz, doküman veya alarm ara..."
            type="search"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full">
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-danger-500 ring-2 ring-white" />
          <Bell className="h-6 w-6" />
        </button>
        
        <div className="relative flex items-center gap-2 border-l pl-4 border-gray-200">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 focus:outline-none p-1 rounded-full hover:bg-gray-50 transition-colors"
          >
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold shadow-inner ring-2 ring-white">
              TE
            </div>
            <span className="text-sm font-semibold text-gray-700 hidden sm:block">Test Engineer</span>
          </button>

          {isProfileOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsProfileOpen(false)}
              />
              <div className="absolute right-0 top-full mt-3 w-48 rounded-md shadow-lg py-1 bg-white border border-gray-100 z-50">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm font-medium text-danger-600 hover:bg-danger-50 gap-2 transition"
                >
                  <LogOut className="w-4 h-4" />
                  Çıkış Yap
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
