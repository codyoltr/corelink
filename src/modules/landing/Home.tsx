import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, PhoneCall, ChevronRight, Menu, X, ArrowRight, Flame, Map, BookOpen, Clock, PlayCircle, Users, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* Top Navbar */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-gray-900">
                Core<span className="text-primary-600">link</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary-600 font-semibold transition-colors">Hakkımızda</a>
              <a href="#services" className="text-gray-600 hover:text-primary-600 font-semibold transition-colors">Hizmetlerimiz</a>
              <a href="#news" className="text-gray-600 hover:text-primary-600 font-semibold transition-colors">Haberler</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 font-semibold transition-colors">İletişim</a>
            </nav>

            {/* Deskop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-primary-600 font-semibold px-3 py-2 transition-colors">
                Giriş Yap
              </Link>
              <Link to="/login" className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30 transition-all flex items-center gap-2 group">
                Sisteme Git
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary-600 focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50">Hakkımızda</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50">Hizmetlerimiz</a>
              <a href="#news" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50">Haberler</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50">İletişim</a>
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 mt-4 text-center rounded-md font-bold text-primary-600 border border-primary-200 bg-primary-50">
                Giriş Yap / Sisteme Git
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center min-h-[650px] overflow-hidden bg-gray-950">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/bg-firefighter.png" 
            alt="Uzman İtfaiyeci" 
            className="w-full h-full object-cover object-center opacity-50 mix-blend-overlay grayscale-[20%]"
          />
          {/* Gradients to blend text better */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 md:pr-12 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-500/20 text-primary-300 font-bold text-sm mb-6 border border-primary-500/30 backdrop-blur-sm tracking-wide">
                <ShieldAlert className="w-4 h-4" /> Güvenlikte Son Teknoloji
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-xl">
                YANGIN GÜVENLİĞİNDE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">TEK ÇÖZÜM</span> SİZE YETER
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-lg font-medium">
                Tüm tesislerinizin yangın ve güvenlik operasyonlarını Corelink ile merkezileştirin. Akıllı takipler, anında bildirimler ve denetim garantili altyapı.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/login" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-white rounded-full font-bold text-lg shadow-[0_0_40px_rgba(229,57,53,0.4)] transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                  Panele Giriş Yap
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-lg border border-white/20 transition-all flex items-center justify-center">
                  Hizmetlerimizi İncele
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Emergency Call Box */}
          <div className="w-full md:w-1/3 mt-16 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden group hover:bg-white/15 transition-colors"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-500/30 rounded-full blur-3xl group-hover:bg-primary-500/50 transition-colors"></div>
              
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(229,57,53,0.6)]">
                <PhoneCall className="w-10 h-10 text-white animate-pulse" />
              </div>
              <h3 className="text-gray-300 font-bold mb-2 uppercase tracking-widest text-sm">Acil Çağrı İhbar Hattı</h3>
              <p className="text-7xl font-black text-white tracking-tighter drop-shadow-2xl mb-2">112</p>
              <p className="text-sm text-gray-400 font-medium">Tüm acil durumlar için yetkili ve güvenli yegâne hat.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Hakkımızda</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Güvenlik Altyapınızı Geleceğe Taşıyın
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Corelink, işletmelerin yangın sistemlerini, tahliye tatbikatlarını ve personel donanımlarını tek bir çatı altından dijital ve sorunsuz bir şekilde yönetebilmesi için geliştirilmiş yenilikçi bir platformdur. Amacımız, sıfır hata toleransıyla çalışan modern bir güvenlik ağı örmektir.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Yüksek teknoloji ile veri tabanlı risk haritalandırma',
                  'Tam zamanlı denetim uygunluğu ve yasal entegrasyon',
                  'Akıllı bakım uyarıları ve makine öğrenimi tahminleme'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/login" className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition">
                Daha Fazla Bilgi Edinin <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-xl relative border border-gray-200">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSI4NiI+CjxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI4NiIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTQzIDBMMCA0M2w0MyA0MyA0My00M0w0MyAweiIgZmlsbD0icmdiYSgyMjksNTcsNTMsMC4wMykiLz4KPC9zdmc+')] bg-repeat opacity-100"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Flame className="w-32 h-32 text-gray-300 drop-shadow-md" />
                </div>
              </div>
              {/* Highlight badge overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <p className="text-4xl font-black text-gray-900">%100</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Yasal Uyumluluk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 scroll-mt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Hizmetlerimiz</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">Neler Sunuyoruz?</h3>
            <p className="mt-4 text-lg text-gray-600">Her kuruma özel, 360 derece yangın güvenliği ve yönetim imkânı.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Dashboard / Panel", desc: "Tüm istatistikleri ve genel durumu tek ekrandan analiz edin.", icon: ShieldAlert },
              { title: "Varlık Yönetimi", desc: "Tesisinizdeki tüm elektronik cihaz ve tesisatları kayıt altında tutun.", icon: Flame },
              { title: "Tesis Haritası", desc: "Coğrafi işaretli veya planlı kat haritaları ile anlık cihaz durumunu görün.", icon: Map },
              { title: "Eğitim & Tatbikat", desc: "Personel sertifikasyonlarını ve rutin tahliye tatbikatlarını organize edin.", icon: BookOpen }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 group-hover:bg-primary-600 group-hover:text-white transition-colors mb-6 shadow-sm">
                  <srv.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{srv.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News/Cards Section */}
      <section id="news" className="py-24 bg-white scroll-mt-20 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Medya Merkezi</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Güncel Haberler</h3>
              <p className="text-gray-500 mt-3 text-lg">Sektördeki son gelişmeler ve yönetmelik duyuruları.</p>
            </div>
            <a href="#contact" className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition">
              Bültene Abone Ol <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Mock Article 1 */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer flex flex-col">
                <div className="h-56 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary-900/5 mix-blend-multiply"></div>
                  <BookOpen className="w-20 h-20 text-gray-300 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">Kanun & Yönetmelik</span>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">Endüstriyel Tesislerde Sprinkler Kullanımı Zorunluluğu Kapsamı Genişletildi</h3>
                  <p className="text-gray-600 mb-6 flex-1">Yeni yönetmelikle birlikte C sınıfı risk kapsamında değerlendirilen tüm lojistik depo alanlarında otomatik söndürme altyapısı mecburi hale getirildi. Corelink modülleri bu güncellemeyi entegre etti.</p>
                  <div className="flex items-center justify-between text-sm mt-auto border-t border-gray-200 pt-4">
                    <span className="font-bold text-gray-400">10 Ekim 2026</span>
                    <span className="font-bold text-primary-600 flex items-center gap-1 group-hover:underline">Devamını Oku <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </div>

              {/* Mock Article 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer flex flex-col">
                <div className="h-56 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary-900/5 mix-blend-multiply"></div>
                  <Users className="w-20 h-20 text-gray-300 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-gray-600 tracking-wider uppercase mb-3 block">Eğitim & Tatbikat</span>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">Tuzla Tersanesi Tam Kapsamlı Tahliye Raporu Yayınlandı</h3>
                  <p className="text-gray-600 mb-6 flex-1">Yaklaşık 500 personelin katıldığı tam kapsamlı tahliye organizasyonu başarıyla gerçekleştirildi ve veriler sisteme işlendi. Eksikler raporlandı.</p>
                  <div className="flex items-center justify-between text-sm mt-auto border-t border-gray-200 pt-4">
                    <span className="font-bold text-gray-400">08 Ekim 2026</span>
                    <span className="font-bold text-primary-600 flex items-center gap-1 group-hover:underline">Devamını Oku <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Feature / Social section styled professionally */}
            <div className="bg-gray-900 rounded-2xl p-10 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden h-full min-h-[400px]">
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSI4NiI+CjxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI4NiIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTQzIDBMMCA0M2w0MyA0MyA0My00M0w0MyAweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwxKSIvPgo8L3N2Zz4=')]"></div>
              <div className="z-10 flex flex-col items-center w-full">
                <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary-600/30">
                   <PlayCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4">Medya & Sosyal</h3>
                <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                  Canlı eğitim duyurularını ve yangın güvenliği ipuçlarını resmi Linkedin & YouTube kanallarımızdan izleyin.
                </p>
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Bağlantıya Geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-950 pt-20 pb-12 border-t-8 border-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <ShieldAlert className="w-8 h-8 text-primary-500" />
                <span className="font-black text-2xl text-white tracking-tight">Corelink</span>
              </div>
              <p className="text-gray-500 font-medium">Bütünsel yangın yönetimi altyapısı ile risklerinizi minimize edin. Dijital takip ile güvende kalın.</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Bağlantılar</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#about" className="hover:text-primary-500 transition-colors">Hakkımızda</a></li>
                <li><a href="#services" className="hover:text-primary-500 transition-colors">Hizmetlerimiz</a></li>
                <li><a href="#news" className="hover:text-primary-500 transition-colors">Medya Merkezi</a></li>
                <li><Link to="/login" className="hover:text-primary-500 transition-colors">Sisteme Giriş Yap</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Yasal</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#" className="hover:text-primary-500 transition-colors">Kullanım Şartları</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Gizlilik Sözleşmesi</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">KVKK Aydınlatma Metni</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Çerez Politikası</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">İletişim Kurun</h4>
              <p className="text-gray-500 mb-4 font-medium flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-600" /> 7/24 Teknik Destek
              </p>
              <a href="mailto:info@corelink.com.tr" className="text-gray-500 hover:text-white transition-colors duration-200 text-lg font-bold">
                info@corelink.com.tr
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 font-medium text-sm">
            <p>© 2026 Corelink Güvenlik Sistemleri Tic. A.Ş. Devam eden tüm patent hakları saklıdır.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
