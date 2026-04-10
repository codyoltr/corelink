import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, ShieldCheck, Flame, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Güvenlik Endeksi</h1>
          <p className="text-sm text-gray-500 mt-1">Tesisinizdeki sistemlerin genel durum özeti.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition">Rapor Çıktısı Al</button>
          <Link to="/assets" className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-500 shadow-sm transition inline-block">Tesis Ekle</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Score Widget */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40 flex-shrink-0">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-gray-100"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-success-500"
                strokeDasharray="85, 100"
                strokeWidth="3"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">85<span className="text-xl text-gray-500">%</span></span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Güvende</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bugün denetime girseniz geçer misiniz?</h3>
            <p className="text-gray-600 mb-4">
              Tesislerinizdeki analizlere göre <strong>Büyük Uyumsuzluk</strong> tespit edilmedi ancak eksik dokümanlar yüzünden ufak puan kırılmaları mevcut.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-success-600 font-medium">
              <ShieldCheck className="w-5 h-5" />
              <span>Durum: Risk Seviyesi Düşük</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-sm p-6 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium text-primary-100">Yıllık Harcama (Yangın Güvenliği)</h3>
            <p className="text-3xl font-bold mt-2">₺ 142.500</p>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm text-primary-200">
            <span>Geçen yıla göre tasarrruf:</span>
            <span className="text-success-300 font-semibold flex items-center gap-1">
              +12% 
            </span>
          </div>
        </motion.div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Aktif Varlık (Tüp, Detektör)', value: '1,248', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
          { label: 'Yaklaşan Bakım (Bu Ay)', value: '34', icon: Clock, color: 'text-warning-500', bg: 'bg-warning-50' },
          { label: 'Kritik Uyarılar', value: '3', icon: AlertTriangle, color: 'text-danger-500', bg: 'bg-danger-50' },
          { label: 'Eksik Eğitimli Personel', value: '12', icon: BookOpen, color: 'text-primary-500', bg: 'bg-primary-50' },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 + (i * 0.05) }} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Notifications & Latest Regs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 line-clamp-2">
          <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b">Bu Ay Değişen Yönetmelik Maddeleri</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Madde 48 - Endüstriyel Tesislerde Sprinkler Kullanımı</p>
                <p className="text-xs text-gray-500 mt-1">Eskiden zorunlu olmayan bazı depolama alanları artık C sınıfı risk kapsamında değerlendirilmektedir.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">QR Kod Entegrasyonu Onayı</p>
                <p className="text-xs text-gray-500 mt-1">Elektronik ortamda tutulan QR denetim günlükleri hukuken geçerli sayılmaktadır.</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4 pb-2 border-b">
            <h3 className="font-bold text-gray-900">Yaklaşan Görevler</h3>
            <Link to="/maintenance" className="text-sm text-primary-600 font-medium hover:underline">Tümünü gör</Link>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-warning-500"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Blok A Yangın Tüpü Dolumu</p>
                  <p className="text-xs text-gray-500">14 Ekipman • Son 5 gün</p>
                </div>
              </div>
              <Link to="/maintenance" className="text-xs font-semibold px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded transition border">Talep Aç</Link>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-danger-500"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Personel Tahliye Tatbikatı</p>
                  <p className="text-xs text-gray-500">Yasal zorunluluk • Gecikmiş (2 Gün)</p>
                </div>
              </div>
              <Link to="/training" className="text-xs font-semibold px-3 py-1 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded transition border border-primary-100">Planla</Link>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
