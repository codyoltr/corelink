import { ArrowLeft, History, QrCode, FileText, Camera } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function AssetDetail() {
  useParams();

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div>
        <Link to="/assets" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-4 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Envantere Dön
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              CO2 Karbondioksitli (5kg)
              <span className="px-2.5 py-1 text-xs font-semibold bg-danger-100 text-danger-800 rounded-full">Bakım Gecikmiş</span>
            </h1>
            <p className="text-sm font-mono text-gray-500 mt-1">QR Kodu: QR-YM-002 • B Blok - Server Odası</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-500 shadow-sm transition">
              <History className="w-4 h-4" /> Bakım Gerçekleştir
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Sol Kolon: QR ve Temel Bilgiler */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
               <QrCode className="w-24 h-24 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500">Cihaz üzerine yapıştırılan fiziksel etiketin dijital ikizi.</p>
            <button className="mt-4 text-primary-600 font-medium text-sm hover:underline">Etiketi Yeniden Yazdır</button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Donanım Bilgileri</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Üretim Tarihi</dt>
                <dd className="font-medium text-gray-900">01.03.2023</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Garanti Bitiş</dt>
                <dd className="font-medium text-gray-900">01.03.2025</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Ağırlık / Tip</dt>
                <dd className="font-medium text-gray-900">5kg / CO2</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Sağ Kolon: Geçmiş ve Kanıtlar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <History className="w-5 h-5 text-primary-600" />
              Bakım ve Dolum Geçmişi
            </h3>
            
            <div className="space-y-6">
              {[
                { date: '12 KAS 2023', type: 'Periyodik Kontrol', person: 'Ahmet Y. (Teknisyen)', details: 'Basınç durumu normal, emniyet pimi yerinde, mühür sağlam.' },
                { date: '12 MAY 2023', type: 'Yeniden Dolum', person: 'Mehmet K. (Yetkili Bayi)', details: 'Göğde hidrostatik testi yapıldı, CO2 dolumu tamamlandı.' },
              ].map((record, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mt-1.5" />
                    {i === 0 && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-gray-900">{record.type}</p>
                      <span className="text-xs font-medium text-gray-500">{record.date}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">Yapan: {record.person}</p>
                    <div className="mt-2 text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-100">
                      {record.details}
                      <div className="mt-3 flex gap-2">
                        <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 bg-white border border-gray-200 px-2 py-1 rounded shadow-sm hover:bg-gray-50">
                          <Camera className="w-3.5 h-3.5" /> Fotoğraf (1)
                        </button>
                        <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 bg-white border border-gray-200 px-2 py-1 rounded shadow-sm hover:bg-gray-50">
                          <FileText className="w-3.5 h-3.5" /> Bakım Formu PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
