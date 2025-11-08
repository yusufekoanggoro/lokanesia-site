'use client';

import Link from 'next/link';
import BottomNav from '../components/BottomNav';
import { useEffect } from 'react';

export default function Jelajah() {
  useEffect(() => {
    // Preload audio agar tidak delay saat pertama kali dimainkan
    const audio = new Audio('/sounds/click.mp3');
    audio.load();
  }, []);

  const playSound = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.play();
  };

  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-yellow-50 to-yellow-100 text-center pb-[88px] font-sans"
                style={{
          backgroundImage: "url('/images/4.jpg')",
          backgroundRepeat: "repeat",
          // backgroundSize: "contain", // atau "cover"
          backgroundPosition: "center",
          //  width: "100%",
          // backgroundColor: "#000",
          minHeight: `calc(100vh - 59px)`, // tidak menutupi bottomnav
        }}
      >
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/peta-budaya"
            onClick={playSound}
            className="inline-block px-10 py-3 bg-yellow-600 text-white font-semibold rounded-full shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
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
