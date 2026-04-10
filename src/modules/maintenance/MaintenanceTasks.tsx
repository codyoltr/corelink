import { useState } from 'react';
import { Calendar, PenTool, Clock } from 'lucide-react';
import clsx from 'clsx';

export default function MaintenanceTasks() {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bakım ve Operasyonlar</h1>
          <p className="text-sm text-gray-500 mt-1">Planlanan dijital iş emirleri ve bakım takvimi.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'upcoming', name: 'Yaklaşan Bakımlar', count: 3 },
            { id: 'completed', name: 'Tamamlananlar', count: 124 },
            { id: 'reports', name: 'Aylık Raporlar' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap pb-4 border-b-2 font-medium text-sm flex items-center gap-2'
              )}
            >
              {tab.name}
              {tab.count && (
                <span className={clsx("py-0.5 px-2.5 rounded-full text-xs", activeTab === tab.id ? "bg-primary-100" : "bg-gray-100")}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İş Emri / Açıklama</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kapsam</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Görevlendirilen</th>
                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Aksiyon</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {[
                { id: 'WO-2604', title: 'Aylık Rutin Kontrol (Nisan)', date: '10 Nis 2026', scope: 'Tüm Tesis (45 Ekipman)', assignee: 'Corelink Servis Ekibi', status: 'pending' },
                { id: 'WO-2601', title: '6kg ABC Tozlu Tüp Dolumları', date: 'Gecikti (2 Gün)', scope: 'B Blok (14 Ekipman)', assignee: 'Onay Bekliyor', status: 'late' },
              ].map((task) => (
                <tr key={task.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={clsx("w-10 h-10 rounded flex items-center justify-center", task.status === 'late' ? 'bg-danger-50 text-danger-600' : 'bg-primary-50 text-primary-600')}>
                        <PenTool className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{task.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{task.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={clsx("text-sm flex items-center gap-1.5", task.status === 'late' ? 'text-danger-600 font-bold' : 'text-gray-900')}>
                      <Calendar className="w-4 h-4" /> {task.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{task.scope}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className="bg-gray-100 px-2.5 py-1 rounded-md">{task.assignee}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {task.status === 'late' ? (
                       <button className="text-white font-semibold bg-danger-600 px-3 py-1.5 rounded hover:bg-danger-500 transition">Hızlandır</button>
                    ) : (
                       <p className="text-gray-400 font-medium text-xs flex items-center gap-1"><Clock className="w-4 h-4"/> Bekleniyor</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
}
