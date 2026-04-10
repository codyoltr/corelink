import { AlertOctagon, CheckCircle2, ShieldAlert, Phone, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function EmergencyConsole() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Kırmızı Tepe Alarm Barı */}
      <div className="bg-danger-600 text-white px-6 py-4 flex items-center justify-between shadow-md z-10 shrink-0">
        <div className="flex items-center gap-3">
          <AlertOctagon className="w-8 h-8 animate-pulse" />
          <div>
            <h1 className="text-xl font-bold uppercase tracking-wide">Acil Durum Yönetim Konsolu</h1>
            <p className="text-danger-100 text-sm">Gerçek zamanlı kriz izleme ve müdahale ekranı</p>
          </div>
        </div>
        <div className="flex gap-3">
           <button className="bg-white text-danger-600 font-bold px-6 py-2 rounded-lg shadow hover:bg-danger-50 transition uppercase text-sm">
             Genel Tahliye Başlat
           </button>
        </div>
      </div>

      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          
          {/* Sol Kolon: Gelen İstekler */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-sm border-l-4 border-l-danger-500 overflow-hidden flex-1 flex flex-col">
              <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                <h2 className="font-bold text-gray-900 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-danger-500" />
                  "Yardıma İhtiyacım Var" Sinyalleri
                </h2>
                <span className="bg-danger-100 text-danger-800 text-xs font-bold px-2 py-1 rounded-full">2 Aktif</span>
              </div>
              <div className="p-4 space-y-4 overflow-y-auto flex-1">
                {[
                  { name: 'Ayşe Yılmaz', location: 'B Blok - 3. Kat Yemekhane', time: '14:23 (2 dk önce)', type: 'Sıkışma / Duman' },
                  { name: 'Mehmet Kaplan', location: 'C Blok - Depo Alanı', time: '14:24 (1 dk önce)', type: 'Panik / Yön Bulamama' },
                ].map((alert, i) => (
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} key={i} className="border border-danger-200 bg-danger-50/50 p-4 rounded-lg relative">
                    <div className="absolute top-4 right-4 animate-ping w-2 h-2 rounded-full bg-danger-500" />
                    <p className="font-bold text-gray-900">{alert.name}</p>
                    <div className="text-sm text-gray-600 mt-1 flex flex-col gap-1">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {alert.location}</span>
                      <span className="text-danger-700 font-medium text-xs mt-1">{alert.type} • {alert.time}</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Link to="/map" className="flex-1 bg-white border border-gray-300 text-gray-700 py-1.5 rounded text-xs font-bold hover:bg-gray-50 transition text-center inline-block">Konumu Haritada Gör</Link>
                      <button className="flex-none bg-primary-600 text-white p-1.5 rounded hover:bg-primary-500 transition"><Phone className="w-4 h-4" /></button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Orta/Sağ Kolon: Tahliye Durumu */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 shrink-0">
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                 <div>
                   <p className="text-gray-500 font-medium text-sm">Toplanma Alanına Ulaşan</p>
                   <p className="text-4xl font-bold text-success-600 mt-2">142</p>
                 </div>
                 <div className="w-14 h-14 rounded-full bg-success-50 flex items-center justify-center text-success-600">
                    <CheckCircle2 className="w-8 h-8" />
                 </div>
               </div>
               
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                 <div>
                   <p className="text-gray-500 font-medium text-sm">Binada Kalan (Tahmini)</p>
                   <p className="text-4xl font-bold text-warning-600 mt-2">18</p>
                 </div>
                 <div className="w-14 h-14 rounded-full bg-warning-50 flex items-center justify-center text-warning-600">
                    <Users className="w-8 h-8" />
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex-1 flex flex-col overflow-hidden text-center justify-center items-center relative">
              {/* Burası harita modülü entegrasyonu için ayrılmış boş alan (Mock) */}
              <div className="absolute inset-0 bg-gray-100/50 flex flex-col items-center justify-center p-6">
                 <div className="w-full max-w-md h-64 border-2 border-dashed border-gray-300 rounded-xl bg-white flex items-center justify-center text-gray-400 flex-col">
                   <MapPin className="w-12 h-12 mb-2" />
                   <p className="font-medium">Canlı Tahliye Haritası</p>
                   <p className="text-sm mt-1">Harita modülü aktifleştiğinde otomatik olarak bağlanır.</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
