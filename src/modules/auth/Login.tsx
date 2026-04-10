import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldAlert, Lock } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side, login form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <div className="flex items-center gap-3 text-primary-600 font-bold text-3xl">
              <ShieldAlert className="w-10 h-10" />
              <span>Corelink</span>
            </div>
            <h2 className="mt-8 text-2xl font-bold text-gray-900 leading-9">
              Hesabınıza Giriş Yapın
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Henüz hesabınız yok mu?{' '}
              <Link to="/register" className="font-semibold text-primary-600 hover:text-primary-500">
                Kayıt Olun
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  E-posta Adresi
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Parola
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                  />
                  <label htmlFor="remember-me" className="ml-3 text-sm text-gray-700">
                    Beni Hatırla
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-primary-600 hover:text-primary-500">
                    Şifremi unuttum?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center gap-2 items-center rounded-md bg-primary-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  <Lock className="w-4 h-4" />
                  Giriş Yap
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side, feature image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-primary-900 flex flex-col justify-center px-16 text-white">
          <blockquote className="max-w-2xl">
             <div className="text-5xl mb-6 opacity-30">"</div>
            <p className="text-3xl font-medium leading-relaxed mb-6">
              "Corelink ile yangın söndürme sistemleri bakımını kağıt tabanlı karmaşadan kurtararak tam dijital ve şeffaf bir platforma dönüştürdük."
            </p>
            <footer className="mt-8">
              <p className="text-xl font-bold">Gerçek Zamanlı Uyum</p>
              <p className="text-primary-200 mt-1">Yangın Güvenliği Yönetimi Sistemi</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
