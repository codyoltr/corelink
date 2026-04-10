import { FileText, Download, Filter, Search, ShieldCheck, Folder } from 'lucide-react';
import { useState } from 'react';

export default function DocumentCenter() {
  const [search, setSearch] = useState('');

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Doküman & Sertifika Merkezi</h1>
          <p className="text-sm text-gray-500 mt-1">Bakım sözleşmeleri, cihaz sertifikaları ve eğitim belgeleri arşivi.</p>
        </div>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-500 shadow-sm transition">
          Yeni Doküman Yükle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sol Menü - Klasörler */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 shrink-0">
          <h3 className="font-bold text-gray-900 mb-4 px-2">Kategoriler</h3>
          <nav className="space-y-1">
            {[
              { name: 'Tüm Belgeler', count: 42, active: true },
              { name: 'Sertifikalar (Tüp/Detektör)', count: 18, active: false },
              { name: 'Bakım Sözleşmeleri', count: 4, active: false },
              { name: 'Eğitim Katılım Belgeleri', count: 15, active: false },
              { name: 'Ruhsat & Yasal Evraklar', count: 5, active: false },
            ].map(folder => (
              <a key={folder.name} href="#" className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${folder.active ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4" />
                  {folder.name}
                </div>
                <span className="bg-white px-2 py-0.5 rounded-full border border-gray-200 text-xs text-gray-500">{folder.count}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Sağ Taraf - Liste */}
        <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-[600px]">
          <div className="p-4 border-b border-gray-100 flex gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                placeholder="Doküman adı, kodu veya tarih ara..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              <Filter className="w-4 h-4" /> Sırala
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {[
              { title: 'Corelink Yıllık Bakım Sözleşmesi 2026', type: 'PDF', size: '2.4 MB', date: '01 Şub 2026', status: 'Geçerli' },
              { title: 'TSE Hizmet Yeterlilik Belgesi', type: 'PDF', size: '1.1 MB', date: '15 Oca 2026', status: 'Geçerli' },
              { title: 'Yangın Tatbikatı Katılım İmzaları (Kasım)', type: 'PDF', size: '4.8 MB', date: '12 Kas 2025', status: 'Arşiv' },
              { title: 'CO2 Tüpleri Yeniden Dolum Sertifikası', type: 'PDF', size: '0.8 MB', date: '12 May 2025', status: 'Geçerli' },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg group transition border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-danger-50 text-danger-600 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{doc.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{doc.type} • {doc.size} • Yüklendi: {doc.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {doc.status === 'Geçerli' && <span className="hidden sm:flex items-center gap-1 text-success-600 text-xs font-semibold px-2 py-1 bg-success-50 rounded"><ShieldCheck className="w-3.5 h-3.5" /> Geçerli</span>}
                  <button className="text-gray-400 hover:text-primary-600 p-2 rounded hover:bg-white transition opacity-0 group-hover:opacity-100">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
