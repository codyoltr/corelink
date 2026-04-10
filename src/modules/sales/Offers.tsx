import { ShoppingCart, FileSignature, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Offers() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Satış & Teklif Yönetimi</h1>
          <p className="text-sm text-gray-500 mt-1">Eksik donanımlar ve yaklaşan değişimler için otomatik dijital teklifler.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white rounded-xl shadow-sm border border-primary-200 overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                 <span className="bg-primary-100 text-primary-800 text-xs font-bold px-2 py-1 rounded inline-flex mb-2">Otomatik Teklif</span>
                 <h2 className="text-xl font-bold text-gray-900">14 Adet Tüp Yeniden Dolumu</h2>
                 <p className="text-sm text-gray-500 mt-1">Son kullanma tarihi gelen (veya gecikmiş) ekipmanlar.</p>
              </div>
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                 <ShoppingCart className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Birim Maliyet (Ortalama)</span>
                <span className="font-medium">₺ 450.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Saha Hizmet Bedeli</span>
                <span className="font-medium">₺ 1,200.00</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between">
                <span className="font-bold text-gray-900">Tahmini Toplam (KDV Hariç)</span>
                <span className="font-bold text-primary-600 text-lg">₺ 7,500.00</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-primary-600 text-white font-bold py-2.5 rounded-lg shadow-sm hover:bg-primary-500 transition justify-center flex items-center gap-2">
                 <FileSignature className="w-5 h-5" />
                 Teklifi Onayla
              </button>
            </div>
          </div>
        </motion.div>

        {/* Geçmiş Onaylar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
           <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b">Onaylanmış Aktif Siparişler</h3>
           <div className="space-y-4">
             <div className="flex items-start gap-4">
               <div className="mt-1"><CheckCircle className="w-5 h-5 text-success-500" /></div>
               <div>
                  <p className="font-bold text-sm text-gray-900">Yeni Nesil Duman Dedektörü Alımı (20 Adet)</p>
                  <p className="text-xs text-gray-500 mt-0.5">Sipariş alındı. Kurulum planlanıyor.</p>
               </div>
             </div>
             
             <div className="flex items-start gap-4 opacity-50">
               <div className="mt-1"><CheckCircle className="w-5 h-5 text-success-500" /></div>
               <div>
                  <p className="font-bold text-sm text-gray-900">Aylık Sözleşme Yenilemesi (2026)</p>
                  <p className="text-xs text-gray-500 mt-0.5">Fatura kesildi.</p>
               </div>
             </div>
           </div>
           
           <div className="mt-auto pt-6">
              <button className="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:underline">
                 Geçmiş Satın Alımları Görüntüle <ArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
