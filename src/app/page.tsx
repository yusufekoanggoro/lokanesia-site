import BottomNav from './components/BottomNav';

export default function Home() {
  const bottomNavHeight = 75; // tinggi nav bar (px)

  return (
    <>
      <main
        className="flex flex-col items-center justify-center text-center font-sans text-white"
        style={{
          backgroundImage: "url('/images/1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", // atau "cover"
          backgroundPosition: "center",
          // backgroundColor: "#000",
          minHeight: `calc(100vh - ${bottomNavHeight}px)`, // tidak menutupi bottomnav
        }}
      >
      </main>

      <BottomNav />
    </>
  );
}
