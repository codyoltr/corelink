import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Map, FileCode, ShieldAlert, GraduationCap, FileText, ShoppingCart } from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Varlık Yönetimi', icon: FileCode, path: '/assets' },
  { name: 'Harita', icon: Map, path: '/map' },
  { name: 'Bakım & İzleme', icon: FileText, path: '/maintenance' },
  { name: 'Eğitim Paneli', icon: GraduationCap, path: '/training' },
  { name: 'Dokümanlar', icon: FileText, path: '/documents' },
  { name: 'Satış & Teklif', icon: ShoppingCart, path: '/sales' },
  { name: 'Acil Durum', icon: ShieldAlert, path: '/emergency' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex md:flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-primary-600 font-bold text-xl tracking-tight">
          <ShieldAlert className="w-6 h-6" />
          <span>Corelink</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              )
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      {/* Help Section at bottom */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full bg-danger-50 text-danger-600 py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold hover:bg-danger-100 transition-colors">
          <ShieldAlert className="w-5 h-5" />
          Yardıma İhtiyacım Var
        </button>
      </div>
    </aside>
  );
}
