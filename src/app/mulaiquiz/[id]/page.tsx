'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from 'next/navigation';
import BottomNav from '../../components/BottomNav';

const provincesData = {
  // p jawa
  "31": {
    "provinsi": "DKI Jakarta",
    "quiz": [
      {
        "pertanyaan": "Berapakah luas wilayah provinsi DKI Jakarta?",
        "pilihan": [
          "10.640.000 km2",
          "66.15 km2",
          "661.5 km2",
          "6.615 km2"
        ],
        "jawaban": 2
      },
      {
        "pertanyaan": "Apa nama pakaian adat tradisional DKI Jakarta?",
        "pilihan": [
          "Pakaian pangsi",
          "Kebaya encim",
          "Pakaian ulos",
          "Baju kurung"
        ],
        "jawaban": 1
      },
      {
        "pertanyaan": "Mana saja yang termasuk rumah adat DKI Jakarta?",
        "pilihan": [
          "Rumah panggung Betawi",
          "Rumah Kebaya",
          "Rumah Gudang",
          "Semua Benar"
        ],
        "jawaban": 3
      },
      {
        "pertanyaan": "Manakah yang merupakan makanan khas DKI Jakarta?",
        "pilihan": [
          "Sate lilit",
          "Kerak telor",
          "Gudeg",
          "Sate bandeng"
        ],
        "jawaban": 1
      },
      {
        "pertanyaan": "Apa nama senjata dari DKI Jakarta?",
        "pilihan": [
          "Keris",
          "Celurit",
          "Golok",
          "Rencong"
        ],
        "jawaban": 2
      },
      {
        "pertanyaan": "Apa saja tarian yang berasal dari Banten?",
        "pilihan": [
          "Tari Katuran, Tari Saman dan Tari Piring",
          "Tari Piring dan Tari Rampak Bedug",
          "Tari Topeng Betawi",
          "Tari Jaipong dan Tari Tor-tor"
        ],
        "jawaban": 2
      },
      {
        "pertanyaan": "Manakah alat musik yang berasal dari DKI Jakarta?",
        "pilihan": [
          "Suling dan gambus",
          "Pantun Bambu",
          "Tehyan, Tanjidor dan Rebana",
          "Gamelan dan gendang"
        ],
        "jawaban": 2
      },
      {
        "pertanyaan": "Bagaimana cara menggunakan alat musik Tehyan?",
        "pilihan": [
          "Dipukul",
          "Dipetik",
          "Ditiup",
          "Digesek"
        ],
        "jawaban": 3
      },
      {
        "pertanyaan": "Manakah judul lagu yang berasal dari DKI Jakarta?",
        "pilihan": [
          "Suwe ora jamu",
          "Tabola bale dan Injit-injit semut",
          "Kicir-kicir, Ondel-ondel dan Jali-jali",
          "Dayung Sampan"
        ],
        "jawaban": 2
      },
      {
        "pertanyaan": "Apa nama seni pertunjukan yang berasal dari Banten?",
        "pilihan": [
          "Debus Surosowan",
          "Wayang",
          "Lenong",
          "Ludruk"
        ],
        "jawaban": 2
      }
    ]
  },

};

const provinceSongs = {
  // p jawa
  "31": "/music/jakarta.mp3",
  "32": "/music/jawa_barat.mp3",
  "36": "/music/banten.mp3",
  "33": "/music/jawa_tengah.mp3",
  "34": "/music/yogyakarta.mp3",
  "35": "/music/jawa_timur.mp3",

  // p sumatera
  "11": "/music/aceh.mp3",
  "12": "/music/sumatera_utara.mp3",
  "13": "/music/sumatera_barat.mp3",
  "14": "/music/riau.mp3",
  "15": "/music/jambi.mp3",
  "16": "/music/sumsel.mp3",
  "17": "/music/bengkulu.mp3",
  "18": "/music/lampung.mp3",
  "19": "/music/kepbanglitung.mp3",
  "21": "/music/kepriau.mp3",

  // p kalimantan
  "61": "/music/kalbar.mp3",
  "62": "/music/kalteng.mp3",
  "63": "/music/kalsel.mp3",
  "64": "/music/kaltim.mp3",
  "65": "/music/kalut.mp3",

  // p sulawesi
  "71": "/music/sulut.mp3",
  "72": "/music/sulteng.mp3",
  "73": "/music/sulsel.mp3",
  "74": "/music/sultra.mp3",
  "75": "/music/gorontalo.mp3",
  "76": "/music/sulbar.mp3",

  // Bali dan Nusa Tenggara
  "51": "/music/bali.mp3",
  "52": "/music/ntb.mp3",
  "53": "/music/ntt.mp3",

  // maluku & papua
  "81": "/music/maluku.mp3",
  "82": "/music/maluku_utara.mp3",

  "91-A": "/music/papua.mp3",
  "91-B": "/music/papua_pegunungan.mp3",
  "91-C": "/music/papua_selatan.mp3",
  "91-D": "/music/papua_tengah.mp3",

  "92-A": "/music/papua_barat.mp3",
  "92-B": "/music/papua_barat_daya.mp3"
  // dst...
};

export default function ProvinceDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const province = provincesData[id];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    if (id && provinceSongs[id] && audioRef.current) {
      audioRef.current.src = provinceSongs[id];
      audioRef.current.play().catch(() => {});
    }
  }, [id]);

  if (!province) {
    return (
      <div className="p-8 text-center font-sans">
        <h1 className="text-2xl font-bold">Provinsi tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <>
      <main className="max-w-3xl mx-auto p-6 pb-[88px] font-sans">
        <button
          onClick={() => router.back()}
          className="mb-6 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 shadow-sm"
        >
          ← Kembali
        </button>

        <audio ref={audioRef} preload="auto" />

        {!startQuiz ? (
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-yellow-900">
              Quiz {province.provinsi}
            </h1>
            <button
              onClick={() => setStartQuiz(true)}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition"
            >
              Mulai Quiz
            </button>
          </div>
        ) : (
          <QuizPage quiz={province.quiz} />
        )}
      </main>
      <BottomNav />
    </>
  );
}

function QuizPage({ quiz }: { quiz: any[] }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quiz.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const score = answers.reduce((acc, ans, idx) => {
    if (ans === quiz[idx].jawaban) return acc + 1;
    return acc;
  }, 0);

  if (showResult) {
    return (
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Hasil Quiz</h2>
        <p className="text-lg">
          Skor kamu: <span className="font-semibold">{score}</span> dari{" "}
          {quiz.length}
        </p>
        <button
          onClick={() => {
            setCurrent(0);
            setAnswers(Array(quiz.length).fill(null));
            setShowResult(false);
          }}
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  const q = quiz[current];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{q.pertanyaan}</h2>
      <div className="grid gap-3">
        {q.pilihan.map((opt: string, idx: number) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className={`w-full text-left px-4 py-3 rounded-lg border shadow-sm transition
              ${
                answers[current] === idx
                  ? "bg-yellow-500 text-white border-yellow-600"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            {String.fromCharCode(65 + idx)}. {opt}
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <button
          disabled={current === 0}
          onClick={() => setCurrent((c) => c - 1)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        {current < quiz.length - 1 ? (
          <button
            onClick={() => setCurrent((c) => c + 1)}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => setShowResult(true)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}