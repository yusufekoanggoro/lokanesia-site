"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// Dynamic imports supaya tidak dieksekusi di server
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
);

import L from "leaflet";

// Custom default icon supaya marker muncul
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


export default function MiniMap({ provinceName }) {
  const [coords, setCoords] = useState(null);
   const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const loadGeo = async () => {
      try {
        const response = await fetch("/38provinsi-indonesia.json");
        if (!response.ok) throw new Error("GeoJSON gagal di-load");
        const geoData = await response.json();
        setGeoData(geoData);

        const feature = geoData.features.find(
          (f) => f.properties.PROVINSI.toLowerCase() === provinceName.toLowerCase()
        );

        if (!feature || !feature.geometry) {
          console.warn(`Provinsi ${provinceName} tidak ditemukan di GeoJSON`);
          return;
        }

        let lat = null;
        let lng = null;
        const coordsArr = feature.geometry.coordinates;

        if (feature.geometry.type === "Polygon") {
          const allPoints = coordsArr[0];
          const sum = allPoints.reduce(
            (acc, [lng, lat]) => {
              acc.lat += lat;
              acc.lng += lng;
              return acc;
            },
            { lat: 0, lng: 0 }
          );
          lat = sum.lat / allPoints.length;
          lng = sum.lng / allPoints.length;
        } else if (feature.geometry.type === "MultiPolygon") {
          const firstPolygon = coordsArr[0][0];
          const sum = firstPolygon.reduce(
            (acc, [lng, lat]) => {
              acc.lat += lat;
              acc.lng += lng;
              return acc;
            },
            { lat: 0, lng: 0 }
          );
          lat = sum.lat / firstPolygon.length;
          lng = sum.lng / firstPolygon.length;
        } else if (feature.geometry.type === "Point") {
          [lng, lat] = coordsArr;
        }

        console.log(`Coordinates for ${provinceName}:`, { lat, lng });

        if (lat != null && lng != null) {
          setCoords({ lat, lng });
        }
      } catch (err) {
        console.error("Gagal memuat GeoJSON:", err);
      }
    };

    loadGeo();
  }, [provinceName]);

  if (!coords) {
    return (
      <div className="w-48 h-32 rounded-md shadow flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
        Peta tidak tersedia
      </div>
    );
  }

    const geoStyle = (feature) => {
    const isSelected =
      feature.properties.PROVINSI.toLowerCase() === provinceName.toLowerCase();
    return {
      color: isSelected ? "#007bff" : "#cccccc", // border
      weight: isSelected ? 2 : 1,
      fillColor: isSelected ? "#3399ff" : "#eeeeee", // warna isi
      fillOpacity: isSelected ? 0.5 : 0.3,
    };
  };


  return (
    <MapContainer
      center={[coords.lat, coords.lng]}
      zoom={6}
      scrollWheelZoom={false}
      className="w-48 h-32 rounded-md shadow"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={geoData} style={geoStyle} />
    <Marker position={[coords.lat, coords.lng]} icon={defaultIcon}>
    <Popup>{provinceName}</Popup>
    </Marker>

    </MapContainer>
  );
}
