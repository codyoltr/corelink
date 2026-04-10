import { useState } from 'react';
import { Search, Filter, QrCode, Plus, Flame, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const mockAssets = [
  { id: '1', qr: 'QR-YM-001', name: '6kg Kuru Kimyevi Tozlu', location: 'A Blok - 1. Kat', status: 'Cihaz Sağlam', nextMaintenance: '12 KAS 2026', type: 'Yangın Tüpü' },
  { id: '2', qr: 'QR-YM-002', name: 'CO2 Karbondioksitli (5kg)', location: 'B Blok - Server Odası', status: 'Bakım Gerekli', nextMaintenance: 'Gecikmiş (2 Gün)', type: 'Yangın Tüpü', isWarning: true },
  { id: '3', qr: 'QR-SM-011', name: 'Optik Duman Detektörü', location: 'C Blok - Yemekhane', status: 'Cihaz Sağlam', nextMaintenance: '15 ŞUB 2027', type: 'Dedektör' },
];

export default function AssetList() {
  const [search, setSearch] = useState('');

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Varlık Yönetimi (Envanter)</h1>
          <p className="text-sm text-gray-500 mt-1">Tesisinizdeki tüm yangın güvenliği cihazlarının QR kayıtları.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition">
            <QrCode className="w-4 h-4" /> QR Okut
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-500 shadow-sm transition">
            <Plus className="w-4 h-4" /> Varlık Ekle
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="Cihaz Adı, QR Kod, veya Konum Ara"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
          <Filter className="w-4 h-4" /> Filtrele
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex-1 overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider w-16">Türü</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cihaz Bilgisi & QR</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Konum</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sonraki Bakım</th>
                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Aksiyonlar</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {mockAssets.map((asset) => (
                <tr key={asset.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center mx-auto", asset.type === 'Yangın Tüpü' ? 'bg-danger-50 text-danger-600' : 'bg-primary-50 text-primary-600')}>
                      {asset.type === 'Yangın Tüpü' ? <Flame className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    <div className="text-sm text-gray-500 font-mono mt-0.5">{asset.qr}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{asset.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={clsx("px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full",
                      asset.isWarning ? "bg-danger-100 text-danger-800" : "bg-success-100 text-success-800"
                    )}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={asset.isWarning ? "text-danger-600 font-medium" : ""}>{asset.nextMaintenance}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/assets/${asset.id}`} className="text-primary-600 hover:text-primary-900 font-semibold bg-primary-50 px-3 py-1.5 rounded hover:bg-primary-100 transition">Detaylar</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
