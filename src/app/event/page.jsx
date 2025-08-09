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
    {
    id: 3,
    title: "Pasar Kuliner Tradisional Yogyakarta",
    date: "2025-11-12",
    location: "Yogyakarta",
    description:
      "Cicipi aneka makanan tradisional Indonesia dari berbagai daerah di pasar kuliner yang ramai dan meriah.",
    icon: "🍲",
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
    {
    id: 3,
    title: "Pasar Kuliner Tradisional Yogyakarta",
    date: "2025-11-12",
    location: "Yogyakarta",
    description:
      "Cicipi aneka makanan tradisional Indonesia dari berbagai daerah di pasar kuliner yang ramai dan meriah.",
    icon: "🍲",
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
      <main
        style={{
        //   maxWidth: 700,
          margin: '20px auto',
          fontFamily: 'Arial, sans-serif',
          paddingBottom: 80,
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: 15, fontSize: 28 }}>
          🎭 Jelajahi Ragam Budaya Nusantara
        </h1>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: 25, fontSize: 18 }}>
          Temukan dan rayakan kekayaan budaya Indonesia melalui berbagai acara tradisional yang memukau.
        </p>

        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: 25,
            paddingBottom: 15,
            scrollbarWidth: 'thin',
            scrollbarColor: '#888 transparent',
          }}
        >
          {events.map((event) => (
            <section
              key={event.id}
              style={{
                flex: '0 0 350px', // lebih lebar
                border: '1px solid #ddd',
                borderRadius: 12,
                padding: 20,
                boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
                display: 'flex',
                gap: 20,
                alignItems: 'center',
                backgroundColor: '#fff',
                fontSize: 16,
              }}
            >
              <div style={{ fontSize: 50 }}>{event.icon}</div>
              <div>
                <h2 style={{ margin: '0 0 8px', fontSize: 20 }}>{event.title}</h2>
                <p style={{ margin: '0 0 6px', fontWeight: 'bold', fontSize: 16 }}>
                  📅 {event.date} | 📍 {event.location}
                </p>
                <p style={{ margin: 0, color: '#333', fontSize: 15 }}>{event.description}</p>
              </div>
            </section>
          ))}
        </div>
      </main>

      <BottomNav />
    </>
  );
}
