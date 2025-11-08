"use client";

import { useState } from "react";
import BottomNav from "../components/BottomNav";

const quizData = [
  {
    no: 1,
    question: "Berikut ini yang *bukan* termasuk keberagaman budaya Indonesia adalah …",
    image: "/",
    options: { a: "Keberagaman rumah adat", b: "Keberagaman bahasa daerah", c: "Keberagaman suku bangsa", d: "Keberagaman mata pencaharian" },
    answer: "d",
  },
  {
    no: 2,
    question: "Pakaian adat yang berasal dari provinsi Bali adalah …",
    image: "/",
    options: { a: "Payas Agung", b: "Pesa’an", c: "Baju Pangsi", d: "Kebaya" },
    answer: "a",
  },
  {
    no: 3,
    question: "Tari yang berasal dari provinsi Banten ditunjukkan oleh nomor…",
    image: "/images/soal-3.png",
    options: { a: "(1), (2) dan (3)", b: "(2), (4) dan (5)", c: "(1), (4) dan (3)", d: "(2), (5) dan (1)" },
    answer: "b",
  },
  {
    no: 4,
    question: "Konflik antar suku dapat dihindari dengan memperkokoh…",
    image: "/",
    options: { a: "Agama", b: "Persatuan dan kesatuan", c: "Kebudayaan", d: "Kekuatan setiap suku" },
    answer: "b",
  },
  {
    no: 5,
    question: "Pernyataan yang tepat berdasarkan keberagaman budaya pada gambar adalah…",
    image: "/images/soal-5.png",
    options: { a: "Alat musik A dinamakan Keso-keso", b: "Alat musik B dinamakan Kolintang", c: "Alat musik A berasal dari Sumatera Selatan", d: "Alat musik B berasal dari Banten" },
    answer: "a",
  },
  {
    no: 6,
    question: "Tari Saman berasal dari …",
    image: "/",
    options: { a: "Sumatera Barat", b: "Aceh", c: "Kalimantan Timur", d: "Sulawesi Selatan" },
    answer: "b",
  },
  {
    no: 7,
    question: 'Lagu daerah "Ampar-Ampar Pisang" berasal dari …',
    image: "/",
    options: { a: "Kalimantan Selatan", b: "Jawa Tengah", c: "Sumatera Utara", d: "Riau" },
    answer: "a",
  },
  {
    no: 8,
    question: "Tari Piring berasal dari daerah …",
    image: "/",
    options: { a: "Sumatera Barat", b: "Riau", c: "Bengkulu", d: "Sumatera Selatan" },
    answer: "d",
  },
  {
    no: 9,
    question: 'Lagu "Apuse" berasal dari daerah…',
    image: "/",
    options: { a: "Banten", b: "Papua", c: "Sumatera", d: "Sulawesi" },
    answer: "b",
  },
  {
    no: 10,
    question: "Gambar di atas merupakan rumah adat Banjar yang berasal dari…",
    image: "/images/soal-10.png",
    options: { a: "Sumatera Selatan", b: "Kalimantan Tengah", c: "Kalimantan Selatan", d: "Jawa Tengah" },
    answer: "c",
  },
  {
    no: 11,
    question: "Tari Saman merupakan tarian yang berasal dari…",
    image: "/",
    options: { a: "DKI Jakarta", b: "Maluku", c: "Banten", d: "Aceh" },
    answer: "d",
  },
  {
    no: 12,
    question: "Gudeg merupakan makanan khas dari …",
    image: "/",
    options: { a: "Yogyakarta", b: "Surabaya", c: "Bandung", d: "Medan" },
    answer: "a",
  },
  {
    no: 13,
    question: 'Lagu "Kicir-kicir" berasal dari…',
    image: "/",
    options: { a: "Kalimantan Utara", b: "Sumatera Selatan", c: "Banten", d: "DKI Jakarta" },
    answer: "d",
  },
  {
    no: 14,
    question: "Gambar tersebut merupakan makanan khas Maluku Utara yang bernama…",
    image: "/images/soal-14.png",
    options: { a: "Gohu Ikan", b: "Halua Kenari", c: "Ikan Sambal Matah", d: "Papeda" },
    answer: "a",
  },
  {
    no: 15,
    question: "Rendang merupakan makanan khas yang berasal dari…",
    image: "/",
    options: { a: "Riau", b: "Sumatera Barat", c: "Lampung", d: "Jambi" },
    answer: "b",
  },
  {
    no: 16,
    question: "Tari yang berasal dari provinsi Bali ditunjukkan oleh nomor…",
    image: "/images/soal-16.png",
    options: { a: "(1), (2) dan (3)", b: "(2), (4) dan (5)", c: "(1), (4) dan (3)", d: "(3), (5) dan (1)" },
    answer: "d",
  },
  {
    no: 17,
    question: 'Alat musik "Angklung" berasal dari daerah…',
    image: "/",
    options: { a: "Jawa Barat", b: "Jawa Tengah", c: "Jawa Timur", d: "Banten" },
    answer: "a",
  },
  {
    no: 18,
    question: 'Lagu "Si Patokaan" berasal dari…',
    image: "/",
    options: { a: "NTT", b: "Bali", c: "Sulawesi Utara", d: "Maluku" },
    answer: "c",
  },
  {
    no: 19,
    question: "Pempek merupakan makanan khas yang berasal dari…",
    image: "/",
    options: { a: "Padang", b: "Medan", c: "Pontianak", d: "Palembang" },
    answer: "d",
  },
  {
    no: 20,
    question: 'Lagu "Tokecang" berasal dari daerah…',
    image: "/",
    options: { a: "Banten", b: "Jawa Barat", c: "Jawa Timur", d: "Jawa Tengah" },
    answer: "b",
  },
  // Soal 21-50
  { no: 21, question: "Makanan khas Papua yang terbuat dari sagu adalah…", image: "/", options: { a: "Soto Banjar", b: "Pepes Ikan", c: "Papeda", d: "Sate Lilit" }, answer: "c" },
  { no: 22, question: "Gambar di atas merupakan pakaian adat dari Papua yang bernama…", image: "/images/soal-22.png", options: { a: "Koteka dan rok rumbai", b: "Baju Pangsi", c: "Baju Ta’a", d: "Sapei Sapaq" }, answer: "a" },
  { no: 23, question: "Manakah yang merupakan seni pertunjukan Papua Barat Daya?", image: "/", options: { a: "Tari Adat Suku Marind", b: "Tari Yospan", c: "Festival Budaya Lembah Baliem", d: "Tarian Perang Papua" }, answer: "d" },
  { no: 24, question: "Manakah yang merupakan alat musik daerah Papua Pegunungan?", image: "/", options: { a: "Japen", b: "Tifa", c: "Gambang Kayu", d: "Pikon (Kaido)" }, answer: "d" },
  { no: 25, question: "Manakah yang merupakan seni pertunjukan Maluku Utara?", image: "/", options: { a: "Ma’badong", b: "Bambu Gila", c: "Kabasaran Show", d: "Totobuang" }, answer: "b" },
  { no: 26, question: "Manakah tarian yang berasal dari Gorontalo?", image: "/", options: { a: "Tari Saronde", b: "Tari Pamonte", c: "Tari Sayyang Pattuddu’", d: "Tari Pakarena" }, answer: "a" },
  { no: 27, question: "Mana saja yang merupakan makanan Sulawesi Tengah?", image: "/", options: { a: "Mie Sagu dan Konro", b: "Coto Makassar, Pallubasa dan Konro", c: "Kaledo, Uta Kelo dan Lalampa", d: "Jepa dan Kue Kui-kui" }, answer: "c" },
  { no: 28, question: "Apa nama alat musik di bawah ini?", image: "/images/soal-28.png", options: { a: "Keris", b: "Mandau", c: "Golok", d: "Celurit" }, answer: "b" },
  { no: 29, question: "Dimana ibu kota provinsi Jambi berada?", image: "/", options: { a: "Jambi", b: "Tebo", c: "Muaro Jambi", d: "Sungai Penuh" }, answer: "a" },
  { no: 30, question: "Tari yang berasal dari provinsi Bangka Belitung ditunjukkan oleh nomor…", image: "/images/soal-30.png", options: { a: "(1) dan (3)", b: "(2) dan (5)", c: "(1) dan (3)", d: "(3) dan (1)" }, answer: "a" },
  { no: 31, question: "Manakah yang merupakan seni pertunjukan Bengkulu?", image: "/", options: { a: "Dulmuluk", b: "Tabot", c: "Cangget", d: "Mamapas Lewu" }, answer: "b" },
  { no: 32, question: "Gambar di atas merupakan rumah adat Lampung yang bernama…", image: "/images/soal-32.png", options: { a: "Nuwo Sesat", b: "Rumah Panggung", c: "Rumah Panjang", d: "Lamin" }, answer: "a" },
  { no: 33, question: "Manakah yang merupakan seni pertunjukan Kalimantan Barat?", image: "/", options: { a: "Hudoq Festival", b: "Sandung", c: "Wayang", d: "Mamapas Lewu" }, answer: "b" },
  { no: 34, question: "Bagaimana cara menggunakan alat musik Japen?", image: "/images/soal-34.png", options: { a: "Ditiup", b: "Dipetik", c: "Dipukul", d: "Digoyang" }, answer: "b" },
  { no: 35, question: "Manakah lagu daerah yang berasal dari Kalimantan Selatan?", image: "/", options: { a: "Gemufamire", b: "Ampar-Ampar Pisang", c: "Suwe Ora Jamu", d: "Manuk Dadali" }, answer: "b" },
  { no: 36, question: "Alat musik tersebut berasal dari NTT yang bernama…", image: "/images/soal-36.png", options: { a: "Kolintang", b: "Japen", c: "Sasando", d: "Serunai" }, answer: "c" },
  { no: 37, question: "Manakah yang merupakan ibu kota provinsi NTB?", image: "/", options: { a: "Bima", b: "Mataram", c: "Sumbawa", d: "Lombok" }, answer: "b" },
  { no: 38, question: "Tari yang berasal dari provinsi Bali ditunjukkan oleh nomor…", image: "/images/soal-38.png", options: { a: "(1), (2) dan (3)", b: "(2), (3) dan (4)", c: "(1), (4) dan (3)", d: "(3), (5) dan (1)" }, answer: "b" },
  { no: 39, question: "Manakah yang merupakan makanan khas Jawa Barat?", image: "/", options: { a: "Sate Lilit", b: "Kerak Telor", c: "Gudeg", d: "Batagor" }, answer: "d" },
  { no: 40, question: "Cara menggunakan alat musik ini adalah dengan cara…", image: "/images/soal-40.png", options: { a: "Dipukul", b: "Dipetik", c: "Ditiup", d: "Ditekan" }, answer: "a" },
  { no: 41, question: "Manakah yang merupakan seni pertunjukan Jawa Timur?", image: "/", options: { a: "Wayang Kulit", b: "Tari Kuda Lumping", c: "Lenong", d: "Ludruk" }, answer: "a" },
  { no: 42, question: "Dimana ibu kota provinsi Kalimantan Selatan berada?", image: "/", options: { a: "Banjarbaru", b: "Martapura", c: "Banjarmasin", d: "Marabahan" }, answer: "c" },
  { no: 43, question: "Apa nama pakaian adat tradisional pria Kalimantan Timur?", image: "/images/soal-43.png", options: { a: "Baju Ta’a", b: "Baju Baamar Galung Pancar Mata", c: "Sapei Sapaq", d: "Baju Bagajah Gamuling Baular Lulut" }, answer: "c" },
  { no: 44, question: "Dimana ibu kota provinsi Kalimantan Utara berada?", image: "/", options: { a: "Tarakan", b: "Bulungan", c: "Tanjung Selor", d: "Malinau" }, answer: "c" },
  { no: 45, question: "Gambar di atas merupakan rumah limas yang berasal dari provinsi…", image: "/images/soal-45.png", options: { a: "Sulawesi Tenggara", b: "Sumatera Selatan", c: "Kepulauan Riau", d: "Papua Pegunungan" }, answer: "b" },
  { no: 46, question: "Dimana ibu kota provinsi Papua Barat berada?", image: "/", options: { a: "Jayapura", b: "Manokwari", c: "Merauke", d: "Wanggar, Nabire" }, answer: "b" },
  { no: 47, question: "Manakah lagu daerah yang berasal dari Papua Selatan?", image: "/", options: { a: "Jayawijaya Hanorasuok", b: "E Mambo Simbo", c: "Kampuang Nan Jauh di Mato", d: "Yamko Rambe Yambo" }, answer: "b" },
  { no: 48, question: "Manakah yang merupakan seni pertunjukan Maluku?", image: "/", options: { a: "Ma’badong", b: "Mpae", c: "Kabasaran Show", d: "Totobuang" }, answer: "d" },
  { no: 49, question: "Dimana ibu kota provinsi Sulawesi Utara berada?", image: "/", options: { a: "Manado", b: "Bitung", c: "Kotamobagu", d: "Tomohon" }, answer: "a" },
  { no: 50, question: "Apa nama alat musik ini…", image: "/images/soal-50.png", options: { a: "Serunai", b: "Lalove", c: "Palo-palo", d: "Gambang Kayu" }, answer: "c" },
];


export default function EvaluasiPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleStart = () => setStarted(true);

  const handleAnswer = (option) => setSelectedAnswer(option);

  const handleNext = () => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setFinished(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-yellow-50 to-yellow-100 text-center pb-[88px] font-sans"
        style={{
          backgroundImage: "url('/images/5.jpg')",
          backgroundRepeat: "repeat",
          // backgroundSize: "contain", // atau "cover"
          backgroundPosition: "center",
          //  width: "100%",
          // backgroundColor: "#000",
          height: `calc(100vh - 59px)`, // tidak menutupi bottomnav
        }}
      >
        {!started ? (
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
            {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-yellow-900 tracking-tight drop-shadow-md">
              Evaluasi Siswa
            </h1> */}
            {/* <p className="text-lg sm:text-xl font-semibold text-yellow-800 mb-4">
              Yuk, uji pengetahuanmu tentang budaya Indonesia!
            </p>
            <p className="text-md sm:text-lg text-yellow-700 mb-12 leading-relaxed max-w-xl mx-auto">
              Jawablah setiap pertanyaan dengan benar untuk melihat seberapa jauh kamu memahami keberagaman budaya di Indonesia.
            </p> */}

            {/* <div className="mx-auto mb-12 max-w-xs sm:max-w-md rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <img
                src="/images/illustration-culture.png"
                alt="Ilustrasi Evaluasi Budaya Indonesia"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div> */}

            <button
              onClick={handleStart}
              className="inline-block px-10 py-3 bg-yellow-600 text-white font-semibold rounded-full shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
              aria-label="Mulai Evaluasi"
            >
              Mulai Evaluasi
            </button>
          </div>
        ) : finished ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Evaluasi Selesai!</h2>
            <p className="text-lg mb-2">
              Skor kamu: <span className="font-bold">{score}</span> dari{" "}
              {quizData.length}
            </p>
            <p className="text-gray-700 mb-4">
              Terus belajar dan tingkatkan pengetahuanmu tentang budaya Indonesia!
            </p>
            <button
              onClick={handleRestart}
              className="mt-4 px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Ulangi Evaluasi
            </button>
          </div>
        ) : (
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Soal {quizData[currentQuestion].no} dari {quizData.length}
            </h2>
            <p className="text-gray-800 font-medium mb-4">
              {quizData[currentQuestion].question}
            </p>

            {quizData[currentQuestion].image !== "/" && (
              <img
                src={quizData[currentQuestion].image}
                alt="Gambar soal"
                className="mb-4 rounded-lg w-full"
              />
            )}

            <div className="space-y-3">
              {Object.entries(quizData[currentQuestion].options).map(
                ([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswer(key)}
                    className={`w-full text-left px-4 py-2 rounded-lg border transition ${
                      selectedAnswer === key
                        ? "bg-yellow-200 border-yellow-500"
                        : "bg-white border-gray-300 hover:bg-yellow-50"
                    }`}
                  >
                    <span className="font-semibold mr-2 uppercase">{key}.</span>
                    {value}
                  </button>
                )
              )}
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`px-5 py-2 rounded-lg font-medium ${
                  selectedAnswer
                    ? "bg-yellow-500 text-white hover:bg-yellow-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {currentQuestion + 1 === quizData.length ? "Selesai" : "Lanjut"}
              </button>
            </div>
          </div>
        )}
      </main>
      <BottomNav />
    </>
  );
}
