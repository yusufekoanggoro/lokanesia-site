import BottomNav from './components/BottomNav';

export default function Home() {
  return (
    <>
      <main
        className="flex flex-col items-center justify-center px-6 py-16 bg-cover bg-center text-center font-sans text-white"
        style={{
          backgroundImage: "url('/images/1.jpg')",
          height: "calc(100vh - 75px)", // kurangi tinggi bottom nav
        }}
      >
      </main>
      <BottomNav />
    </>
  );
}
