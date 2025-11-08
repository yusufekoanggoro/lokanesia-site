import BottomNav from './components/BottomNav';

export default function Home() {
  const bottomNavHeight = 75; // tinggi nav bar (px)

  return (
    <>
      <main
        className="flex flex-col items-center justify-center bg-center text-center font-sans text-white"
        style={{
          backgroundImage: "url('/images/1.jpg')",
          backgroundRepeat: "no-repeat",
          minHeight: `calc(100vh - ${bottomNavHeight}px)`, // tinggi menyesuaikan nav
        }}
      >
      </main>

      {/* <div style={{ height: `${bottomNavHeight}px` }} />  */}
      {/* spacer agar konten tidak ketutupan bottom nav */}

      <BottomNav />
    </>
  );
}
