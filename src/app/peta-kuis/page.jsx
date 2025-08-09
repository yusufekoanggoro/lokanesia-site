'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import BottomNav from '../components/BottomNav';

import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const GeoJSON = dynamic(() => import("react-leaflet").then(mod => mod.GeoJSON), { ssr: false });

import 'leaflet/dist/leaflet.css';
import indonesiaGeoJSON from "./38provinsi-indonesia.json";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";

const provinces = indonesiaGeoJSON.features.map(f => f.properties.PROVINSI);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i=0; i<6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

const provinceColors = {};
provinces.forEach(prov => {
  let newColor;
  do {
    newColor = getRandomColor();
  } while(Object.values(provinceColors).includes(newColor));
  provinceColors[prov] = newColor;
});

export default function Section4() {
  const router = useRouter();
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedProvinceName, setSelectedProvinceName] = useState(null);
  const [open, setOpen] = useState(false);

  // Fungsi untuk handle klik provinsi di peta
  function onEachFeature(feature, layer) {
    layer.on({
      click: () => {
        setSelectedProvince(feature.properties.KODE_PROV);
        // selectedProvinceName(feature.properties.PROVINSI);
        setSelectedProvinceName(feature.properties.PROVINSI);
        setOpen(true);
      }
    });
  }

  // Handle klik tombol di modal
  const handleGoQuiz = () => {
    if (selectedProvince) {
      router.push(`/quiz/${encodeURIComponent(selectedProvince)}`);
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProvince(null);
    setSelectedProvinceName(null);
  };

  const handleBack = () => {
    router.back();
  };


  return (
    <>
      <section className="h-screen py-16 bg-gray-100 text-gray-900 pb-[88px]">
        <div className="container mx-auto px-6 relative">
          {/* Back Button */}
          <button 
            onClick={handleBack} 
            className="absolute top-4 left-4 px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-md shadow-md text-gray-800 font-semibold"
            aria-label="Kembali"
          >
            ← Kembali
          </button>

          <h2 className="text-3xl font-extrabold text-center mb-8">
            Jelajah Budaya Lewat Peta Nusantara
          </h2>
          <p className="text-center max-w-xl mx-auto mb-8 text-gray-600">
            Klik pada provinsi untuk melihat pilihan Quiz.
          </p>

          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={[-2.548926, 118.0148634]}
              zoom={6}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON 
                data={indonesiaGeoJSON} 
                style={(feature) => ({
                  fillColor: provinceColors[feature.properties.PROVINSI],
                  fillOpacity: 0.5,
                  color: "white",
                  weight: 1,
                })}
                onEachFeature={onEachFeature}
              />
            </MapContainer>
          </div>
        </div>

        {/* Modal Dialog MUI */}
        <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="dialog-title"
              aria-describedby="dialog-description"
              maxWidth="xs"
              fullWidth
            >
              <DialogTitle id="dialog-title" sx={{ fontWeight: "bold", color: "#D97706" }}>
                Mulai Quiz untuk Provinsi {selectedProvinceName}
              </DialogTitle>
              <DialogContent dividers>
                <Typography
                  id="dialog-description"
                  variant="body1"
                  sx={{ color: "#92400E", mb: 2 }}
                >
                  Yuk, uji pengetahuanmu tentang provinsi {selectedProvinceName} melalui Quiz ini!
                </Typography>
              </DialogContent>
              <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button
                  onClick={handleGoQuiz}
                  variant="contained"
                  sx={{
                    backgroundColor: "#D97706",
                    "&:hover": { backgroundColor: "#B45309" },
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                  autoFocus
                >
                  Mulai Quiz
                </Button>
                <Button
                  onClick={handleClose}
                  variant="text"
                  color="inherit"
                  sx={{ color: "#92400E", textTransform: "none" }}
                >
                  Batal
                </Button>
              </DialogActions>
            </Dialog>
      </section>
      <BottomNav />
    </>
  );
}
