import { Map as MapIcon, Maximize2, Layers } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';

export default function FacilityMap() {
  const [activeFloor, setActiveFloor] = useState('1. Kat');

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tesis Planı (Harita)</h1>
          <p className="text-sm text-gray-500 mt-1">Tesis krokiniz üzerinde yangın cihazlarının dijital iz düşümü.</p>
        </div>
        <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
          {['Zemin Kat', '1. Kat', '2. Kat'].map(floor => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={clsx("px-4 py-1.5 text-sm font-medium rounded-md transition", activeFloor === floor ? "bg-primary-50 text-primary-700 shadow-sm" : "text-gray-500 hover:text-gray-700")}
            >
              {floor}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white flex-1 rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative group">
        {/* Kontroller */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <button className="bg-white p-2 rounded shadow-md text-gray-700 hover:text-primary-600 border border-gray-100">
            <Layers className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded shadow-md text-gray-700 hover:text-primary-600 border border-gray-100">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
        
        {/* Lejant (Açıklamalar) */}
        <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-xl p-4 w-64 text-sm">
          <h4 className="font-bold mb-3 border-b pb-2">İşaretler</h4>
          <ul className="space-y-2">
            <li className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-4 h-4 bg-primary-500 rounded-full border-2 border-white shadow-sm"/> Yangın Dolabı</div><span className="font-mono text-xs text-gray-400">12</span></li>
            <li className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-4 h-4 bg-danger-500 rounded-full border-2 border-white shadow-sm"/> 6kg Tozlu Tüp</div><span className="font-mono text-xs text-gray-400">45</span></li>
            <li className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-4 h-4 bg-amber-500 rounded-full border-2 border-white shadow-sm"/> CO2 Tüpü</div><span className="font-mono text-xs text-gray-400">8</span></li>
          </ul>
        </div>

        {/* Sahte Kroki (SVG Mock) */}
        <div className="absolute inset-0 bg-gray-50 flex items-center justify-center p-12 touch-pan-xy overflow-hidden cursor-move">
          <div className="relative w-full max-w-4xl aspect-[4/3] border-4 border-gray-200 rounded text-gray-300 bg-white">
             {/* Mimari Duvar Çizgileri Mock */}
             <div className="absolute inset-x-0 top-1/2 h-2 bg-gray-200" />
             <div className="absolute inset-y-0 left-1/3 w-2 bg-gray-200" />
             <div className="absolute left-1/3 top-1/4 w-32 h-2 bg-gray-200" />
             
             {/* Cihaz Konumları */}
             <div className="absolute top-[20%] left-[15%] w-6 h-6 bg-danger-500 rounded-full border-4 border-white shadow-md animate-pulse cursor-pointer group-hover:scale-110 transition" title="Tüp (Bakım Gerekli)" />
             <div className="absolute top-[60%] left-[80%] w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow-md cursor-pointer group-hover:scale-110 transition" title="Yangın Dolabı" />
             <div className="absolute top-[80%] left-[40%] w-6 h-6 bg-danger-500 rounded-full border-4 border-white shadow-md cursor-pointer group-hover:scale-110 transition" title="Tüp (Sağlam)" />
             <div className="absolute top-[30%] left-[50%] w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow-md cursor-pointer group-hover:scale-110 transition" title="CO2 (Sağlam)" />

             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
               <MapIcon className="w-64 h-64" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
