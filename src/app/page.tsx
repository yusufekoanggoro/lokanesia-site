import BottomNav from './components/BottomNav';

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-yellow-100 via-yellow-50 to-yellow-100 text-center font-sans">
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl max-w-3xl w-full sm:w-4/5 md:w-3/4 p-8 sm:p-12 mx-auto">
          
          {/* Ilustrasi SVG rumah adat */}
          <div className="mb-8 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-32 w-32 text-yellow-500"
              fill="none"
              viewBox="0 0 64 64"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 30 L32 4 L62 30 V60 H2 Z" /> {/* atap rumah */}
              <rect x="20" y="30" width="24" height="30" fill="currentColor" className="text-yellow-300" /> {/* badan rumah */}
              <rect x="30" y="45" width="8" height="15" fill="white" /> {/* pintu */}
              <line x1="32" y1="4" x2="32" y2="30" stroke="currentColor" /> {/* tiang tengah */}
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-yellow-900 drop-shadow-md tracking-tight">
            Selamat Datang di{' '}
            <span className="text-yellow-600">LOKANESIA</span>
          </h1>
          <hr className="border-yellow-300 mb-8 mx-auto w-24" />
          <p className="text-lg text-yellow-800 mb-8 leading-relaxed">
            LOKANESIA adalah aplikasi belajar tentang keberagaman budaya Indonesia.  
            Di dalamnya, kamu bisa mengenal rumah adat, pakaian tradisional, tarian, lagu daerah, dan alat musik dari berbagai provinsi di Indonesia.
          </p>
          <p className="text-md text-yellow-700 mb-10 leading-relaxed">
            Aplikasi ini dibuat untuk membantu siswa belajar budaya Indonesia dengan cara yang seru dan mudah dimengerti, serta menumbuhkan rasa cinta dan bangga terhadap budaya bangsa.  
            Dengan LOKANESIA, belajar budaya jadi lebih menyenangkan!
          </p>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
