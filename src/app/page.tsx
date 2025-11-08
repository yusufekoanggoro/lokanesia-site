import BottomNav from './components/BottomNav';

export default function Home() {
  const bottomNavHeight = 59; // tinggi nav bar (px)

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: `calc(100vh - ${bottomNavHeight}px)`,
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/1.jpg"
          style={{
            width: '100%',
            height: '100%',
            // objectFit: 'contain', // atau 'contain' kalau mau gambar utuh
            objectPosition: 'top center',
          }}
          alt="background"
        />

      </div>

      <BottomNav />
    </>
  );
}
