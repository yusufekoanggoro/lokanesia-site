"use client";

import { useState } from "react";
import BottomNav from "../components/BottomNav";

const quizData = [
  {
    no: 1,
    question:
      "Indonesia memiliki banyak bentuk keberagaman. Ketika mempelajari budaya Indonesia, kamu menemukan rumah adat, bahasa daerah, dan suku bangsa sebagai bagian dari keberagaman. Manakah yang bukan termasuk contoh keberagaman budaya dalam konteks tersebut?",
    images: [],
    options: {
      a: "Keberagaman rumah adat",
      b: "Keberagaman bahasa daerah",
      c: "Keberagaman suku bangsa",
      d: "Keberagaman mata pencaharian",
    },
    answer: "d",
  },
  {
    no: 2,
    question:
      "Dalam kegiatan mengenal pakaian adat Nusantara, kamu melihat beberapa pakaian yang memiliki ciri khas daerah masing-masing. Pakaian adat yang berasal dari Provinsi Bali adalah ...",
    images: [],
    options: {
      a: "Payas Agung",
      b: "Pesa’an",
      c: "Baju Pangsi",
      d: "Kebaya",
    },
    answer: "a",
  },
  {
    no: 3,
    question:
      "Dalam sebuah pameran budaya Banten, kamu diminta mengelompokkan tarian yang berasal dari Banten. Perhatikan daftar berikut: (1) Tari Jaipong, (2) Tari Cokek, (3) Tari Saman, (4) Tari Rampak Bedug, (5) Tari Katuran. Kelompok tarian yang sesuai dengan jawaban pada bahan ajar adalah ...",
    images: [],
    options: {
      a: "(1), (2), dan (3)",
      b: "(2), (4), dan (5)",
      c: "(1), (4), dan (3)",
      d: "(2), (5), dan (1)",
    },
    answer: "b",
  },
  {
    no: 4,
    question:
      "Indonesia memiliki banyak suku dan budaya. Perbedaan tersebut merupakan kekayaan, tetapi jika tidak disikapi dengan baik dapat menimbulkan konflik. Sikap yang paling tepat untuk menjaga kehidupan masyarakat tetap harmonis adalah memperkokoh ...",
    images: [],
    options: {
      a: "Agama",
      b: "Persatuan dan kesatuan",
      c: "Kebudayaan",
      d: "Kekuatan setiap suku",
    },
    answer: "b",
  },
  {
    no: 5,
    question:
      "Perhatikan gambar alat musik pada soal. Dalam kegiatan mengenal keberagaman alat musik daerah, kamu diminta memilih pernyataan yang sesuai dengan gambar tersebut. Pernyataan yang tepat berdasarkan bahan ajar adalah ...",
    images: ["/images/soal%205a.jpg", "/images/soal%205b.jpg"],
    options: {
      a: "Alat musik A dinamakan Keso-keso",
      b: "Alat musik B dinamakan Kolintang",
      c: "Alat musik A berasal dari Sumatera Selatan",
      d: "Alat musik B berasal dari Banten",
    },
    answer: "a",
  },
  {
    no: 6,
    question:
      "Dalam kegiatan mengenal seni pertunjukan Indonesia, kamu melihat video tarian yang dilakukan secara berkelompok dengan gerakan yang kompak. Tarian tersebut dikenal sebagai Tari Saman. Tari Saman berasal dari ...",
    images: [],
    options: {
      a: "Sumatera Barat",
      b: "Aceh",
      c: "Kalimantan Timur",
      d: "Sulawesi Selatan",
    },
    answer: "b",
  },
  {
    no: 7,
    question:
      "Saat mendengarkan lagu daerah dalam kegiatan pembelajaran budaya, kamu mendengar lagu “Ampar-Ampar Pisang”. Untuk melengkapi informasi tentang lagu tersebut, daerah asal yang tepat adalah ...",
    images: [],
    options: {
      a: "Kalimantan Selatan",
      b: "Jawa Tengah",
      c: "Sumatera Utara",
      d: "Riau",
    },
    answer: "a",
  },
  {
    no: 8,
    question:
      "Dalam kegiatan mengenal kesenian Nusantara, kamu melihat pertunjukan Tari Piring. Agar dapat menghubungkan kesenian tersebut dengan daerah asalnya, kamu perlu memilih daerah yang sesuai dengan bahan ajar, yaitu ...",
    images: [],
    options: {
      a: "Sumatera Barat",
      b: "Riau",
      c: "Bengkulu",
      d: "Sumatera Selatan",
    },
    answer: "a",
  },
  {
    no: 9,
    question:
      "Kamu mendengarkan lagu “Apuse” dalam kegiatan pengenalan lagu daerah. Agar informasi budaya yang kamu tuliskan tepat, lagu tersebut berasal dari ...",
    images: [],
    options: {
      a: "Banten",
      b: "Papua",
      c: "Sumatera",
      d: "Sulawesi",
    },
    answer: "b",
  },
  {
    no: 10,
    question:
      "Perhatikan gambar rumah adat Banjar pada soal. Ketika membuat catatan budaya berdasarkan gambar tersebut, rumah adat Banjar tersebut berasal dari ...",
    images: ["/images/soal%2010.jpg"],
    options: {
      a: "Sumatera Selatan",
      b: "Kalimantan Tengah",
      c: "Kalimantan Selatan",
      d: "Jawa Tengah",
    },
    answer: "c",
  },
  {
    no: 11,
    question:
      "Dalam kegiatan mengenal tarian tradisional Indonesia, kamu kembali menemukan Tari Saman yang dikenal sebagai salah satu kesenian daerah. Tari tersebut berasal dari ...",
    images: [],
    options: {
      a: "DKI Jakarta",
      b: "Maluku",
      c: "Banten",
      d: "Aceh",
    },
    answer: "d",
  },
  {
    no: 12,
    question:
      "Dalam kegiatan kuliner Nusantara, kamu menemukan makanan yang dibuat dari nangka muda dan dikenal sebagai makanan khas daerah. Makanan tersebut adalah Gudeg. Gudeg berasal dari ...",
    images: [],
    options: {
      a: "Yogyakarta",
      b: "Surabaya",
      c: "Bandung",
      d: "Medan",
    },
    answer: "a",
  },
  {
    no: 13,
    question:
      "Dalam kegiatan mengenal lagu daerah Betawi, kamu mendengarkan lagu “Kicir-Kicir”. Lagu tersebut merupakan bagian dari budaya daerah yang berasal dari ...",
    images: [],
    options: {
      a: "Kalimantan Utara",
      b: "Sumatera Selatan",
      c: "Banten",
      d: "DKI Jakarta",
    },
    answer: "d",
  },
  {
    no: 14,
    question:
      "Perhatikan gambar makanan pada soal. Kamu sedang membuat katalog digital makanan khas Nusantara dan perlu mencocokkan gambar dengan namanya. Makanan khas Maluku Utara pada gambar tersebut bernama ...",
    images: ["/images/soal%2014.jpg"],
    options: {
      a: "Gohu Ikan",
      b: "Halua Kenari",
      c: "Ikan Sambal Matah",
      d: "Papeda",
    },
    answer: "a",
  },
  {
    no: 15,
    question:
      "Rendang dikenal sebagai makanan yang memiliki cita rasa khas dan menggunakan berbagai rempah. Ketika kamu memasukkannya ke dalam peta kuliner budaya Indonesia, rendang dicatat sebagai makanan khas yang berasal dari ...",
    images: [],
    options: {
      a: "Riau",
      b: "Sumatera Barat",
      c: "Lampung",
      d: "Jambi",
    },
    answer: "b",
  },
  {
    no: 16,
    question:
      "Dalam kegiatan mengelompokkan tarian daerah, kamu menemukan: (1) Tari Kecak, (2) Tari Cokek, (3) Tari Barong, (4) Tari Rampak Bedug, (5) Tari Pendet. Kelompok tarian yang sesuai dengan jawaban pada bahan ajar untuk Provinsi Bali adalah ...",
    images: [],
    options: {
      a: "(1), (2), dan (3)",
      b: "(2), (4), dan (5)",
      c: "(1), (4), dan (3)",
      d: "(3), (5), dan (1)",
    },
    answer: "d",
  },
  {
    no: 17,
    question:
      "Saat mengenal alat musik Nusantara, kamu menemukan angklung yang dibuat dari bambu dan dimainkan dengan cara digoyangkan. Angklung berasal dari ...",
    images: [],
    options: {
      a: "Jawa Barat",
      b: "Jawa Tengah",
      c: "Jawa Timur",
      d: "Banten",
    },
    answer: "a",
  },
  {
    no: 18,
    question:
      "Dalam kegiatan mengenal lagu daerah, kamu mendengarkan lagu “Si Patokaan”. Agar dapat melengkapi informasi budaya tersebut, lagu itu berasal dari ...",
    images: [],
    options: {
      a: "NTT",
      b: "Bali",
      c: "Sulawesi Utara",
      d: "Maluku",
    },
    answer: "c",
  },
  {
    no: 19,
    question:
      "Dalam kegiatan mengenal makanan khas daerah, kamu menemukan pempek yang dikenal sebagai makanan khas Palembang. Palembang berada di Provinsi ...",
    images: [],
    options: {
      a: "Padang",
      b: "Medan",
      c: "Pontianak",
      d: "Palembang",
    },
    answer: "a",
  },
  {
    no: 20,
    question:
      "Saat mempelajari lagu daerah Jawa Barat, kamu mendengarkan lagu “Tokecang”. Lagu tersebut merupakan bagian dari budaya masyarakat ...",
    images: [],
    options: {
      a: "Banten",
      b: "Jawa Barat",
      c: "Jawa Timur",
      d: "Jawa Tengah",
    },
    answer: "b",
  },
  {
    no: 21,
    question:
      "Dalam kegiatan mengenal makanan khas Papua, kamu menemukan makanan yang dibuat dari bahan utama sagu. Makanan tersebut adalah ...",
    images: [],
    options: {
      a: "Soto Banjar",
      b: "Pepes Ikan",
      c: "Papeda",
      d: "Sate Lilit",
    },
    answer: "c",
  },
  {
    no: 22,
    question:
      "Perhatikan gambar pakaian adat Papua pada soal. Dalam katalog budaya, pakaian tersebut perlu diberi nama agar informasi yang diberikan tepat. Pakaian adat tersebut dikenal sebagai ...",
    images: ["/images/soal%2022.jpg"],
    options: {
      a: "Koteka dan rok rumbai",
      b: "Baju Pangsi",
      c: "Baju Ta’a",
      d: "Sapei Sapaq",
    },
    answer: "a",
  },
  {
    no: 23,
    question:
      "Dalam kegiatan mengenal seni pertunjukan dari berbagai wilayah Papua, kamu diminta memilih seni pertunjukan yang pada bahan ajar dicantumkan sebagai budaya Papua Barat Daya. Jawaban yang sesuai adalah ...",
    images: [],
    options: {
      a: "Tari Adat Suku Marind",
      b: "Tari Yospan",
      c: "Festival Budaya Lembah Baliem",
      d: "Tarian Perang Papua",
    },
    answer: "d",
  },
  {
    no: 24,
    question:
      "Saat membuat katalog alat musik daerah, kamu menemukan alat musik yang dicantumkan sebagai alat musik Papua Pegunungan. Alat musik tersebut adalah ...",
    images: [],
    options: {
      a: "Japen",
      b: "Tifa",
      c: "Gambang Kayu",
      d: "Pikon (Kaido)",
    },
    answer: "d",
  },
  {
    no: 25,
    question:
      "Dalam kegiatan mengenal seni pertunjukan Maluku Utara, kamu menemukan beberapa pilihan kesenian. Berdasarkan bahan ajar, yang termasuk seni pertunjukan Maluku Utara adalah ...",
    images: [],
    options: {
      a: "Ma’badong",
      b: "Bambu Gila",
      c: "Kabasaran Show",
      d: "Totobuang",
    },
    answer: "b",
  },
  {
    no: 26,
    question:
      "Ketika membuat daftar tarian Nusantara, kamu diminta memilih tarian yang berasal dari Gorontalo. Tarian yang tepat adalah ...",
    images: [],
    options: {
      a: "Tari Saronde",
      b: "Tari Pamonte",
      c: "Tari Sayyang Pattuddu’",
      d: "Tari Pakarena",
    },
    answer: "a",
  },
  {
    no: 27,
    question:
      "Dalam kegiatan kuliner daerah, kamu diminta memilih kelompok makanan yang pada bahan ajar termasuk makanan Sulawesi Tengah. Pilihan yang tepat adalah ...",
    images: [],
    options: {
      a: "Mie Sagu dan Konro",
      b: "Coto Makassar, Pallubasa dan Konro",
      c: "Kaledo, Uta Kelo dan Lalampa",
      d: "Jepa dan Kue Kui-kui",
    },
    answer: "c",
  },
  {
    no: 28,
    question:
      "Perhatikan gambar alat musik pada soal. Saat mengisi katalog alat musik tradisional, kamu perlu menentukan nama alat musik tersebut. Berdasarkan bahan ajar, alat musik itu adalah ...",
    images: ["/images/soal%2028.jpg"],
    options: {
      a: "Keris",
      b: "Mandau",
      c: "Golok",
      d: "Celurit",
    },
    answer: "b",
  },
  {
    no: 29,
    question:
      "Ketika membuat peta digital budaya Provinsi Jambi, kamu perlu mencantumkan ibu kotanya. Ibu kota Provinsi Jambi adalah ...",
    images: [],
    options: {
      a: "Jambi",
      b: "Tebo",
      c: "Muaro Jambi",
      d: "Sungai Penuh",
    },
    answer: "a",
  },
  {
    no: 30,
    question:
      "Dalam kegiatan mengelompokkan tarian daerah, kamu menemukan: (1) Tari Campak, (2) Tari Cokek, (3) Tari Sepen, (4) Tari Rampak Bedug, (5) Tari Pendet. Berdasarkan bahan ajar, tarian yang berasal dari Bangka Belitung ditunjukkan oleh nomor ...",
    images: [],
    options: {
      a: "(1) dan (3)",
      b: "(2) dan (5)",
      c: "(1) dan (3)",
      d: "(3) dan (1)",
    },
    answer: "a",
  },
  {
    no: 31,
    question:
      "Dalam kegiatan mengenal seni pertunjukan daerah, kamu diminta memilih seni pertunjukan yang pada bahan ajar dikaitkan dengan Bengkulu. Jawaban yang sesuai adalah ...",
    images: [],
    options: {
      a: "Dulmuluk",
      b: "Tabot",
      c: "Cangget",
      d: "Mamapas Lewu",
    },
    answer: "b",
  },
  {
    no: 32,
    question:
      "Perhatikan gambar rumah adat pada soal. Saat membuat katalog rumah adat Nusantara, kamu perlu mencantumkan nama rumah adat tersebut. Rumah adat Lampung pada gambar bernama ...",
    images: ["/images/soal%2032.jpg"],
    options: {
      a: "Nuwo Sesat",
      b: "Rumah Panggung",
      c: "Rumah Panjang",
      d: "Lamin",
    },
    answer: "a",
  },
  {
    no: 33,
    question:
      "Dalam kegiatan mengenal seni pertunjukan Kalimantan Barat, kamu menemukan beberapa pilihan. Berdasarkan bahan ajar, jawaban yang ditandai sebagai seni pertunjukan Kalimantan Barat adalah ...",
    images: [],
    options: {
      a: "Hudoq Festival",
      b: "Sandung",
      c: "Wayang",
      d: "Mamapas Lewu",
    },
    answer: "a",
  },
  {
    no: 34,
    question:
      "Ketika mempelajari alat musik Japen, kamu ingin mengetahui cara memainkannya agar tidak salah saat mempraktikkannya. Japen digunakan dengan cara ...",
    images: [],
    options: {
      a: "Ditiup",
      b: "Dipetik",
      c: "Dipukul",
      d: "Digoyang",
    },
    answer: "b",
  },
  {
    no: 35,
    question:
      "Saat membuat daftar lagu daerah Kalimantan Selatan, kamu menemukan beberapa judul lagu. Lagu yang sesuai dengan bahan ajar adalah ...",
    images: [],
    options: {
      a: "Gemufamire",
      b: "Ampar-Ampar Pisang",
      c: "Suwe Ora Jamu",
      d: "Manuk Dadali",
    },
    answer: "b",
  },
  {
    no: 36,
    question:
      "Perhatikan gambar alat musik pada soal. Dalam kegiatan mengenal alat musik NTT, kamu perlu menentukan nama alat musik tersebut. Alat musik itu adalah ...",
    images: ["/images/soal%2036.jpg"],
    options: {
      a: "Kolintang",
      b: "Japen",
      c: "Sasando",
      d: "Serunai",
    },
    answer: "c",
  },
  {
    no: 37,
    question:
      "Ketika membuat peta budaya Nusa Tenggara Barat, kamu perlu mencantumkan ibu kota provinsinya. Ibu kota Provinsi NTB adalah ...",
    images: [],
    options: {
      a: "Bima",
      b: "Mataram",
      c: "Sumbawa",
      d: "Lombok",
    },
    answer: "b",
  },
  {
    no: 38,
    question:
      "Perhatikan daftar alat musik berikut: (1) Gambus, (2) Tehyan, (3) Tanjidor, (4) Rebana, (5) Gendang. Dalam bahan ajar, kelompok yang ditandai sebagai alat musik DKI Jakarta adalah ...",
    images: [],
    options: {
      a: "(1), (2), dan (3)",
      b: "(2), (3), dan (4)",
      c: "(1), (4), dan (3)",
      d: "(3), (5), dan (1)",
    },
    answer: "b",
  },
  {
    no: 39,
    question:
      "Dalam kegiatan kuliner Nusantara, kamu diminta memilih makanan khas Jawa Barat. Pilihan yang sesuai adalah ...",
    images: [],
    options: {
      a: "Sate Lilit",
      b: "Kerak Telor",
      c: "Gudeg",
      d: "Batagor",
    },
    answer: "d",
  },
  {
    no: 40,
    question:
      "Perhatikan gambar alat musik pada soal. Setelah mengamati cara penggunaannya, kamu diminta menentukan cara memainkan alat musik tersebut. Jawaban yang sesuai dengan bahan ajar adalah ...",
    images: ["/images/soal%2040.jpg"],
    options: {
      a: "Dipukul",
      b: "Dipetik",
      c: "Ditiup",
      d: "Ditekan",
    },
    answer: "a",
  },
  {
    no: 41,
    question:
      "Dalam kegiatan mengenal seni pertunjukan Jawa Timur, kamu diminta memilih pertunjukan yang pada bahan ajar ditunjukkan sebagai budaya Jawa Timur. Pilihan yang sesuai adalah ...",
    images: [],
    options: {
      a: "Wayang Kulit",
      b: "Tari Kuda Lumping",
      c: "Lenong",
      d: "Ludruk",
    },
    answer: "a",
  },
  {
    no: 42,
    question:
      "Ketika membuat peta budaya Kalimantan Selatan, kamu perlu mencantumkan ibu kota provinsi tersebut. Ibu kota Provinsi Kalimantan Selatan adalah ...",
    images: [],
    options: {
      a: "Banjarbaru",
      b: "Martapura",
      c: "Banjarmasin",
      d: "Marabahan",
    },
    answer: "c",
  },
  {
    no: 43,
    question:
      "Dalam kegiatan mengenal pakaian adat Kalimantan Timur, kamu menemukan beberapa pilihan. Pakaian adat tradisional pria yang pada bahan ajar disebut berasal dari Kalimantan Timur adalah ...",
    images: [],
    options: {
      a: "Baju Ta’a",
      b: "Baju Baamar Galung Pancar Mata",
      c: "Sapei Sapaq",
      d: "Baju Bagajah Gamuling Baular Lulut",
    },
    answer: "c",
  },
  {
    no: 44,
    question:
      "Ketika membuat peta budaya Kalimantan Utara, kamu perlu mencantumkan ibu kota provinsi tersebut. Ibu kota Provinsi Kalimantan Utara adalah ...",
    images: [],
    options: {
      a: "Tarakan",
      b: "Bulungan",
      c: "Tanjung Selor",
      d: "Malinau",
    },
    answer: "c",
  },
  {
    no: 45,
    question:
      "Perhatikan gambar rumah limas pada soal. Dalam kegiatan mengenal rumah adat Nusantara, rumah limas tersebut berasal dari Provinsi ...",
    images: ["/images/soal%2045.jpg"],
    options: {
      a: "Sulawesi Tenggara",
      b: "Sumatera Selatan",
      c: "Kepulauan Riau",
      d: "Papua Pegunungan",
    },
    answer: "b",
  },
  {
    no: 46,
    question:
      "Saat membuat peta digital budaya Papua Barat, kamu perlu mengetahui ibu kota provinsi tersebut. Ibu kota Provinsi Papua Barat adalah ...",
    images: [],
    options: {
      a: "Jayapura",
      b: "Manokwari",
      c: "Merauke",
      d: "Wanggar, Nabire",
    },
    answer: "b",
  },
  {
    no: 47,
    question:
      "Dalam kegiatan mengenal lagu daerah Papua Selatan, kamu diminta memilih lagu yang pada bahan ajar dicantumkan sebagai lagu daerah Papua Selatan. Lagu tersebut adalah ...",
    images: [],
    options: {
      a: "Jayawijaya Hanorasuok",
      b: "E Mambo Simbo",
      c: "Kampuang Nan Jauh di Mato",
      d: "Yamko Rambe Yambo",
    },
    answer: "b",
  },
  {
    no: 48,
    question:
      "Dalam kegiatan mengenal seni pertunjukan Maluku, kamu menemukan beberapa pilihan kesenian. Berdasarkan bahan ajar, yang ditandai sebagai seni pertunjukan Maluku adalah ...",
    images: [],
    options: {
      a: "Ma’badong",
      b: "Mpae",
      c: "Kabasaran Show",
      d: "Totobuang",
    },
    answer: "d",
  },
  {
    no: 49,
    question:
      "Ketika membuat peta digital Sulawesi Utara, kamu perlu mencantumkan pusat pemerintahan provinsi tersebut. Ibu kota Provinsi Sulawesi Utara adalah ...",
    images: [],
    options: {
      a: "Manado",
      b: "Bitung",
      c: "Kotamobagu",
      d: "Tomohon",
    },
    answer: "a",
  },
  {
    no: 50,
    question:
      "Perhatikan gambar alat musik pada soal. Dalam kegiatan mengenal alat musik Sulawesi Tengah, kamu diminta menentukan nama alat musik yang ditampilkan. Berdasarkan bahan ajar, alat musik tersebut adalah ...",
    images: ["/images/soal%2050.jpg"],
    options: {
      a: "Serunai",
      b: "Lalove",
      c: "Palo-Palo",
      d: "Gambang Kayu",
    },
    answer: "c",
  },
];

export default function EvaluasiPage() {
  const bottomNavHeight = 59;

  const QUESTIONS_PER_PACKAGE = 25;

  const totalQuestions = quizData.length;
  const totalPackages = Math.ceil(
    totalQuestions / QUESTIONS_PER_PACKAGE
  );

  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedPackageIndex, setSelectedPackageIndex] =
    useState(null);

  // Hitung range soal per paket
  const startIndex =
    selectedPackageIndex !== null
      ? selectedPackageIndex * QUESTIONS_PER_PACKAGE
      : 0;

  const endIndex =
    startIndex + QUESTIONS_PER_PACKAGE;

  const filteredQuizData =
    selectedPackageIndex !== null
      ? quizData.slice(startIndex, endIndex)
      : [];

  const handleStart = (pkgIndex) => {
    setSelectedPackageIndex(pkgIndex);
    setStarted(true);
  };

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (
      selectedAnswer ===
      filteredQuizData[currentQuestion].answer
    ) {
      setScore((prev) => prev + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestion + 1 < filteredQuizData.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setFinished(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setSelectedPackageIndex(null);
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: `calc(100vh - ${bottomNavHeight}px)`,
          overflow: "hidden",
        }}
      >
        <img
          src="/images/5.jpg"
          alt="background"
          style={{
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 py-16 overflow-y-auto">

          {/* PILIH PAKET */}
          {!started ? (
            <div className="flex flex-col items-center gap-6">
              <div className="flex gap-4 flex-wrap justify-center">
                {Array.from({ length: totalPackages }).map(
                  (_, index) => {
                    const start = index * QUESTIONS_PER_PACKAGE + 1;
                    const end = Math.min(
                      (index + 1) * QUESTIONS_PER_PACKAGE,
                      totalQuestions
                    );

                    return (
                      <button
                        key={index}
                        onClick={() => handleStart(index)}
                        className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600"
                      >
                        Soal {String.fromCharCode(65 + index)} (
                        {start}–{end})
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          ) : finished ? (
            /* HASIL */
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Evaluasi Selesai!
              </h2>

              <p className="text-lg mb-2">
                Paket Soal:{" "}
                <span className="font-bold">
                  {String.fromCharCode(65 + selectedPackageIndex)}
                </span>
              </p>

              <p className="text-lg mb-4">
                Skor kamu:{" "}
                <span className="font-bold">{score}</span> dari{" "}
                {filteredQuizData.length}
              </p>

              <button
                onClick={handleRestart}
                className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              >
                Ulangi Evaluasi
              </button>
            </div>
          ) : (
            /* SOAL */
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 mx-auto">
              <h2 className="text-lg font-semibold mb-4">
                Soal {currentQuestion + 1} dari{" "}
                {filteredQuizData.length}
              </h2>

              <p className="mb-6 text-lg">
                {filteredQuizData[currentQuestion].question}
              </p>

              {filteredQuizData[currentQuestion].images.length >
                0 && (
                <div className="mb-6 flex justify-center gap-4">
                  {filteredQuizData[
                    currentQuestion
                  ].images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Gambar soal ${currentQuestion + 1}`}
                      className="max-h-64 rounded-lg object-contain"
                    />
                  ))}
                </div>
              )}

              <div className="space-y-3">
                {Object.entries(
                  filteredQuizData[currentQuestion].options
                ).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswer(key)}
                    className={`w-full text-left px-5 py-3 rounded-lg border ${
                      selectedAnswer === key
                        ? "bg-yellow-100 border-yellow-500"
                        : "border-gray-300 hover:bg-yellow-50"
                    }`}
                  >
                    <span className="font-semibold mr-2 uppercase">
                      {key}.
                    </span>
                    {value}
                  </button>
                ))}
              </div>

              <div className="mt-8 text-right">
                <button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className={`px-6 py-2 rounded-lg ${
                    selectedAnswer
                      ? "bg-yellow-500 text-white hover:bg-yellow-600"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {currentQuestion + 1 ===
                  filteredQuizData.length
                    ? "Selesai"
                    : "Lanjut"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </>
  );
}
