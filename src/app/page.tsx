import BottomNav from './components/BottomNav';

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-cover bg-center text-center font-sans"
        style={{ backgroundImage: "url('/images/1.jpg')" }}
      >
      </main>
      <BottomNav />
    </>
  );
}
