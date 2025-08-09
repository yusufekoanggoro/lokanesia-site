import BottomNav from '../components/BottomNav';
import Link from 'next/link';

export default function Quiz() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-100 px-6 py-20 text-center">
        <div className="w-full max-w-3xl bg-white bg-opacity-90 rounded-3xl shadow-xl p-10">
          <h1 className="text-5xl font-extrabold mb-8 text-yellow-900 tracking-wide drop-shadow-md">
            Kuis Budaya Nusantara
          </h1>

          <div className="mx-auto mb-10 max-w-xs sm:max-w-sm rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src="/images/illustration-culture.png"
              alt="Ilustrasi budaya Nusantara"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <p className="text-md text-yellow-700 font-medium mb-8 leading-relaxed max-w-xl mx-auto">
            Sudah siap menguji seberapa banyak kamu tahu tentang budaya Indonesia?
          </p>

          <Link
            href="/peta-kuis"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-10 rounded-full shadow-md transition-colors duration-300 animate-pulse hover:animate-none"
            aria-label="Mulai Kuis Budaya Nusantara"
          >
            Ayo Mulai Kuis!
          </Link>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
