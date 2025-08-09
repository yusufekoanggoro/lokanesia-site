import HouseIcon from '@mui/icons-material/House';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DanceIcon from '@mui/icons-material/DataObjectTwoTone';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

export default function Section2() {
  const categories = [
    { name: "Rumah Adat", icon: HouseIcon },
    { name: "Pakaian Tradisional", icon: CheckroomIcon },
    { name: "Tarian Daerah", icon: DanceIcon },
    { name: "Senjata Tradisional", icon: SportsMmaIcon },
    { name: "Alat Musik Tradisional", icon: MusicNoteIcon },
    { name: "Lagu Daerah", icon: QueueMusicIcon },
    { name: "Seni Pertunjukan", icon: TheaterComedyIcon },
  ];

  return (
    <section className="h-screen py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        {/* Judul dan deskripsi */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold mb-4">
            Eksplorasi Budaya Nusantara
          </h2>
          <p className="text-lg text-gray-600">
            Jelajahi berbagai aspek budaya Indonesia dari Sabang sampai Merauke melalui kategori berikut.
          </p>
        </div>

        {/* Daftar kategori */}
<div
  className="
    max-h-[400px] overflow-y-auto
    grid grid-cols-1 gap-4
    sm:grid-cols-2 sm:gap-6
  "
>
  {categories.map(({ name, icon: Icon }) => (
    <div
      key={name}
      className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
    >
      <Icon className="w-16 h-16 mb-4 text-indigo-600" />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
