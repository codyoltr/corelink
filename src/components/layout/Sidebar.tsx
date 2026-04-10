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

export default function Sidebar({ isOpen = true }: { isOpen?: boolean }) {
  return (
    <aside className={clsx("bg-white border-r border-gray-100 hidden md:flex md:flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20 transition-all duration-300 overflow-hidden", isOpen ? "w-64" : "w-20")}>
      <div className="h-16 flex items-center px-6 border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-2 text-primary-600 font-bold text-xl tracking-tight overflow-hidden whitespace-nowrap">
          <ShieldAlert className="w-6 h-6 shrink-0" />
          <span className={clsx("transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0 w-0 hidden")}>Corelink</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border-l-4 overflow-hidden whitespace-nowrap',
                isActive
                  ? 'bg-primary-50 border-primary-500 text-primary-700 shadow-sm'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                !isOpen && 'justify-center !px-0'
              )
            }
            title={!isOpen ? item.name : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className={clsx("transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0 w-0 hidden")}>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      
      {/* Help Section at bottom */}
      <div className="p-4 border-t border-gray-200 shrink-0">
        <button className={clsx(
          "bg-danger-50 text-danger-600 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-danger-100 transition-colors overflow-hidden whitespace-nowrap",
          isOpen ? "w-full py-2.5 px-4 text-sm" : "w-12 h-12 p-0 mx-auto"
        )} title={!isOpen ? "Yardıma İhtiyacım Var" : undefined}>
          <ShieldAlert className="w-5 h-5 shrink-0" />
          <span className={clsx("transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0 w-0 hidden")}>Yardıma İhtiyacım Var</span>
        </button>
      </div>
    </aside>
  );
}
