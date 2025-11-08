'use client';

import Link from 'next/link';
import BottomNav from '../components/BottomNav';
import { useEffect } from 'react';

export default function Jelajah() {
  const bottomNavHeight = 59; // tinggi BottomNav (px)

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
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: `calc(100vh - ${bottomNavHeight}px)`, // agar tidak menutupi BottomNav
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/5.jpg"
          alt="background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // 'cover' biar memenuhi area, 'contain' biar gambar utuh
            objectPosition: 'center',
          }}
        />

        {/* Konten tombol di atas background */}
        <div className="absolute inset-0 flex items-center justify-center px-6 py-16">
          <Link
            href="/peta-budaya"
            onClick={playSound}
            className="inline-block px-10 py-3 bg-yellow-600 text-white font-semibold rounded-full shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
            aria-label="Mulai Menjelajah"
          >
            Mulai Menjelajah
          </Link>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
