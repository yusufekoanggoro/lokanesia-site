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
      <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-gradient-to-b from-yellow-100 via-yellow-50 to-yellow-100 text-center font-sans">
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl max-w-3xl w-full sm:w-4/5 md:w-3/4 p-8 sm:p-12 mx-auto mb-10">
          <h2 className="text-3xl font-extrabold mb-4 text-yellow-900 tracking-tight">
            Jelajahi Event Budaya Indonesia
          </h2>
          <p className="text-yellow-700 text-md leading-relaxed mb-6">
            Indonesia terdiri dari ribuan pulau dengan budaya, tarian, kuliner, dan tradisi yang beragam. 
            Berikut beberapa event budaya yang bisa kamu kunjungi!
          </p>

          {/* Event horizontal scroll */}
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-yellow-100">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{event.icon}</div>
                <h3 className="text-xl font-semibold mb-1 text-yellow-900">{event.title}</h3>
                <p className="text-sm text-yellow-700 mb-1">{event.date}</p>
                <p className="text-sm text-yellow-700 mb-3">{event.location}</p>
                <p className="text-yellow-800 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
