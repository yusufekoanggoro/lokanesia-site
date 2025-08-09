import Link from 'next/link';
import BottomNav from '../components/BottomNav';

export default function Jelajah() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-yellow-50 to-yellow-100 text-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-6 text-yellow-900 tracking-tight drop-shadow-md">
            LOKANESIA
          </h1>
          <p className="text-xl font-semibold text-yellow-800 mb-4">
            Yuk, jelajahi budaya Indonesia!
          </p>
          <p className="text-md text-yellow-700 mb-12 leading-relaxed max-w-xl mx-auto">
            Klik peta dan temukan kekayaan budaya dari Sabang sampai Merauke.
          </p>

          <div className="mx-auto mb-12 max-w-xs sm:max-w-md rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
            <img
              src="/images/illustration-culture.png"
              alt="Ilustrasi Jelajahi Budaya Indonesia"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <Link
            href="/peta-budaya"
            className="inline-block px-10 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
            aria-label="Mulai Menjelajah"
          >
            Mulai Menjelajah
          </Link>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
