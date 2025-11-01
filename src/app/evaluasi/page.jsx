"use client";

import { useState } from "react";
import BottomNav from "../components/BottomNav";

const quizData = [
  {
    no: 1,
    question: "Berikut ini yang *bukan* termasuk keberagaman budaya Indonesia adalah …",
    image: "/images/illustration-culture.png",
    options: {
      a: "Keberagaman rumah adat",
      b: "Keberagaman bahasa daerah",
      c: "Keberagaman suku bangsa",
      d: "Keberagaman mata pencaharian",
    },
    answer: "d",
  },
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
        style={{ backgroundImage: "url('/images/6.jpg')" }}
      >
        {!started ? (
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-yellow-900 tracking-tight drop-shadow-md">
              Evaluasi Siswa
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-yellow-800 mb-4">
              Yuk, uji pengetahuanmu tentang budaya Indonesia!
            </p>
            <p className="text-md sm:text-lg text-yellow-700 mb-12 leading-relaxed max-w-xl mx-auto">
              Jawablah setiap pertanyaan dengan benar untuk melihat seberapa jauh kamu memahami keberagaman budaya di Indonesia.
            </p>

            <div className="mx-auto mb-12 max-w-xs sm:max-w-md rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <img
                src="/images/illustration-culture.png"
                alt="Ilustrasi Evaluasi Budaya Indonesia"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

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
