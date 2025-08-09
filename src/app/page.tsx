import BottomNav from './components/BottomNav';

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-yellow-50 to-yellow-100 text-center">
        <div className="bg-white bg-opacity-80 rounded-xl shadow-lg max-w-3xl p-10">
          <h1 className="text-5xl font-extrabold mb-6 text-yellow-900 drop-shadow-md">
            Selamat Datang di <span className="text-yellow-600">LOKANESIA</span>
          </h1>
          <p className="text-lg text-yellow-800 mb-6 leading-relaxed">
            LOKANESIA adalah aplikasi belajar tentang keberagaman budaya Indonesia.  
            Di dalamnya, kamu bisa mengenal rumah adat, pakaian tradisional, tarian, lagu daerah, dan alat musik dari berbagai provinsi di Indonesia.
          </p>
          <p className="text-md text-yellow-700 leading-relaxed">
            Aplikasi ini dibuat untuk membantu siswa belajar budaya Indonesia dengan cara yang seru dan mudah dimengerti, serta menumbuhkan rasa cinta dan bangga terhadap budaya bangsa.  
            Dengan LOKANESIA, belajar budaya jadi lebih menyenangkan!
          </p>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
