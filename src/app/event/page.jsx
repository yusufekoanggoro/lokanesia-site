import BottomNav from '../components/BottomNav';

const events = [
  {
    id: 1,
    title: "Festival Tari Tradisional Bali",
    date: "2025-09-15",
    location: "Denpasar, Bali",
    description:
      "Nikmati keindahan tari tradisional Bali dengan kostum warna-warni dan musik khas pulau dewata.",
    icon: "🎉",
  },
  {
    id: 2,
    title: "Pameran Kerajinan Batik Pekalongan",
    date: "2025-10-05",
    location: "Pekalongan, Jawa Tengah",
    description:
      "Temukan beragam motif batik khas Pekalongan dalam pameran yang menampilkan karya pengrajin lokal.",
    icon: "🖼️",
  },
  {
    id: 3,
    title: "Pasar Kuliner Tradisional Yogyakarta",
    date: "2025-11-12",
    location: "Yogyakarta",
    description:
      "Cicipi aneka makanan tradisional Indonesia dari berbagai daerah di pasar kuliner yang ramai dan meriah.",
    icon: "🍲",
  },
];

export default function Event() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-gradient-to-b from-yellow-100 via-yellow-50 to-yellow-100 text-center font-sans bg-cover bg-center bg-fixed "
        style={{ backgroundImage: "url('/images/2.jpg')", height: "calc(100vh - 75px)"}}
      >
      </main>
      <BottomNav />
    </>
  );
}
