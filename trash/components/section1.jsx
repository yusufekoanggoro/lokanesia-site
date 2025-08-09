

export default function Section1() {
  return (
    <section className="relative bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Teks */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Belajar dan Kenali <br /> Keberagaman Budaya Nusantara
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            LOKANESIA adalah aplikasi belajar budaya Indonesia yang membantu kamu mengenal rumah adat, pakaian tradisional, tarian, lagu daerah, dan alat musik dari seluruh provinsi.
          </p>
          <button className="bg-white text-pink-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-pink-50 transition">
            Mulai Belajar
          </button>
        </div>

        {/* Gambar / Ilustrasi */}
        <div className="md:w-1/2">
          <img
            src="/images/illustration-culture.png"
            alt="Ilustrasi budaya Nusantara"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
