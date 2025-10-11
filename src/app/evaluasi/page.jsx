"use client";

import { useState } from "react";

const quizData = [
  {
    question: "Apa ibu kota dari Provinsi Jawa Barat?",
    options: ["Bandung", "Surabaya", "Semarang", "Yogyakarta"],
    answer: "Bandung",
  },
  {
    question: "Pulau terbesar di Indonesia adalah?",
    options: ["Jawa", "Sumatera", "Kalimantan", "Sulawesi"],
    answer: "Kalimantan",
  },
  {
    question: "Tari Saman berasal dari provinsi mana?",
    options: ["Aceh", "Bali", "NTT", "Papua"],
    answer: "Aceh",
  },
];

export default function EvaluasiPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

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
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-6">
      {!started ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-yellow-700 mb-4">
            Evaluasi Siswa
          </h1>
          <p className="text-gray-600 mb-6">
            Uji pengetahuanmu dengan menjawab beberapa pertanyaan tentang
            Indonesia!
          </p>
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition"
          >
            Ayo Mulai!
          </button>
        </div>
      ) : finished ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Selesai!</h2>
          <p className="text-lg mb-2">
            Skor kamu: <span className="font-bold">{score}</span> dari{" "}
            {quizData.length}
          </p>
          <button
            onClick={handleRestart}
            className="mt-4 px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Coba Lagi
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            {quizData[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {quizData[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left px-4 py-2 rounded-lg border transition ${
                  selectedAnswer === option
                    ? "bg-yellow-200 border-yellow-500"
                    : "bg-white border-gray-300 hover:bg-yellow-50"
                }`}
              >
                {option}
              </button>
            ))}
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
    </div>
  );
}
