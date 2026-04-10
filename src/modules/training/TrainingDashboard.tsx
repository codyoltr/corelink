import { Video, PlayCircle, Trophy, BookCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function TrainingDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Eğitim & Tatbikat Yönetimi</h1>
          <p className="text-sm text-gray-500 mt-1">Yasal eğitim zorunlulukları ve çalışan sertifika durumu.</p>
        </div>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-500 shadow-sm transition inline-flex items-center gap-2">
          <Users className="w-4 h-4" /> Yeni Tatbikat Planla
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm col-span-1 md:col-span-2 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Toplu Eğitim Uyumluluğu</h3>
            <p className="text-sm text-gray-500 mt-1">Son 12 ay içinde aktifleşen zorunlu yangın yönetmeliği eğitimleri.</p>
            <div className="mt-4 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-success-600">85%</p>
                <p className="text-xs font-semibold text-gray-500 uppercase mt-1">Tamamlanma</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs font-semibold text-gray-500 uppercase mt-1">Kalan Personel</p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path className="text-gray-100" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32" />
                <path className="text-primary-500" strokeDasharray="85, 100" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-xl shadow-sm text-white flex flex-col justify-center">
          <Trophy className="w-8 h-8 text-amber-100 mb-4" />
          <h3 className="font-bold text-lg leading-tight">Takım Liderliği<br/>Rozeti</h3>
          <p className="text-amber-100 text-sm mt-2">Bu ayki "Yangın Anında Ne Yapılır?" yarışmasında 1. sıradasınız.</p>
        </div>
      </div>

      <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">Size Atanan Mini Eğitimler (2-3 dk)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Yangın Tüpü Nasıl Kullanılır?", duration: "3 dk video", status: "Tamamlandı", icon: Video },
          { title: "Acil Çıkış Yolları Kuralları", duration: "2 dk doküman + 5 soru", status: "Devam Ediyor", icon: BookCheck },
          { title: "Elektrik Yangınlarına Müdahale", duration: "4 dk interaktif modül", status: "Başlamadı", icon: PlayCircle },
        ].map((course, i) => (
          <motion.div key={i} whileHover={{ y: -4 }} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <div className="h-32 bg-gray-100 flex items-center justify-center relative">
              <course.icon className="w-12 h-12 text-gray-400" />
              <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                <div className="bg-white text-gray-900 font-bold px-4 py-2 rounded-lg shadow cursor-pointer">Eğitime Git</div>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-primary-600 mb-1">{course.duration}</p>
                <h3 className="font-bold text-gray-900 text-sm">{course.title}</h3>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className={clsx("text-xs font-bold px-2 py-1 rounded", {
                  'bg-success-100 text-success-700': course.status === 'Tamamlandı',
                  'bg-warning-100 text-warning-700': course.status === 'Devam Ediyor',
                  'bg-gray-100 text-gray-600': course.status === 'Başlamadı',
                })}>{course.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
