import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, Flame, BookOpen, Map, Settings } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-full bg-gray-50 p-6 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-100/50 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] rounded-full bg-orange-100/40 blur-[80px]" />
      </div>

      <div className="text-center max-w-3xl z-10 space-y-6">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="w-20 h-20 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-primary-100">
            <ShieldAlert className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Yangın Yönetim Sistemine <br className="hidden md:block" /> Hoş Geldiniz
          </h1>
          <p className="mt-4 text-lg text-gray-600 mx-auto max-w-xl">
            Tesisinizin yangın ve güvenlik süreçlerini tek bir merkezden kolayca yönetin, eğitimleri planlayın ve denetimlere her an hazır olun.
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-4"
        >
          <Link to="/dashboard" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all group">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-primary-50 group-hover:text-primary-600 mb-4 transition-colors">
              <Settings className="w-6 h-6" />
            </div>
            <span className="font-semibold text-gray-800">Panel (Dashboard)</span>
          </Link>
          
          <Link to="/assets" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all group">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-orange-50 group-hover:text-orange-600 mb-4 transition-colors">
              <Flame className="w-6 h-6" />
            </div>
            <span className="font-semibold text-gray-800">Cihaz / Varlıklar</span>
          </Link>

          <Link to="/map" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 mb-4 transition-colors">
              <Map className="w-6 h-6" />
            </div>
            <span className="font-semibold text-gray-800">Tesis Haritası</span>
          </Link>

          <Link to="/training" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all group">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-green-50 group-hover:text-green-600 mb-4 transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="font-semibold text-gray-800">Eğitimler</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
