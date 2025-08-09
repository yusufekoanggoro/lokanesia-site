'use client'; // wajib di paling atas karena kita pakai useRouter (client component)

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from 'next/navigation';

const provincesData = {
  "31": {
    name: "DKI Jakarta",
    capital: "Jakarta",
    area: 661.5, // dalam km²
    population: 10640000 ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Jakarta.svg/800px-Coat_of_arms_of_Jakarta.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Rumah panggung Betawi",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Rumah_Panggung_Betawi_di_Kampung_Marunda_Pulo.jpg/500px-Rumah_Panggung_Betawi_di_Kampung_Marunda_Pulo.jpg"
          },
          {
            name: "Rumah Kebaya",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Rumah_Adat_Kebaya_dari_Jakarta.jpg/500px-Rumah_Adat_Kebaya_dari_Jakarta.jpg"
          },
          {
            name: "Rumah Gudang",
            image: "https://blog-static.mamikos.com/wp-content/uploads/2023/01/Keunikan-Bentuk-Rumah-Adat-Gudang-Betawi-beserta-Ciri-ciri-dan-Penjelasannya-1.jpg.webp"
          }
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Kebaya Encim",
            image: "https://dynamic.zacdn.com/KN0vp4KmuM2dCYu5eKtV-IjOjVU=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/jamali-kebaya-7253-8128234-5.jpg"
          },
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Topeng Betawi",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=BbX60C0E0P4&list=RDBbX60C0E0P4&start_radio=1"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Golok",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Golok_naga_indonesia.jpg/500px-Golok_naga_indonesia.jpg"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Kerak Telor",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kerak_telor_Betawi.jpg/330px-Kerak_telor_Betawi.jpg"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Tehyan",
            image: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-73097199-460853514540218-7858314336894600811-n-8b84b5c3fa2f492da87d1d921b1e8ed8.jpg?tr=w-730,h-486,fo-center",
            ytUrl: "https://youtu.be/yUyYvlnVfwc?si=_J_TOjVtwxkfHT0C", // penggunaan alat musik
          },
          {
            name: "Tanjidor",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tanjidor%2C_by_M_Jeffry_Hanafiah.jpg/500px-Tanjidor%2C_by_M_Jeffry_Hanafiah.jpg",
            ytUrl: "https://youtu.be/MHr-Pvb07m0?si=KDzS2NcYD2nMQzH9", // penggunaan alat musik
          },
          {
            name: "Rebana",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/COLLECTIE_TROPENMUSEUM_Enkelvellige_lijsttrom_met_rinkelschijven_TMnr_1032-2.jpg/500px-COLLECTIE_TROPENMUSEUM_Enkelvellige_lijsttrom_met_rinkelschijven_TMnr_1032-2.jpg",
            ytUrl: "https://youtu.be/oaBmWUq57hg?si=uSgUUaoV2WGDeyJe", // penggunaan alat musik
          }
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Ondel-ondel",
            ytUrl: "https://www.youtube.com/watch?v=wardyOl-EHo"
          },
          {
            name: "Jali-jali",
            ytUrl: "https://www.youtube.com/watch?v=iMuoAiycXp4"
          },
          {
            name: "Kicir-kicir",
            ytUrl: "https://youtu.be/lhZf7qGZzsE?si=1UmuxqCprEEHFDeD"
          }
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Lenong",
            ytUrl: "https://www.youtube.com/watch?v=2YKZWQ4jEgI"
          }
        ]
      }
    ]
  },
};

const provinceSongs = {
  "31": "/music/jakarta.mp3",
  "32": "/music/jawa_barat.mp3",
  "33": "/music/jawa_tengah.mp3",
  // dst...
};

export default function ProvinceDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const province = provincesData[id];

  const audioRef = useRef(null);

  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    if (!showCover && id && provinceSongs[id]) {
      audioRef.current.src = provinceSongs[id];
      audioRef.current.play().catch(e => {
        console.log("Audio play error:", e);
      });
    }
  }, [showCover, id]);

  if (!province) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Provinsi tidak ditemukan</h1>
      </div>
    );
  }

    if (showCover) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${province.image})`}}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center text-white max-w-md">
          <h1 className="text-5xl font-bold mb-6">{province.name}</h1>
          <p className="mb-8">Selamat datang di halaman budaya {province.name}. Yuk jelajahi keunikan budaya dan tradisi daerah ini!</p>
          <button
            onClick={() => setShowCover(false)}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition"
          >
            Ayo Mulai Menjelajah
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => setShowCover(true)} // kembali ke cover
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700"
      >
        ← Kembali ke Cover
      </button>

      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700"
      >
        ← Kembali
      </button>

      <audio ref={audioRef } preload="auto" />

      <h1 className="text-4xl font-bold mb-4">{province.name}</h1>
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={province.image}
          alt={`${province.name} emblem`}
          className="w-24 h-24 object-contain"
          loading="lazy"
        />
        <div>
          <p><span className="font-semibold">Ibu Kota:</span> {province.capital}</p>
          <p><span className="font-semibold">Luas Wilayah:</span> {province.area} km²</p>
          <p><span className="font-semibold">Populasi:</span> {province.population.toLocaleString()}</p>
        </div>
      </div>

      {province.cultures.map((culture) => (
        <section key={culture.name} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{culture.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {culture.data.map((item, idx) => (
              <div key={idx} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-md mb-3"
                    loading="lazy"
                  />
                )}
                <h3 className="font-medium text-lg">{item.name}</h3>
                {item.ytUrl && (
                  <a
                    href={item.ytUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-1 block"
                  >
                    Tonton Video
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
