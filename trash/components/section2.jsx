export default function Section3() {
  const events = [
    {
      id: 1,
      name: "Festival Tari Bali",
      datetime: "20 Agustus 2025, 18:00 WIB",
      location: "Denpasar, Bali",
      description: "Festival tari tradisional Bali yang menampilkan berbagai pertunjukan seni.",
      countdown: "15 Hari 10 Jam 30 Menit",
    },
    {
      id: 2,
      name: "Pesta Rakyat Jawa Tengah",
      datetime: "5 September 2025, 09:00 WIB",
      location: "Semarang, Jawa Tengah",
      description: "Acara seni dan budaya rakyat Jawa Tengah dengan bazar dan pertunjukan musik.",
      countdown: "31 Hari 03 Jam 15 Menit",
    },
  ];

  return (
    <section className="h-screen py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        {/* Judul & Deskripsi */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold mb-4">
            Hitung Mundur Acara Kebudayaan Terdekat
          </h2>
          <p className="text-lg text-gray-600">
            Pantau dan persiapkan diri untuk acara budaya yang akan berlangsung di berbagai daerah. Jangan sampai terlewat!
          </p>
        </div>

        {/* List acara */}
        <div className="max-h-[500px] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{event.datetime} - {event.location}</p>
              <p className="mb-4">{event.description}</p>
              <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded font-mono font-semibold">
                {event.countdown}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
