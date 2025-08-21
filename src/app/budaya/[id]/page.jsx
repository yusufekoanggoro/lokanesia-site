'use client';

import { useEffect, useRef } from "react";
import { useRouter, useParams } from 'next/navigation';
import BottomNav from '../../components/BottomNav';

const provincesData = {
  "11": {
    name: "Aceh",
    capital: "Banda Aceh",
    area: "58,376", // dalam km²
    population: "5.555 juta (2024)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Coat_of_arms_of_Aceh.svg/120px-Coat_of_arms_of_Aceh.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Krong Bade",
            image: "https://asset.kompas.com/crops/AflJ1cFIJYKCCwXb0aXhRyRYLfY=/114x139:398x329/1200x800/data/photo/2022/02/07/6200b9a37e755.png"
          },
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Baju Meukeusah",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Pakaian-Adat-Pengantin-Aceh-untuk.width-800.format-webp.webp"
          },
          {
            name: "Celana Sileuweu",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Pakaian_Adat_Aceh_Sileuwu.width-800.format-webp.webp"
          },
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Saman",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=q-8tMZKBgrA&list=RDq-8tMZKBgrA&start_radio=1&ab_channel=osh"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Rencong",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Rencong-pakaian-adat-aceh.width-800.format-webp.webp"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Mie Aceh",
            image: "https://www.unileverfoodsolutions.co.id/id/inspirasi-chef/kuliner-autentik-indonesia/10-makanan-terkenal-khas-aceh-untuk-ide-menu-resto/jcr:content/parsys/set1/row3/span8/textimage_copy_1950509490/image.transform/jpeg-optimized/image.1715080196715.jpg"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Serune kale",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xbv4NRIzWgAcc1nAHo_OWLJnWjmfKLK2Ag&s",
            ytUrl: "https://youtu.be/LXNNUnfa06E?si=nj23QdgQY7naVHDx ", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Bungong Jeumpa",
            ytUrl: "https://youtu.be/lAVi2OE2bRY?si=hPAz-x6EuM_Mefil"
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Ratoh Jaroe",
            ytUrl: "https://www.youtube.com/watch?v=SG-Aw5_v8BQ&list=RDSG-Aw5_v8BQ&start_radio=1&ab_channel=SanggarSeniKenarGumilar"
          }
        ]
      }
    ]
  },
  "12": {
    name: "Sumatera Utara",
    capital: "Medan",
    area: "72,461", // dalam km²
    population: "15.59 juta (2024)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Coat_of_arms_of_North_Sumatra.svg/120px-Coat_of_arms_of_North_Sumatra.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Karo",
            image: "https://akcdn.detik.net.id/community/media/visual/2024/06/09/rumah-siwaluh-jabu-garista_43.jpeg?w=700&q=90"
          },
          {
            name: "Nias",
            image: "https://museum-nias.org/wp-content/uploads/2016/11/Museum_pisaka_nias_arsitektur_omo_zebua.jpg"
          },
          {
            name: "Bolon",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Rumah_Bolon_%28Batak_Traditional_House%29.jpg/330px-Rumah_Bolon_%28Batak_Traditional_House%29.jpg"
          }
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Mandailing",
            image: "https://akcdn.detik.net.id/community/media/visual/2023/02/23/pakaian-adat-mandailing_43.jpeg?w=480"
          },
          {
            name: "Batak Simalungun",
            image: "https://akcdn.detik.net.id/community/media/visual/2023/02/23/pakaian-adat-simalungun_43.jpeg?w=480"
          },
          {
            name: "Batak Pakpak",
            image: "https://akcdn.detik.net.id/community/media/visual/2023/02/23/pakaian-adat-pakpak_43.jpeg?w=480"
          }
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tor-Tor",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=WWIKt078syU&list=RDWWIKt078syU&start_radio=1&ab_channel=mutiarazazkiaputri"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Piso Halasan",
            image: "https://akcdn.detik.net.id/community/media/visual/2023/01/20/senjata-tradisional-asal-sumut-3_43.jpeg?w=480"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Bika Ambon",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kue_bika_ambon.JPG/250px-Kue_bika_ambon.JPG"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Gondang Hasapi",
            image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/239/2024/12/17/alat-musik-tradisional-hapetan-dari-sumatra-utara-1386874437.png",
            ytUrl: "https://youtu.be/ftDBfswC4Fc?si=LSY7ox2pHS6xlGJ9 ", // penggunaan alat musik
          },
          {
            name: "Sarune Bolon",
            image: "https://radiostar.harianjogja.com/assets/2024/07/roro_SaruneBolon.jpg",
            ytUrl: "https://youtu.be/NHXSHRNWZmg?si=oXKaTN6l4sdZHIvH", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Sinanggar Tulo",
            ytUrl: " https://youtu.be/YWnFIDHMraA?si=wGD0vs1CoH4UEiII "
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Tari Moyo",
            ytUrl: "https://www.youtube.com/watch?v=e24ymKY5vyw&list=RDe24ymKY5vyw&start_radio=1&ab_channel=CallistaZebua"
          }
        ]
      }
    ]
  },
  "13": {
    name: "Sumatera Barat",
    capital: "Padang",
    area: "42,120", // dalam km²
    population: 10640000 ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Coat_of_arms_West_Sumatera.png/120px-Coat_of_arms_West_Sumatera.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Rumah Gadang",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rumah_Gadang.jpg/250px-Rumah_Gadang.jpg"
          },
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Baju Batusangkar",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Baju_Batusangkar.width-800.format-webp.webp"
          },
          {
            name: "Baju Batabue",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Baju_Batabue.width-800.format-webp.webp"
          },
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Piring",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=1O_OYwnV6iw&list=RD1O_OYwnV6iw&start_radio=1&ab_channel=GNPMusic"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Ruduih",
            image: "https://blog-static.mamikos.com/wp-content/uploads/2023/01/ruduih.jpg.webp"
          },
          {
            name: "Kerambit",
            image: "https://blog-static.mamikos.com/wp-content/uploads/2023/01/senjata-tradisional-Kerambit.png.webp"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Rendang",
            image: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/1.jpg"
          },
          {
            name: "Sate Padang",
            image: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/2.jpg"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Sarunai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNFbRVAhG632S1WS_4O00bTmWfV0UhycXNZg&s",
            ytUrl: "https://youtu.be/tj6qlCUhPqo?si=UAtuKI-m0DL4b4yv", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Kampuang nan jauh di mato",
            ytUrl: "https://youtu.be/vJJE-NQMYDk?si=Lprgi7gUjQv0gMJ3 "
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Randai",
            ytUrl: "https://www.youtube.com/watch?v=z3nuw_7-lms&ab_channel=AnB%40Channel"
          }
        ]
      }
    ]
  },
  "14": {
    name: "Riau",
    capital: "Pekanbaru",
    area: "87,024", // dalam km²
    population: "7.007 juta (2024)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Coat_of_arms_of_Riau.svg/120px-Coat_of_arms_of_Riau.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Melayu Atap Limas Potong",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Rumah-Melayu-Atap-Limas-Potong.width-800.format-webp.webp"
          },
          {
            name: "Melayu Lipat Kajang",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Rumah-Melayu-Lipat-Kajang.width-800.format-webp.webp"
          },
          {
            name: "Selaso Jatuh Kembar",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Rumah_Adat_Riau_Selaso_Jatuh_Kemb.width-800.format-webp.webp"
          }
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Baju Kurung",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Baju_Kurung_Pakaian_Adat_khas_Ria.width-800.format-webp.webp"
          },
          {
            name: "Kebaya Labuh",
            image: "https://cnc-magazine.oramiland.com/parenting/images/115749226_3244545855591484_402949.width-800.format-webp.webp"
          }
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Zapin",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=GINseLXDLEI&list=RDGINseLXDLEI&start_radio=1&ab_channel=ffourpaa"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Tumbuk Lada",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Tumbuk_Lada_S1DWw8A.width-800.format-webp.webp"
          },
          {
            name: "Beladau",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Beladau.width-800.format-webp.webp"
          },
          {
            name: "Pemuras",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Pemuras_0rE9XU7.width-800.format-webp.webp"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Mie Sagu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOub_QfgXf6t-A_NcqhgyvQRrbZ54k5JuzIw&s"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Gambus",
            image: "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/24/2021/09/gambus-2.jpg",
            ytUrl: " https://youtu.be/jU2T0U-y8to?si=4UsUeexjOL4WWaSM  ", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Pulau Bintan",
            ytUrl: "https://youtu.be/x7WpDyQGtxk?si=BiZVRRJUn3nLNiQM "
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Makyong",
            ytUrl: "https://www.youtube.com/watch?v=-gRRsZYiYpY&list=PL2J_sVbkvaZOVtmJnAxWFe4rFk_S2_lbl&ab_channel=EienIchiru"
          }
        ]
      }
    ]
  },
  "15": {
    name: "Jambi",
    capital: "Jambi",
    area: "50.160,05", // dalam km²
    population: "	3.830.227 juta (2024)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Coat_of_arms_of_Jambi.svg/96px-Coat_of_arms_of_Jambi.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Rumah Panggung Kajang Lako",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kajang_Leko_Rumah_adat_Jambi.jpg/330px-Kajang_Leko_Rumah_adat_Jambi.jpg"
          },
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Baju Kurung Tanggung",
            image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1628589659/kt9thu9kz8a66t5bhoq6.jpg"
          },
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Sekapur Sirih",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=hOvgn4U5H5c&list=RDhOvgn4U5H5c&start_radio=1&ab_channel=BEMFKIPUNJA"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Keris",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Kris_and_scabbard.jpg/250px-Kris_and_scabbard.jpg"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Tempoyak Ikan Patin",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5weeBcc03_ZvGKfcU1F7Ckb4AMPwDlfC2Fg&s"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Gambang Kayu",
            image: "https://www.shutterstock.com/image-photo/gambang-kayu-the-wooden-percussion-260nw-1489559354.jpg",
            ytUrl: "https://youtu.be/98_xWDNxA2o?si=mALklfTfTre_XDOC ", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Injit-injit Semut",
            ytUrl: "https://youtu.be/_SLh56C90M4?si=wuVnmz4nj0DbVA4F "
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Tari Sekapur Sirih",
            ytUrl: "https://www.youtube.com/watch?v=hOvgn4U5H5c&list=RDhOvgn4U5H5c&start_radio=1&ab_channel=BEMFKIPUNJA"
          }
        ]
      }
    ]
  },
  "16": {
    name: "Sumatera Selatan",
    capital: "Palembang",
    area: "86,771", // dalam km²
    population: "9.064.690 juta (2024)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Coat_of_arms_of_South_Sumatra.svg/120px-Coat_of_arms_of_South_Sumatra.svg.png",
    "cultures": [
        {
          "name": "Rumah Adat",
          "data": [
            {
              "name": "Rumah Limas",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Rumah_Limas_Palembang.jpg/500px-Rumah_Limas_Palembang.jpg"
            },
            {
              "name": "Rumah Ulu",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rumah_Ulu_Palembang.jpg/500px-Rumah_Ulu_Palembang.jpg"
            }
          ]
        },
        {
          "name": "Baju Adat",
          "data": [
            {
              "name": "Aesan Gede",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Baju_Adat_Palembang_Aesan_Gede.jpg/400px-Baju_Adat_Palembang_Aesan_Gede.jpg"
            },
            {
              "name": "Aesan Paksangko",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Aesan_Paksangko_Palembang.jpg/400px-Aesan_Paksangko_Palembang.jpg"
            }
          ]
        },
        {
          "name": "Tarian",
          "data": [
            {
              "name": "Tari Gending Sriwijaya",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tari_Gending_Sriwijaya.jpg/500px-Tari_Gending_Sriwijaya.jpg",
              "ytUrl": "https://www.youtube.com/watch?v=ttnnx8yFYRw"
            },
            {
              "name": "Tari Tanggai",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tari_Tanggai_Palembang.jpg/500px-Tari_Tanggai_Palembang.jpg",
              "ytUrl": "https://www.youtube.com/watch?v=4MyKkC4dQSk"
            }
          ]
        },
        {
          "name": "Senjata",
          "data": [
            {
              "name": "Keris Palembang",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Keris_Palembang.jpg/400px-Keris_Palembang.jpg"
            },
            {
              "name": "Tombak Trisula",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Trisula_indonesia.jpg/400px-Trisula_indonesia.jpg"
            }
          ]
        },
        {
          "name": "Makanan Khas",
          "data": [
            {
              "name": "Pempek",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Indonesian_cuisine-Pempek-03.jpg/400px-Indonesian_cuisine-Pempek-03.jpg"
            },
            {
              "name": "Tekwan",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tekwan_Palembang.jpg/400px-Tekwan_Palembang.jpg"
            }
          ]
        },
        {
          "name": "Alat Musik",
          "data": [
            {
              "name": "Accordion",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gong_Indonesia.jpg/400px-Gong_Indonesia.jpg",
              "ytUrl": "https://youtu.be/f-bFv0c38_Q?si=HlKRc6ERpwW2vHN3"
            },
            {
              "name": "Gendang Melayu",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gendang_Melayu.jpg/400px-Gendang_Melayu.jpg",
              "ytUrl": "https://www.youtube.com/watch?v=5u49N9RDkNg"
            }
          ]
        },
        {
          "name": "Lagu Daerah",
          "data": [
            {
              "name": "Dek Sangke",
              "ytUrl": "https://www.youtube.com/watch?v=Vi8CmY2s4fM"
            },
            {
              "name": "Cuk Mak Ilang",
              "ytUrl": "https://www.youtube.com/watch?v=02waP5ud8yM"
            }
          ]
        },
        {
          "name": "Seni Pertunjukan",
          "data": [
            {
              "name": "Dulmuluk (Teater Tradisional Palembang)",
              "ytUrl": "https://www.youtube.com/watch?v=ViL1oQ6lTjE"
            }
          ]
        }
    ]
  },
  "17": {
    "name": "Bengkulu",
    "capital": "Bengkulu",
    "area": "19,919", // dalam km²
    "population": "2.06 juta (2023)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coat_of_arms_of_Bengkulu.png/120px-Coat_of_arms_of_Bengkulu.png",
    "cultures": [
      {
        "name": "Rumah Adat",
        "data": [
          {
            "name": "Rumah Bubungan Lima",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Rumah_Bubungan_Lima_Bengkulu.jpg/500px-Rumah_Bubungan_Lima_Bengkulu.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Rejang",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Baju_Adat_Bengkulu_Rejang.jpg/400px-Baju_Adat_Bengkulu_Rejang.jpg"
          },
          {
            "name": "Baju Melayu Bengkulu",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Baju_Melayu_Bengkulu.jpg/400px-Baju_Melayu_Bengkulu.jpg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Andun",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tari_Andun_Bengkulu.jpg/500px-Tari_Andun_Bengkulu.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=gFhGz3-MR3E"
          },
          {
            "name": "Tari Bidadari Teminang Anak",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tari_Bidadari_Teminang_Anak.jpg/500px-Tari_Bidadari_Teminang_Anak.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=BeE7aq74hRo"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Keris Bengkulu",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Keris_Bengkulu.jpg/400px-Keris_Bengkulu.jpg"
          },
          {
            "name": "Pedang Jenawi",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pedang_Jenawi.jpg/400px-Pedang_Jenawi.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Pendap",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pendap_Bengkulu.jpg/400px-Pendap_Bengkulu.jpg"
          },
          {
            "name": "Lemea",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lemea_Bengkulu.jpg/400px-Lemea_Bengkulu.jpg"
          },
          {
            "name": "Bagar Hiu",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bagar_Hiu_Bengkulu.jpg/400px-Bagar_Hiu_Bengkulu.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Doll",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Alat_Musik_Doll_Bengkulu.jpg/400px-Alat_Musik_Doll_Bengkulu.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=4-JBa7OluEY"
          },
          {
            "name": "Serunai",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Serunai_Bengkulu.jpg/400px-Serunai_Bengkulu.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=ApvAE14dcSY"
          }
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Jibeak Awang",
            "ytUrl": "https://www.youtube.com/watch?v=a3qtD8oh2Ro"
          },
          {
            "name": "Lagu Lalan Belek",
            "ytUrl": "https://www.youtube.com/watch?v=emN3nnycCSs"
          }
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Tabot",
            "ytUrl": "https://www.youtube.com/watch?v=jAMF2HlzA4k"
          }
        ]
      }
    ]
  },
  "18": {
    "name": "Lampung",
    "capital": "Bandar Lampung",
    "area": "33,575", // dalam km²
    "population": "9.2 juta (2023)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coat_of_arms_of_Lampung.svg/120px-Coat_of_arms_of_Lampung.svg.png",
    "cultures": [
      {
        "name": "Rumah Adat",
        "data": [
          {
            "name": "Nuwo Sesat",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Rumah_Adat_Lampung_Nuwo_Sesat.jpg/500px-Rumah_Adat_Lampung_Nuwo_Sesat.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Adat Saibatin",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Baju_Adat_Saibatin_Lampung.jpg/400px-Baju_Adat_Saibatin_Lampung.jpg"
          },
          {
            "name": "Baju Adat Pepadun",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Baju_Adat_Pepadun_Lampung.jpg/400px-Baju_Adat_Pepadun_Lampung.jpg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Sigeh Pengunten",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tari_Sigeh_Pengunten_Lampung.jpg/500px-Tari_Sigeh_Pengunten_Lampung.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=CEZ8I4t-2aI"
          },
          {
            "name": "Tari Melinting",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tari_Melinting_Lampung.jpg/500px-Tari_Melinting_Lampung.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=V3aKk4Xro4Q"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Tumbak",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tombak_Adat_Lampung.jpg/400px-Tombak_Adat_Lampung.jpg"
          },
          {
            "name": "Payan",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Payan_Lampung.jpg/400px-Payan_Lampung.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Seruit",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Seruit_Lampung.jpg/400px-Seruit_Lampung.jpg"
          },
          {
            "name": "Gulai Taboh",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gulai_Taboh_Lampung.jpg/400px-Gulai_Taboh_Lampung.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Gamelan Lampung",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gamelan_Lampung.jpg/400px-Gamelan_Lampung.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=mc0gW04Pfl0"
          },
          {
            "name": "Gendang Lampung",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Gendang_Lampung.jpg/400px-Gendang_Lampung.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=yffrKZwoU_0"
          }
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Cangget Agung",
            "ytUrl": "https://youtu.be/ODDVfgXST4E?si=pcgIYANl4SEBwC9e "
          },
          {
            "name": "Lipang Lipang Dang",
            "ytUrl": "https://www.youtube.com/watch?v=9OE-0WdpABw"
          }
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Cangget",
            "ytUrl": "https://www.youtube.com/watch?v=hqlBvwPxlT4"
          }
        ]
      }
    ]
  },
  "19": {
    name: "Kepulauan Bangka Belitung",
    capital: "Pangkalpinang",
    area:  "16,690", // dalam km²
    population: "1.512 juta (2023)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_arms_of_Bangka_Belitung_Islands.svg/120px-Coat_of_arms_of_Bangka_Belitung_Islands.svg.png",
    "cultures": [
        {
          "name": "Rumah Adat",
          "data": [
            {
              "name": "Rumah Rakit",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rumah_Rakit_Bangka_Belitung.jpg/500px-Rumah_Rakit_Bangka_Belitung.jpg"
            },
            {
              "name": "Rumah Limas Potong",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Rumah_Adat_Limas_Potong_Bangka.jpg/500px-Rumah_Adat_Limas_Potong_Bangka.jpg"
            }
          ]
        },
        {
          "name": "Baju Adat",
          "data": [
            {
              "name": "Paksian",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Baju_Adat_Bangka_Belitung_Paksian.jpg/400px-Baju_Adat_Bangka_Belitung_Paksian.jpg"
            }
          ]
        },
        {
          "name": "Tarian",
          "data": [
            {
              "name": "Tari Campak",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Tari_Campak_Bangka_Belitung.jpg/500px-Tari_Campak_Bangka_Belitung.jpg",
              "ytUrl": "https://www.youtube.com/watch?v=aTO9aMBF-6g"
            },
            {
              "name": "Tari Sepen",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tari_Sepen_Bangka_Belitung.jpg/500px-Tari_Sepen_Bangka_Belitung.jpg",
              "ytUrl": "https://www.youtube.com/watch?v=TyPJ8DY_iac"
            }
          ]
        },
        {
          "name": "Senjata",
          "data": [
            {
              "name": "Parang Bangka",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Parang_Bangka.jpg/400px-Parang_Bangka.jpg"
            },
            {
              "name": "Keris Bangka",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Keris_Bangka.jpg/400px-Keris_Bangka.jpg"
            }
          ]
        },
        {
          "name": "Makanan Khas",
          "data": [
            {
              "name": "Lempah Kuning",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Lempah_Kuning_Bangka_Belitung.jpg/400px-Lempah_Kuning_Bangka_Belitung.jpg"
            },
            {
              "name": "Kemplang",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Kemplang_Bangka_Belitung.jpg/400px-Kemplang_Bangka_Belitung.jpg"
            },
            {
              "name": "Lakse",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lakse_Bangka_Belitung.jpg/400px-Lakse_Bangka_Belitung.jpg"
            }
          ]
        },
        {
          "name": "Alat Musik",
          "data": [
            {
              "name": "Dambus",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dambus_Bangka_Belitung.jpg/400px-Dambus_Bangka_Belitung.jpg",
              "ytUrl": "https://www.youtube.com/watch?v=daA4m5WTKYE"
            },
            {
              "name": "Rebana",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/COLLECTIE_TROPENMUSEUM_Enkelvellige_lijsttrom_met_rinkelschijven_TMnr_1032-2.jpg/500px-COLLECTIE_TROPENMUSEUM_Enkelvellige_lijsttrom_met_rinkelschijven_TMnr_1032-2.jpg",
              "ytUrl": "https://www.youtube.com/watch?v=oaBmWUq57hg"
            }
          ]
        },
        {
          "name": "Lagu Daerah",
          "data": [
            {
              "name": "Cik Minah",
              "ytUrl": "https://www.youtube.com/watch?v=GvwOjK1z9eE"
            },
            {
              "name": "Jeritan Batang Gambo",
              "ytUrl": "https://www.youtube.com/watch?v=HLuK0-QGk3g"
            }
          ]
        },
        {
          "name": "Seni Pertunjukan",
          "data": [
            {
              "name": "Sepintu Sedulang",
              "ytUrl": "https://www.youtube.com/watch?v=pp6UEdxglf4"
            }
          ]
        }
      ]
  },
  "21": {
    name: "Kepulauan Riau",
    capital: "Tanjung Pinang",
    area: "8,270", // dalam km²
    population: "2.162 juta (2023)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Coat_of_arms_of_Riau_Islands.svg/120px-Coat_of_arms_of_Riau_Islands.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Belah Bubung",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQuxFvN7HlEYF7PFiM0xClNAYJFayamAGGu56Ml4iwsvZitg&s"
          }
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Pakaian teluk belanga pada pengantin pria",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Aksesoris_pengantin_pria_Melayu_Indonesia_dengan_kain_songket_corak_teluk_berantai_3.jpg/250px-Aksesoris_pengantin_pria_Melayu_Indonesia_dengan_kain_songket_corak_teluk_berantai_3.jpg"
          },
          {
            name: "Pakaian sehari-hari laki-laki Melayu dengan teluk belanga",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pakaian_sehari-hari_pria_Melayu_Deli_berdiri_11.jpg/250px-Pakaian_sehari-hari_pria_Melayu_Deli_berdiri_11.jpg"
          },
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Persembahan",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=KvnZLuhVYNM&list=RDKvnZLuhVYNM&start_radio=1&ab_channel=SanggarSeniBintanTelani"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Keris",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Kris_and_scabbard.jpg/250px-Kris_and_scabbard.jpg"
          },
          {
            name: "Badik",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sari_3.jpg/330px-Sari_3.jpg"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Mie Tarempa",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWnZiyZK2-e3YGHqqjso0Du2cIfewTfv5bQ&s"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Gendang Panjang",
            image: "https://asset.kompas.com/crops/gSCKJVG9N85AmI5t3-A_UH0DflU=/23x0:698x450/1200x800/data/photo/2021/05/06/609377cc5835a.png",
            ytUrl: "https://youtu.be/ZppZJLm2i_k?si=oXOD1X3J5oFlpykD ", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Pulau Bintan",
            ytUrl: "https://youtu.be/x7WpDyQGtxk?si=BiZVRRJUn3nLNiQM "
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Tari Jogi",
            ytUrl: "https://www.youtube.com/watch?v=tr75gv3Bvyk&ab_channel=AlinAlamanda"
          }
        ]
      }
    ]
  },
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
  "32": {
    name: "Jawa Barat",
    capital: "Bandung",
    area: "34,817", // dalam km²
    population: "50.35 million (2024)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coat_of_arms_of_West_Java.svg/120px-Coat_of_arms_of_West_Java.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Imah Badak Heuay",
            image: "https://blog-static.mamikos.com/wp-content/uploads/2021/03/Rumah-Adat-Imah-Badak-Heuay.jpg.webp"
          },
          {
            name: "Imah Togog Anjing",
            image: "https://blog-static.mamikos.com/wp-content/uploads/2021/03/Rumah-Adat-Imah-Togog-Anjing.jpg.webp"
          },
          {
            name: "Imah Julang Ngapak",
            image: "https://blog-static.mamikos.com/wp-content/uploads/2021/03/Rumah-Adat-Imah-Julang-Ngapak.jpg.webp"
          },
          {
            name: "Jolopong",
            image: "https://cdn.medcom.id/dynamic/content/2023/11/14/1630978/s3MoWbkj9X.jpg?w=640"
          }
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Pangsi",
            image: "https://lh7-us.googleusercontent.com/WmrBOI7z8nD0Yhi3mC6-Ee4Q-gxXYRh3iBg2UPiRSgZBJ8DZyk0KOrTicfoE2HLOPGYbBwP9wO1Um1XlZh-ObdG0mSFqv8Fy9zXJMEuoK0tnp7G8ycLPgPd2jF0aAk50sWRIR--jxRc9pNkvy-TEzAE"
          },
          {
            name: "Kebaya Sunda",
            image: "https://lh7-us.googleusercontent.com/mITiEu4xNNIGHnZ89EfqqYSDa4R6XZdwV5hTA7znEd7VviPEMqVNGBkMO11v7O-Ch27b3P_fF8VQ5pEYcm2PJX0jRnI8dZHUhPv2YgqR0a9XhaVRVJUZUozw8ZFp5WUtTf_i3RfheDTP8mL9h9OXHhM"
          }
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Jaipong",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=ZnfDoVWT2rc&list=RDZnfDoVWT2rc&start_radio=1&ab_channel=SURYAVISUAL"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Kujang",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kujang_%288688254683%29.jpg/330px-Kujang_%288688254683%29.jpg"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Batagor",
            image: "https://ik.imagekit.io/waters2021/sehataqua/storage/images/5ef9ed3a9089a1589e6734f3/artikel-rework/1__Batagor.jpg?tr=q-80,w-1280,f-webp"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Angklung",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Indonesianbamboomusicangklung.jpg/250px-Indonesianbamboomusicangklung.jpg",
            ytUrl: "https://youtu.be/7aCftg3ufyo?si=00YeArD1lc_mwxjL", // penggunaan alat musik
          },
          {
            name: "Suling",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Suling.jpg/250px-Suling.jpg",
            ytUrl: "https://youtube.com/shorts/5fIcMHHY0Xk?si=UBiaw0D_Vqd1zoj8", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Manuk Dadali",
            ytUrl: "https://youtu.be/RENOD--yd2c?si=EgLEHzdZCR8Jl9wM "
          },
          {
            name: "Tokecang",
            ytUrl: "https://www.youtube.com/watch?v=https://youtube.com/watch?v=atFo0JEblzo&feature=shared "
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Angklung bungko",
            ytUrl: "https://www.youtube.com/watch?v=2InLXClyKy8&list=RD2InLXClyKy8&start_radio=1&ab_channel=WARILAYUTHUSRI"
          }
        ]
      }
    ]
  },
  "33": {
    name: "Jawa Tengah",
    capital: "Semarang",
    area: "32,801", // dalam km²
    population: "37.89 juta (2024)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_Central_Java.svg/120px-Coat_of_arms_of_Central_Java.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Joglo",
            image: "https://asset.kompas.com/crops/FEzhx7dF9qsaZHsgQFlIC36qNhU=/0x0:832x555/750x500/data/photo/2021/09/01/612f052aec0cd.jpg"
          },
          {
            name: "Limasan",
            image: "https://asset.kompas.com/crops/ghUXQ3ij5_B5v2n62RHfGXNgtO4=/27x19:902x602/750x500/data/photo/2021/12/27/61c9bab13e358.jpg"
          },
          {
            name: "Tajug",
            image: "https://asset.kompas.com/crops/lFkeys6GOKq_7ZmCWsjR5h8emjc=/3x0:1349x897/750x500/data/photo/2021/12/27/61c9c10d96838.jpg"
          }
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Surjan",
            image: "https://blog.knitto.co.id/wp-content/uploads/2024/05/Baju-Adat-Jawa-Tengah-Surjan-696x691.jpg"
          },
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Gambyong",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=ua5ljHVBV64&list=RDua5ljHVBV64&start_radio=1&ab_channel=purnomobudi"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Keris",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Keris_Jawa_Tengah.width-800.format-webp.webp"
          },
          {
            name: "Wedhung",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Wedhung_scWxHcb.width-800.format-webp.webp"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Soto Kudus",
            image: "https://www.cimbniaga.co.id/content/dam/cimb/inspirasi/soto-kudus.webp"
          },
          {
            name: "Getuk",
            image: "https://www.cimbniaga.co.id/content/dam/cimb/inspirasi/getuk.webp"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Gendang",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Traditional_indonesian_drums.jpg",
            ytUrl: "https://youtu.be/houn_rY7sSs?si=yYJewFxr4ucY8Ex8", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Lir-ilir",
            ytUrl: "https://youtube.com/watch?v=ZDGhJ4ToP2k&feature=shared"
          },
          {
            name: "Gundul-gundul Pacul",
            ytUrl: "https://youtu.be/JhH6SLBYqIE?si=drhTFGV53wZTYEHT"
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Tari Kuda Lumping",
            ytUrl: "https://www.youtube.com/watch?v=zLseUB-OMxU&ab_channel=smadipo1pwt_official"
          }
        ]
      }
    ]
  },
  "34": {
    name: "Daerah Istimewa Yogyakarta",
    capital: "Yogyakarta",
    area: "3,186", // dalam km²
    population: "-" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Coat_of_arms_of_Yogyakarta.svg/120px-Coat_of_arms_of_Yogyakarta.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Joglo",
            image: "https://www.kabarwisata.id/wp-content/uploads/2022/04/rumah-adat-joglo.jpg"
          },
          {
            name: "Bangsal Kencono",
            image: "https://www.kabarwisata.id/wp-content/uploads/2022/04/Rumah-Adat-Bangsal-Kencono.jpg"
          },
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Kebaya",
            image: "https://dewatiket.id/blog/wp-content/uploads/2025/02/Kebaya-Yogyakarta.webp"
          },
          {
            name: "Surjan",
            image: "https://dewatiket.id/blog/wp-content/uploads/2025/02/Surjan-1920x1280.jpg"
          }
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Serimpi",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=bv8vrrX4lYM&ab_channel=IndonesiaKaya"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Keris",
            image: "https://bakpiakukustugu.co.id/uploads/11/2023-11/1db008405ba820449429ea130993e628.jpg"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Gudeg Nangka",
            image: "https://www.unileverfoodsolutions.co.id/id/inspirasi-chef/makanan-khas-jogja/jcr:content/parsys/set1/row2/span12/image.img.jpg/1715146069873.jpg"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Gamelan",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Traditional_indonesian_instruments02.jpg/250px-Traditional_indonesian_instruments02.jpg",
            ytUrl: "https://youtu.be/KkAXWw5D6sE?si=A9tADLCEGtYn9wwX ", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Suwe Ora Jamu",
            ytUrl: "https://youtu.be/NLiGaO3o-to?si=c0VVxaH3V0-Yo9j1"
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Wayang Kulit",
            ytUrl: "https://www.youtube.com/watch?v=B48SxodXOXU&ab_channel=GALERIWAYANGJOGJA"
          }
        ]
      }
    ]
  },
  "35": {
    name: "Jawa Timur",
    capital: "Surabaya",
    area: "47,922", // dalam km²
    population: "41.81 juta (2024)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coat_of_arms_of_East_Java.svg/120px-Coat_of_arms_of_East_Java.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Tanean Lanjhang (Madura)",
            image: "https://akcdn.detik.net.id/community/media/visual/2023/08/25/rumah-adat-tanean-lanjhang-madura_169.png?w=620"
          },
          {
            name: "Tengger (Probolinggo)",
            image: "https://akcdn.detik.net.id/community/media/visual/2023/08/25/rumah-adat-tengger-probolinggo.jpeg?w=554"
          },
          {
            name: "Dhurung (Bawean)",
            image: "https://akcdn.detik.net.id/community/media/visual/2023/08/25/rumah-adat-dhurung-bawean.jpeg?w=1068"
          },
          {
            name: "Joglo",
            image: "https://cdn.rri.co.id/berita/Surabaya/o/1741934915220-Rumah-Adat-Joglo/3235okqsbh5ca1t.jpeg"
          }
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Baju Gothil",
            image: "https://cdn1.katadata.co.id/media/images/temp/2023/07/06/Pakaian_Adat_Jawa_Timur-2023_07_06-15_35_35_c89e6ad223cf406f1e48a1a3ce3e4f50.jpg"
          },
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Gandrung Banyuwangi",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=PCYtzoE3-cg&list=RDPCYtzoE3-cg&start_radio=1&ab_channel=JiwaEtnikBlambangan"
          },
          {
            name: "Reog Ponorogo",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=NmT7b6wZszw&ab_channel=Kompas.com"
          },
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Clurit",
            image: "https://cnc-magazine.oramiland.com/parenting/images/Kujang.width-800.format-webp.webp"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Tahu Campur",
            image: "https://www.unileverfoodsolutions.co.id/id/inspirasi-chef/makanan-khas-jawa-timur/jcr:content/parsys/set1/row2/span12/image.img.jpg/1715148842384.jpg"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Timbal atau Gendang Khas Madura",
            image: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/radarmadura/2017/08/muhammad-amin-perajin-alat-musik-tradisional-berkarya-sejak-sd_m_8597.jpeg",
            ytUrl: "https://youtu.be/sGMU8h0rWBE?si=SCR4xwBvi6dKTTpB ", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Rek Ayo Rek",
            ytUrl: "https://youtu.be/e8YK7r6vDRg?si=UOlanAoZmcKFcKYI "
          },
          {
            name: "Cublak-cublak Suweng",
            ytUrl: "https://youtu.be/Qmu4ygwS2SI?feature=shared "
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Wayang Kulit",
            ytUrl: "https://www.youtube.com/watch?v=8TRNz8izKCg&ab_channel=STUDIONEBRYAN"
          }
        ]
      }
    ]
  },
  "36": {
    name: "Banten",
    capital: "Serang",
    area:  "9,663", // dalam km²
    population: "12.43 juta (2024)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Coat_of_arms_of_Banten.svg/120px-Coat_of_arms_of_Banten.svg.png",
    cultures: [
      {
        name: "Rumah Adat",
        data: [
          {
            name: "Sulah Nyanda",
            image: "https://cnc-magazine.oramiland.com/parenting/images/rumah-adat-banten_V82juev.width-800.format-webp.webp"
          },
        ]
      },
      {
        name: "Baju Adat",
        data: [
          {
            name: "Pangsi",
            image: "https://blog-static.mamikos.com/wp-content/uploads/2023/01/Pakaian-Adat-Pangsi.png.webp"
          },
        ]
      },
      {
        name: "Tarian",
        data: [
          {
            name: "Tari Cokek",
            image: "",
            ytUrl: "https://youtu.be/X_GeBXD21Fk"
          },
          {
            name: "Tari Katuran",
            image: "",
            ytUrl: "https://youtu.be/xdXR8ZTozrs"
          },
          {
            name: "Tari Rampak Bedug",
            image: "",
            ytUrl: "https://www.youtube.com/watch?v=Gj3CiU15CKI&ab_channel=Indonesia5"
          }
        ]
      },
      {
        name: "Senjata",
        data: [
          {
            name: "Bedog",
            image: "https://pdbifiles.nos.jkt-1.neo.id/files/2014/09/22/wulan_bedog-goloksukubaduy.jpg"
          }
        ]
      },
      {
        name: "Makanan Khas",
        data: [
          {
            name: "Sate Bandeng",
            image: "https://nilaigizi.com/assets/images/produk/produk_1535787496.jpg"
          }
        ]
      },
      {
        name: "Alat Musik",
        data: [
          {
            name: "Pantun Bambu",
            image: "https://thumb.viva.id/vivaolret/1265x711/2022/05/26/628f252bad827-alat-musik-tradisional-pantun-bambu_olret.jpg",
            ytUrl: "https://youtu.be/5qPEiCHJ2QM?si=Y5MY6v4RkBuDWWvl ", // penggunaan alat musik
          },
        ]
      },
      {
        name: "Lagu Daerah",
        data: [
          {
            name: "Dayung Sampan",
            ytUrl: "https://youtu.be/AlKPw_DL0Ao?si=g2JNsIkngQmeovdg"
          },
        ]
      },
      {
        name: "Seni Pertunjukan",
        data: [
          {
            name: "Debus Surosowan",
            ytUrl: "https://www.youtube.com/watch?v=rtBDG5r_LOc&ab_channel=kaelangsatria"
          }
        ]
      }
    ]
  },
"51": {
  "name": "Bali",
  "capital": "Denpasar",
  "area": 5780,
  "population": 4340000,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Coat_of_arms_of_Bali.svg/800px-Coat_of_arms_of_Bali.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Gapura Candi Bentar",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Candi_Bentar_Bali.jpg/500px-Candi_Bentar_Bali.jpg"
        },
        {
          "name": "Rumah Bale",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bale_Bali.jpg/500px-Bale_Bali.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Payas Agung",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Busana_Payas_Agung_Bali.jpg/500px-Busana_Payas_Agung_Bali.jpg"
        },
        {
          "name": "Kebaya Bali",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kebaya_Bali_Modern.jpg/500px-Kebaya_Bali_Modern.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Kecak",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Kecak_Dance_Uluwatu_Bali.jpg/500px-Kecak_Dance_Uluwatu_Bali.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=Y1c8zI-fCkE"
        },
        {
          "name": "Tari Pendet",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tari_Pendet_Bali.jpg/500px-Tari_Pendet_Bali.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=uepn6VZgtwY"
        },
        {
          "name": "Tari Barong",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Barong_Bali.jpg/500px-Barong_Bali.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=d2XKY2CgAEQ"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Keris Bali",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Keris_Bali.jpg/500px-Keris_Bali.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Ayam Betutu",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ayam_Betutu_Bali.jpg/500px-Ayam_Betutu_Bali.jpg"
        },
        {
          "name": "Lawar",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Lawar_Bali.jpg/500px-Lawar_Bali.jpg"
        },
        {
          "name": "Babi Guling",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Babi_Guling_Bali.jpg/500px-Babi_Guling_Bali.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Gamelan Bali",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Gamelan_Bali.jpg/500px-Gamelan_Bali.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=4syYgz6F0rE"
        },
        {
          "name": "Rindik",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rindik_Bali.jpg/500px-Rindik_Bali.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=2Uco_pbt0jM"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Janger",
          "ytUrl": "https://www.youtube.com/watch?v=ywPu6I4lhKs"
        },
        {
          "name": "Macepet-cepetan",
          "ytUrl": "https://www.youtube.com/watch?v=kbT4jY0fDwQ"
        },
        {
          "name": "Dewa Ayu",
          "ytUrl": "https://www.youtube.com/watch?v=HKx5p2LOEEA"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Wayang Wong Bali",
          "ytUrl": "https://www.youtube.com/watch?v=gFPj0In6kMI"
        },
        {
          "name": "Drama Gong",
          "ytUrl": "https://www.youtube.com/watch?v=AGL5OTup-s4"
        }
      ]
    }
  ]
},

"52": {
  "name": "Nusa Tenggara Barat",
  "capital": "Mataram",
  "area": 20153,
  "population": 5400000,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Coat_of_arms_of_West_Nusa_Tenggara.svg/800px-Coat_of_arms_of_West_Nusa_Tenggara.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Bale Lumbung",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bale_Lumbung_Sasak.jpg/500px-Bale_Lumbung_Sasak.jpg"
        },
        {
          "name": "Bale Tani",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bale_Tani_Sasak.jpg/500px-Bale_Tani_Sasak.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Baju Adat Sasak (Lambung & Pegon)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Baju_Adat_Sasak.jpg/500px-Baju_Adat_Sasak.jpg"
        },
        {
          "name": "Baju Bonder (Bima)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Baju_Bonder_Bima.jpg/500px-Baju_Bonder_Bima.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Gendang Beleq",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Gendang_Beleq_Sasak.jpg/500px-Gendang_Beleq_Sasak.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=v5w2oMweGVE"
        },
        {
          "name": "Tari Peresean",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tari_Peresean_Sasak.jpg/500px-Tari_Peresean_Sasak.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=QrcuXvl2mHg"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Keris Bima",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Keris_Bima.jpg/500px-Keris_Bima.jpg"
        },
        {
          "name": "Perisai Kayu",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Perisai_Bima.jpg/500px-Perisai_Bima.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Ayam Taliwang",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ayam_Taliwang.jpg/500px-Ayam_Taliwang.jpg"
        },
        {
          "name": "Plecing Kangkung",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Plecing_Kangkung.jpg/500px-Plecing_Kangkung.jpg"
        },
        {
          "name": "Sate Rembiga",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sate_Rembiga.jpg/500px-Sate_Rembiga.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Gendang Beleq",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Gendang_Beleq_Sasak.jpg/500px-Gendang_Beleq_Sasak.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=IUVg7YFrpTw"
        },
        {
          "name": "Serunai Bima",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Serunai_Bima.jpg/500px-Serunai_Bima.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=OCXqpHivSZs"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Orong-orong",
          "ytUrl": "https://www.youtube.com/watch?v=ay9pi7c1rGo"
        },
        {
          "name": "Tebe",
          "ytUrl": "https://www.youtube.com/watch?v=NeP01F4adYc"
        },
        {
          "name": "Lengso",
          "ytUrl": "https://www.youtube.com/watch?v=KAtCkWv-KN8"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Peresean (Pertarungan tradisional)",
          "ytUrl": "https://www.youtube.com/watch?v=j8Y50Nac5uQ"
        },
        {
          "name": "Wayang Sasak",
          "ytUrl": "https://www.youtube.com/watch?v=GVhzVAD1GmQ"
        }
      ]
    }
  ]
},

"53": {
  "name": "Nusa Tenggara Timur",
  "capital": "Kupang",
  "area": 48718,
  "population": 5600000,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coat_of_arms_of_East_Nusa_Tenggara.svg/800px-Coat_of_arms_of_East_Nusa_Tenggara.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Sao Ata Mosa Lakitana (Rumah Raja Sumba)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Rumah_Adat_Sumba.jpg/500px-Rumah_Adat_Sumba.jpg"
        },
        {
          "name": "Sao Ria (Rumah Adat Flores)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sao_Ria_Flores.jpg/500px-Sao_Ria_Flores.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Ikat Sumba",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tenun_Ikat_Sumba.jpg/500px-Tenun_Ikat_Sumba.jpg"
        },
        {
          "name": "Baju Amarasi (Timor)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Baju_Amarasi_Timor.jpg/500px-Baju_Amarasi_Timor.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Caci (Manggarai, Flores)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Tari_Caci_Flores.jpg/500px-Tari_Caci_Flores.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=TLTLZ3LqJrE"
        },
        {
          "name": "Tari Likurai (Belu, Timor)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tari_Likurai_Timor.jpg/500px-Tari_Likurai_Timor.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=pYFZVzzYy0w"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Parang",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Parang_Sumba.jpg/500px-Parang_Sumba.jpg"
        },
        {
          "name": "Suri (tombak khas NTT)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tombak_Suri_NTT.jpg/500px-Tombak_Suri_NTT.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Jagung Bose",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jagung_Bose_NTT.jpg/500px-Jagung_Bose_NTT.jpg"
        },
        {
          "name": "Se'i Sapi",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sei_Sapi_Kupang.jpg/500px-Sei_Sapi_Kupang.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Sasando",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sasando_Alat_Musik_NTT.jpg/500px-Sasando_Alat_Musik_NTT.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=KaTtXwQhKHQ"
        },
        {
          "name": "Tambur Likurai",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Tambur_Likurai_Timor.jpg/500px-Tambur_Likurai_Timor.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=VIrZtJbqvgc"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "O Nina No",
          "ytUrl": "https://www.youtube.com/watch?v=8Af2WnxhdIM"
        },
        {
          "name": "Bolelebo",
          "ytUrl": "https://www.youtube.com/watch?v=9_7uVtRz7f8"
        },
        {
          "name": "Anak Kambing Saya",
          "ytUrl": "https://www.youtube.com/watch?v=mgHGOIkoK8o"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Caci (pertarungan tradisional Manggarai)",
          "ytUrl": "https://www.youtube.com/watch?v=weFZc7OYXN8"
        },
        {
          "name": "Sandelwood Parade (Sumba)",
          "ytUrl": "https://www.youtube.com/watch?v=GBH5zFzHzSs"
        }
      ]
    }
  ]
},

  "61": {
    "name": "Kalimantan Barat",
    "capital": "Pontianak",
    "area": "147,037", // dalam km²
    "population": " 5.696 juta (2024)", // perkiraan 2023
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Coat_of_arms_of_West_Kalimantan.svg/120px-Coat_of_arms_of_West_Kalimantan.svg.png",
    "cultures": [
      {
        "name": "Rumah Adat",
        "data": [
          {
            "name": "Rumah Panjang",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rumah_Panjang_Suku_Dayak.jpg/500px-Rumah_Panjang_Suku_Dayak.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "King Baba (Pria)",
            "image": "https://blogkulo.com/wp-content/uploads/2022/07/Pakaian-Adat-Kalimantan-Barat-King-Baba.jpg"
          },
          {
            "name": "King Bibinge (Wanita)",
            "image": "https://blogkulo.com/wp-content/uploads/2022/07/Pakaian-Adat-Kalimantan-Barat-King-Bibinge.jpg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Monong (Tolak Bala)",
            "image": "https://asset.kompas.com/crops/QDKNdf6a0p6kbdbnlPV-muMEric=/0x0:740x493/750x500/data/photo/2021/07/21/60f7e23e7c63b.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=Q1ohmRrKcBY"
          },
          {
            "name": "Tari Zapin Tembung",
            "image": "https://i.ytimg.com/vi/R-H3CYwiV9Y/maxresdefault.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=R-H3CYwiV9Y"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Mandau_Dayak.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Bubur Pedas Sambas",
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Bubur_pedas_sambas.jpg"
          },
          {
            "name": "Pengkang",
            "image": "https://i0.wp.com/www.selasar.com/wp-content/uploads/2021/11/pengkang-khas-kalbar.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Sape’",
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/72/Sape%27%2C_traditioneel_snaarinstrument_van_de_Dayak.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=5ck-50Nps88"
          }
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Cik Cik Periuk",
            "ytUrl": "https://youtu.be/HFaT5PbsXCU?si=wtflm3MDphaNgqTG"
          },
          {
            "name": "Alon-Alon",
            "ytUrl": "https://www.youtube.com/watch?v=wKJQQfCSzV8"
          }
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Sandung (Ritual Dayak)",
            "ytUrl": "https://www.youtube.com/watch?v=r3YbIedq8Nc"
          }
        ]
      }
    ]
  },
  "62": {
    "name": "Kalimantan Tengah",
    "capital": "Palangka Raya",
    "area": "153,444", 
    "population": "2.81 juta (2024)", 
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_Central_Kalimantan.svg/120px-Coat_of_arms_of_Central_Kalimantan.svg.png",
    "cultures": [
      {
        "name": "Rumah Adat",
        "data": [
          {
            "name": "Rumah Betang",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Rumah_Betang_Kalimantan_Tengah.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Pakaian Sangkarut (Pria)",
            "image": "https://i0.wp.com/seringjalan.com/wp-content/uploads/2020/08/Pakaian-adat-suku-Dayak-Ngaju.jpg"
          },
          {
            "name": "Pakaian Sangkarut (Wanita)",
            "image": "https://seringjalan.com/wp-content/uploads/2020/08/pakaian-adat-dayak-wanita.jpg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Tambun dan Bungai",
            "image": "https://asset.kompas.com/crops/gJpOAGbD8d0gEfa0nUqq3BjXACs=/0x0:780x520/750x500/data/photo/2021/07/22/60f90dd1d2173.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=gY6_NcAfC3U"
          },
          {
            "name": "Tari Balean Dadas",
            "image": "https://i.ytimg.com/vi/NfpkT0oEC6E/maxresdefault.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=NfpkT0oEC6E"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Mandau_Dayak.jpg"
          },
          {
            "name": "Sipet (Senjata Tiup)",
            "image": "https://budaya-indonesia.org/storage/app/uploads/public/5ad/0dd/07c/thumb_6800_700_500_0_0_auto.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Juhu Singkah (Umbut Rotan)",
            "image": "https://cdn.idntimes.com/content-images/community/2019/05/59522714-657919648002300-2360954183152041080-n-91df463d1ae2cd64066387d2a97432c6.jpg"
          },
          {
            "name": "Kalumpe (Daun Singkong Tumbuk)",
            "image": "https://cdn.idntimes.com/content-images/post/20190527/60843192-1014177142242319-6062447983219885346-n-f1e7f97928a2c5f5b79bbde74ce37a59.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Garantung",
            "image": "https://www.pegipegi.com/travel/wp-content/uploads/2019/08/garantung.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=qPuJ1Zg0LXc"
          },
          {
            "name": "Sampe’",
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/72/Sape%27%2C_traditioneel_snaarinstrument_van_de_Dayak.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=5ck-50Nps88"
          }
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Tumpi Wayu",
            "ytUrl": "https://www.youtube.com/watch?v=yyOaQv1N5RM"
          },
          {
            "name": "Karungut",
            "ytUrl": "https://www.youtube.com/watch?v=9b5ewP2w-YI"
          }
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Mamapas Lewu (Upacara Adat Dayak Ngaju)",
            "ytUrl": "https://www.youtube.com/watch?v=2ccxP3umQ4s"
          }
        ]
      }
    ]
  },

  "63": {
    "name": "Kalimantan Selatan",
    "capital": "Banjarmasin",
    "area": "36",
    "population": "4.222 juta (2023)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coat_of_arms_of_South_Kalimantan.svg/120px-Coat_of_arms_of_South_Kalimantan.svg.png",
    "cultures": [
      {
        "name": "Rumah Adat",
        "data": [
          {
            "name": "Rumah Banjar (Bubungan Tinggi)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Rumah_Bubungan_Tinggi.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Baamar Galung Pancar Mata (Pria)",
            "image": "https://i0.wp.com/seringjalan.com/wp-content/uploads/2020/09/baju-pancar-mata.jpg"
          },
          {
            "name": "Baju Bagajah Gamuling Baular Lulut (Wanita)",
            "image": "https://seringjalan.com/wp-content/uploads/2020/09/baju-adat-bagajah-gamuling.jpg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Radap Rahayu",
            "image": "https://asset.kompas.com/crops/wot8dke2ImrA5Da9FgIjtbYioiU=/0x0:780x520/750x500/data/photo/2021/07/22/60f93a0a40a60.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=98xcm2oZb6A"
          },
          {
            "name": "Tari Baksa Kembang",
            "image": "https://kebudayaan.kemdikbud.go.id/ditwdb/wp-content/uploads/sites/6/2017/04/baksa-kembang.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=JURzj7ZHmtI"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Mandau_Dayak.jpg"
          },
          {
            "name": "Keris Banjar",
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/72/Keris_Banjar.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Soto Banjar",
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Soto_Banjar.jpg"
          },
          {
            "name": "Ketupat Kandangan",
            "image": "https://cdn.idntimes.com/content-images/community/2019/11/ketupat-kandangan-7dc7c849bba72758b91e1af8c0f8d309.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Panting",
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Alat_musik_panting.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=J8Zzjv_dGh4"
          },
          {
            "name": "Kuriding",
            "image": "https://cdn.idntimes.com/content-images/community/2019/10/kuriding-f05891a57fc32c57d60a67152d67c9c0.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=JgRhlq3Q2HI"
          }
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Ampar-Ampar Pisang",
            "ytUrl": "https://youtu.be/WKXE2Qam_m8?si=dtKxI-mk4oPgvKBy"
          },
          {
            "name": "Paris Barantai",
            "ytUrl": "https://www.youtube.com/watch?v=9kHhxRhJx6g"
          }
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Mamanda (Teater Rakyat Banjar)",
            "ytUrl": "https://www.youtube.com/watch?v=1oXr0c3cgxI"
          }
        ]
      }
    ]
  },

  "64": {
    "name": "Kalimantan Timur",
    "capital": "Samarinda",
    "area": "129,067",
    "population": "4.03 jakarta (2023)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Coat_of_arms_of_East_Kalimantan.svg/120px-Coat_of_arms_of_East_Kalimantan.svg.png",
    "cultures": [
      {
        "name": "Rumah Adat",
        "data": [
          {
            "name": "Rumah Lamin (Dayak Kenyah)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Rumah_Adat_Lamin_di_Taman_Mini_Indonesia_Indah.jpg/800px-Rumah_Adat_Lamin_di_Taman_Mini_Indonesia_Indah.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Ta’a (Wanita Dayak)",
            "image": "https://cdn.idntimes.com/content-images/post/20200623/baju-ta-a-dan-sapei-sapaq-836b38e8e9dfdf0df97c4d2c74f4ed8e.jpg"
          },
          {
            "name": "Sapei Sapaq (Pria Dayak)",
            "image": "https://i0.wp.com/seringjalan.com/wp-content/uploads/2020/08/Baju-Sapei-Sapaq.jpg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Gong",
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/35/Tari_Gong.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=drWdfowA5kY"
          },
          {
            "name": "Tari Hudoq",
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Hudoq_Dance.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=6fzwmF1TcbY"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Mandau_Dayak.jpg"
          },
          {
            "name": "Telawang (Perisai Dayak)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Tameng_telawang_dayak.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Nasi Bekepor",
            "image": "https://cdn.idntimes.com/content-images/post/20190704/nasi-bekepor-1-b24c5f6f1f1cbfa4b9b4f4ff2d89c3f4.jpg"
          },
          {
            "name": "Amplang",
            "image": "https://cdn.idntimes.com/content-images/community/2022/07/amplang-camilan-khas-kalimantan-2-85dcb66e89c5ff996f8c2d49e6c109f1.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Sape (Sampe)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sapeh.jpg/800px-Sapeh.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=Ko74zzAr4hQ"
          },
          {
            "name": "Gandang",
            "image": "https://asset.kompas.com/crops/7v2ZcKwpd7RDBh4iGv3U7aNvnI0=/0x0:780x520/750x500/data/photo/2020/09/24/5f6c1a7aa9db4.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=kR4CB0-UBAU"
          }
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Indung-Indung",
            "ytUrl": "https://youtu.be/uV2RlE4QjMc?si=rnpussNRCeI7u6gi"
          },
          {
            "name": "Timang Timang Anakku Sayang",
            "ytUrl": "https://www.youtube.com/watch?v=F-9V9N1zXOs"
          }
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Hudoq Festival",
            "ytUrl": "https://www.youtube.com/watch?v=Y6fdhObNZcU"
          }
        ]
      }
    ]
  },

  "65": {
    "name": "Kalimantan Utara",
    "capital": "Tanjung Selor",
    "area": "71,177",
    "population": "	770.627 (2024)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Coat_of_arms_of_North_Kalimantan_%282021_version%29.svg/120px-Coat_of_arms_of_North_Kalimantan_%282021_version%29.svg.png",
    "cultures": [
      {
        "name": "Rumah Adat",
        "data": [
          {
            "name": "Rumah Baloy (Suku Tidung)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/42/Rumah_Budaya_Baloy_Mayo.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Manteren Lalang",
            "image": "https://cdn.idntimes.com/content-images/post/20210701/pakaian-adat-kalimantan-utara-9a41e7b38de3ee579c6f24c5a1d6c66a.jpg"
          },
          {
            "name": "Baju Ta’a & Sapei Sapaq (Dayak)",
            "image": "https://cdn.idntimes.com/content-images/post/20200623/baju-ta-a-dan-sapei-sapaq-836b38e8e9dfdf0df97c4d2c74f4ed8e.jpg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Jepen (Pengaruh Melayu & Bugis)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Tari_Jepen.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=j4NqRJiv9ew"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Mandau_Dayak.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Ikan Asin Richa",
            "image": "https://cdn.idntimes.com/content-images/post/20210312/ikan-asin-rica-e7c73e9e28c7b893bb84f645dd40427d.jpg"
          },
          {
            "name": "Bubur Pedas",
            "image": "https://cdn.idntimes.com/content-images/post/20210701/bubur-pedas-3f5c8291483fddf43e91c2f95cb55e14.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Sampe (Dayak)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sapeh.jpg/800px-Sapeh.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=Ko74zzAr4hQ"
          },
          {
            "name": "Babun (Gendang Khas Tidung)",
            "image": "https://www.goodnewsfromindonesia.id/uploads/post/large-474f03ee1a29391df53b582af5cc4a0f.jpg",
            "ytUrl": "https://www.youtube.com/watch?v=W_pKlgU7bik"
          }
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Tidung – Bebalon",
            "ytUrl": "https://www.youtube.com/watch?v=_t0R6-w8S5o"
          },
          {
            "name": "Dayak – Salai Jinai",
            "ytUrl": "https://www.youtube.com/watch?v=O4ix3ovDJck"
          }
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Pertunjukan Hudoq (Dayak)",
            "ytUrl": "https://www.youtube.com/watch?v=6fzwmF1TcbY"
          }
        ]
      }
    ]
  },

"71": {
  "name": "Sulawesi Utara",
  "capital": "Manado",
  "area": "13,852",
  "population": "2.645.291 (2024)",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Coat_of_arms_of_North_Sulawesi.svg/120px-Coat_of_arms_of_North_Sulawesi.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Wale (Minahasa)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Wale_Kabupaten_Minahasa.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Pakaian Adat Minahasa",
          "image": "https://cdn.idntimes.com/content-images/post/20200623/pakaian-adat-minahasa-7b8d5f4e3e6f0c3c5bfc585d6e7d3b9a.jpg"
        },
        {
          "name": "Pakaian Adat Bolaang Mongondow",
          "image": "https://cdn.idntimes.com/content-images/post/20200623/pakaian-adat-bolaang-mongondow-2b8206c27d0cfe9e9d88abf8e0cf9a0a.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Kabasaran (Minahasa)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/Tari_Kabasaran.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=-DY8VevrM6Y"
        },
        {
          "name": "Tari Maengket",
          "image": "https://www.goodnewsfromindonesia.id/uploads/post/large-7315d70db73454d8a1e7b7e37e13c9ce.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=3wlVbk1d7BE"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Santi (Tombak Minahasa)",
          "image": "https://www.goodnewsfromindonesia.id/uploads/post/large-836a25551cb50e77b06a14a2ec4c9d39.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Tinutuan (Bubur Manado)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/42/Tinutuan_Bubur_Manado.jpg"
        },
        {
          "name": "Cakalang Fufu",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/09/Cakalang_Fufu.jpg"
        },
        {
          "name": "Rica-Rica",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Ayam_Rica-Rica.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Kolintang",
          "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Alat_musik_Kolintang.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=Qluhw_SvQzk"
        },
        {
          "name": "Bambu Klarinet (Sulut)",
          "image": "https://www.goodnewsfromindonesia.id/uploads/post/large-7bb6461a3c727d8ee6f95e2c0bb158bb.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=UyNElbzMPXc"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Si Patokaan",
          "ytUrl": "https://youtu.be/VbN4-j5Tm8Q?si=6oRoQIpGU4-wQIFI "
        },
        {
          "name": "O Ina Ni Keke",
          "ytUrl": "https://www.youtube.com/watch?v=wrgYPVuVFdU"
        },
        {
          "name": "Esa Mokan",
          "ytUrl": "https://www.youtube.com/watch?v=bAy6qzlvAIg"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Kabasaran Show (Tarian Perang)",
          "ytUrl": "https://www.youtube.com/watch?v=MLLXtF8iTIo"
        }
      ]
    }
  ]
},

"72": {
  "name": "Sulawesi Tengah",
  "capital": "Palu",
  "area": "61,841",
  "population": "3.087 juta (2024)",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Coat_of_arms_of_Central_Sulawesi.svg/120px-Coat_of_arms_of_Central_Sulawesi.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Tambi (Suku Kaili)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rumah_Adat_Tambi.jpg"
        },
        {
          "name": "Banua Mbongko (Pamona)",
          "image": "https://sultengprov.go.id/uploads/post/image/banua-mbongko.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Ngata (Pakaian Adat Kaili)",
          "image": "https://www.celebes.co/wp-content/uploads/2022/04/Pakaian-Adat-Suku-Kaili.jpg"
        },
        {
          "name": "Pakaian Adat Pamona",
          "image": "https://cdn.idntimes.com/content-images/community/2021/07/pakaian-adat-pamona-ff42f242b0de6d44e9f7c25d07e27705.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Dero (Pamona)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Tari_Dero_Tentena.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=rxrEbbQqO10"
        },
        {
          "name": "Tari Pamonte (Kaili)",
          "image": "https://www.goodnewsfromindonesia.id/uploads/post/large-9f6a04de6d8a4634b2cf8c0f14f3c534.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=6m-1o6eJGmg"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Guma (Pedang Suku Kaili)",
          "image": "https://www.goodnewsfromindonesia.id/uploads/post/large-43cc0fda6b270d0e71f4d6ac61412f9b.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Kaledo (Kaki Lembu Donggala)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/42/Kaledo.jpg"
        },
        {
          "name": "Uta Kelo (Sayur Daun Kelor)",
          "image": "https://sultengprov.go.id/uploads/post/image/uta-kelo.jpg"
        },
        {
          "name": "Lalampa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Lalampa.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Gimba (Gendang Kaili)",
          "image": "https://www.goodnewsfromindonesia.id/uploads/post/large-d89e28f5a1841ad08eb6b69ff5c48f5c.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=_A9X8qvEV5Y"
        },
        {
          "name": "Santuq",
          "image": "https://sultengprov.go.id/uploads/post/image/santuq.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=AEoydUgFvFg"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Palu Ngataku",
          "ytUrl": "https://youtu.be/aCrvB4y-9-o?si=pW25s0naXkA7w08- "
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Mpae (Pertunjukan Musik & Tari Kaili)",
          "ytUrl": "https://www.youtube.com/watch?v=Rtj5rMwP9_c"
        }
      ]
    }
  ]
},

"73": {
  "name": "Sulawesi Selatan",
  "capital": "Makassar",
  "area": 46717,
  "population": 9097000,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Coat_of_arms_of_South_Sulawesi.svg/800px-Coat_of_arms_of_South_Sulawesi.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Tongkonan (Toraja)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tongkonan_Toraja.JPG/500px-Tongkonan_Toraja.JPG"
        },
        {
          "name": "Balla Lompoa (Bugis/Makassar)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Balla_Lompoa.jpg/500px-Balla_Lompoa.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Baju Bodo (Bugis/Makassar)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Baju_Bodo_Bugis.jpg/500px-Baju_Bodo_Bugis.jpg"
        },
        {
          "name": "Seppa Tallung (Toraja)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Pakaian_Adat_Toraja.jpg/500px-Pakaian_Adat_Toraja.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Pakarena (Makassar)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Tari_Pakarena.jpg/500px-Tari_Pakarena.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=xtX95V-3ztU"
        },
        {
          "name": "Tari Ma’randing (Toraja)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tari_Maranding_Toraja.jpg/500px-Tari_Maranding_Toraja.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=3LItUYoIwFE"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Badik (Bugis/Makassar)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Badik_Bugis.jpg/500px-Badik_Bugis.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Coto Makassar",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Coto_Makassar.jpg/500px-Coto_Makassar.jpg"
        },
        {
          "name": "Konro",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sop_Konro.jpg/500px-Sop_Konro.jpg"
        },
        {
          "name": "Pallubasa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Pallubasa_Makassar.jpg/500px-Pallubasa_Makassar.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Keso-keso (Biola Tradisional Bugis)",
          "image": "https://www.goodnewsfromindonesia.id/uploads/post/large-3cf37a2cbf464b58b9dd55d0a10e4b42.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=1cJyoFQygPw"
        },
        {
          "name": "Gandang (Gendang Bugis/Makassar)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gendang_Bugis.jpg/500px-Gendang_Bugis.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=PR5a-fDDn1E"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Anging Mammiri",
          "ytUrl": "https://www.youtube.com/watch?v=7bQYHcfVAmc"
        },
        {
          "name": "Pakarena",
          "ytUrl": "https://www.youtube.com/watch?v=5qNkb52sQKg"
        },
        {
          "name": "Tana Toraja",
          "ytUrl": "https://www.youtube.com/watch?v=dQ4Z7vqwhpA"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Ma’badong (Toraja)",
          "ytUrl": "https://www.youtube.com/watch?v=ZBkAX9sGe9Q"
        },
        {
          "name": "Kelong (Seni Musik Bugis)",
          "ytUrl": "https://www.youtube.com/watch?v=7tn2-4QBlL0"
        }
      ]
    }
  ]
},

"74": {
  "name": "Sulawesi Tenggara",
  "capital": "Kendari",
  "area": 38140,
  "population": 2970000,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coat_of_arms_of_Southeast_Sulawesi.svg/800px-Coat_of_arms_of_Southeast_Sulawesi.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Banua Tada (Buton)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rumah_adat_Banua_Tada.jpg/500px-Rumah_adat_Banua_Tada.jpg"
        },
        {
          "name": "Laika (Muna)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Laika_Taha_Muna.jpg/500px-Laika_Taha_Muna.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Babu Nggawi (Tolaki)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baju_Adat_Tolaki.jpg/500px-Baju_Adat_Tolaki.jpg"
        },
        {
          "name": "Babu Nggawi Langgai (Buton)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baju_Adat_Buton.jpg/500px-Baju_Adat_Buton.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Lulo (Tolaki)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Tari_Lulo_Sulawesi_Tenggara.jpg/500px-Tari_Lulo_Sulawesi_Tenggara.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=QYi1q9rUwBk"
        },
        {
          "name": "Tari Linda (Muna)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tari_Linda_Muna.jpg/500px-Tari_Linda_Muna.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=x4nYyPq4wLE"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Kris Buton",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Keris_Buton.jpg/500px-Keris_Buton.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Sinonggi (Tolaki)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sinonggi_Tolaki.jpg/500px-Sinonggi_Tolaki.jpg"
        },
        {
          "name": "Kabuto (Makanan Buton)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Kabuto_Buton.jpg/500px-Kabuto_Buton.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Ganda (Gendang Tolaki)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gendang_Tolaki.jpg/500px-Gendang_Tolaki.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=TLXlAfeUnhA"
        },
        {
          "name": "Kacapi Buton",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kacapi_Buton.jpg/500px-Kacapi_Buton.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=9mUTXZamEoQ"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Peia Tawa-tawa (Tolaki)",
          "ytUrl": "https://www.youtube.com/watch?v=cAI-T4dm7JQ"
        },
        {
          "name": "Inde Inde (Buton)",
          "ytUrl": "https://www.youtube.com/watch?v=gfkaYyNTl10"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tarian Lulo Massal",
          "ytUrl": "https://www.youtube.com/watch?v=ooD8IbnTR2o"
        },
        {
          "name": "Kande-kandea (Buton)",
          "ytUrl": "https://www.youtube.com/watch?v=t1S2rFe7eUM"
        }
      ]
    }
  ]
},

"75": {
  "name": "Gorontalo",
  "capital": "Gorontalo",
  "area": 12215,
  "population": 1182000,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Coat_of_arms_of_Gorontalo.svg/800px-Coat_of_arms_of_Gorontalo.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Dulohupa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Rumah_Adat_Dulohupa.jpg/500px-Rumah_Adat_Dulohupa.jpg"
        },
        {
          "name": "Bantayo Poboide",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bantayo_Poboide_Gorontalo.jpg/500px-Bantayo_Poboide_Gorontalo.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Bili'u (Pengantin Wanita)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Baju_Adat_Bilihu_Gorontalo.jpg/500px-Baju_Adat_Bilihu_Gorontalo.jpg"
        },
        {
          "name": "Payunga (Pengantin Pria)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Baju_Adat_Payunga_Gorontalo.jpg/500px-Baju_Adat_Payunga_Gorontalo.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Saronde",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tari_Saronde_Gorontalo.jpg/500px-Tari_Saronde_Gorontalo.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=pRhWbXjCgFQ"
        },
        {
          "name": "Tari Dana-dana",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tari_Dana-Dana_Gorontalo.jpg/500px-Tari_Dana-Dana_Gorontalo.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=3gO5Mij1ddM"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Wamilo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wamilo_Gorontalo.jpg/500px-Wamilo_Gorontalo.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Binte Biluhuta",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Binte_Biluhuta.jpg/500px-Binte_Biluhuta.jpg"
        },
        {
          "name": "Ilabulo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Ilabulo_Gorontalo.jpg/500px-Ilabulo_Gorontalo.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Polopalo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Polopalo_Gorontalo.jpg/500px-Polopalo_Gorontalo.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=w7C69U6l2bI"
        },
        {
          "name": "Gambusi",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Gambusi_Gorontalo.jpg/500px-Gambusi_Gorontalo.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=X0uOBtN2cEQ"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Hu’ilo Hu’ilo",
          "ytUrl": "https://www.youtube.com/watch?v=HVRvXcC7ayQ"
        },
        {
          "name": "Binthe Biluhuta",
          "ytUrl": "https://www.youtube.com/watch?v=TOqIYQ9k5qM"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tarian Saronde (pertunjukan pernikahan)",
          "ytUrl": "https://www.youtube.com/watch?v=pRhWbXjCgFQ"
        }
      ]
    }
  ]
},

"76": {
  "name": "Sulawesi Barat",
  "capital": "Mamuju",
  "area": 16787, 
  "population": 1581000,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Coat_of_arms_of_West_Sulawesi.svg/800px-Coat_of_arms_of_West_Sulawesi.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Boyang Adaq",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rumah_Adat_Boyang_Mandar.jpg/500px-Rumah_Adat_Boyang_Mandar.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Baju Pokko (Wanita)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Baju_Pokko_Mandar.jpg/500px-Baju_Pokko_Mandar.jpg"
        },
        {
          "name": "Baju Pattuqduq Towaine (Pria)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Baju_Adat_Mandar_Sulawesi_Barat.jpg/500px-Baju_Adat_Mandar_Sulawesi_Barat.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Pattuqduq Towaine",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tari_Pattuqduq_Towaine_Mandar.jpg/500px-Tari_Pattuqduq_Towaine_Mandar.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=F1sQbK5pCrg"
        },
        {
          "name": "Tari Sayyang Pattuddu’",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sayyang_Pattudu%27_Mandar.jpg/500px-Sayyang_Pattudu%27_Mandar.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=Gx9FHeG7G9o"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Badik Mandar",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Badik_Mandar.jpg/500px-Badik_Mandar.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Jepa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Jepa_Mandar.jpg/500px-Jepa_Mandar.jpg"
        },
        {
          "name": "Kue Kui-kui",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Kui-kui_Mandar.jpg/500px-Kui-kui_Mandar.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Kacaping",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kacaping_Mandar.jpg/500px-Kacaping_Mandar.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=gFMptipPz7o"
        },
        {
          "name": "Gendang Mandar",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Gendang_Mandar.jpg/500px-Gendang_Mandar.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=5dhsHCQtnrU"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Sayang-sayang Mandar",
          "ytUrl": "https://www.youtube.com/watch?v=RM1yHUVdHUI"
        },
        {
          "name": "Paiya",
          "ytUrl": "https://www.youtube.com/watch?v=hhcb0A1Y5no"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Sayyang Pattu’du (kuda menari tradisional)",
          "ytUrl": "https://www.youtube.com/watch?v=Gx9FHeG7G9o"
        }
      ]
    }
  ]
},

"81": {
  "name": "Maluku",
  "capital": "Ambon",
  "area": "46,914", // dalam km²
  "population": 1849000, // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Coat_of_arms_of_Maluku.svg/120px-Coat_of_arms_of_Maluku.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Baileo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baileo_Haria.jpg/330px-Baileo_Haria.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Baju Cele",
          "image": "https://i0.wp.com/www.infobudaya.net/wp-content/uploads/2019/03/Baju-Cele-khas-Ambon.png?fit=519%2C800&ssl=1"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Cakalele",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=dDLsSW0sU2I&ab_channel=DayuSasrani"
        },
        {
          "name": "Tari Saureka-reka",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=qv0bXaCFZ00&list=RDqv0bXaCFZ00&start_radio=1&ab_channel=KajhoLakuy"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Parang Salawaku",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/COLLECTIE_TROPENMUSEUM_Houten_dansschild_versierd_met_porselein_TMnr_3250-3.jpg/250px-COLLECTIE_TROPENMUSEUM_Houten_dansschild_versierd_met_porselein_TMnr_3250-3.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Papeda",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg/250px-Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg"
        },
        {
          "name": "Ikan Kuah Kuning",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DYOfynG-SbdyoLlVUpv7-PJ_opRQ7ODvDg&s"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Tifa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/COLLECTIE_TROPENMUSEUM_Enkelvellige_bekervormige_trom_TMnr_18-18.jpg/250px-COLLECTIE_TROPENMUSEUM_Enkelvellige_bekervormige_trom_TMnr_18-18.jpg",
          "ytUrl": "https://youtu.be/C2xG-3E7Xnk?si=Hm9ZX-GkT7z9kHBJ"
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Rasa Sayange",
          "ytUrl": "https://youtu.be/s9OhPN2LXYc?si=zyVGfc7-WAXueLFo"
        },
        {
          "name": "Ayo Mama",
          "ytUrl": "https://youtu.be/I2DqQNSgE50?si=JbDld4FE-YI9G6vV"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Totobuang",
          "ytUrl": "https://www.youtube.com/watch?v=BMuUuCGJN7Q&ab_channel=MoluccasStory"
        }
      ]
    }
  ]
},

"82": {
  "name": "Maluku Utara",
  "capital": "Sofifi",
  "area": "31,982", // dalam km²
  "population": "1,356 juta (2024)", // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Coat_of_arms_of_North_Maluku.svg/120px-Coat_of_arms_of_North_Maluku.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Hibualamo",
          "image": "https://haliyora.id/wp-content/uploads/2025/03/Rumah-Adat-Hibualamo-di-Halmahera-Utara.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Baju Manteren Lamo",
          "image": "https://www.lamudi.co.id/journal/wp-content/uploads/2023/07/Manteren-Lamo.jpg"
        },
        {
          "name": "Baju Kimun Gia",
          "image": "https://www.lamudi.co.id/journal/wp-content/uploads/2023/07/Baju-Kimun-Gia.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Soya-soya",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=ClxtUEred9w&list=RDClxtUEred9w&start_radio=1&ab_channel=RyatHusain"
        },
        {
          "name": "Tari Lalayon",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=fic2V4LGNoI&list=RDfic2V4LGNoI&start_radio=1&ab_channel=Sitichanel"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Parang",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/COLLECTIE_TROPENMUSEUM_Houten_dansschild_versierd_met_porselein_TMnr_3250-3.jpg/250px-COLLECTIE_TROPENMUSEUM_Houten_dansschild_versierd_met_porselein_TMnr_3250-3.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Gohu Ikan",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Gohu_Ikan_in_Ternate.jpg/250px-Gohu_Ikan_in_Ternate.jpg"
        },
        {
          "name": "Halua Kenari",
          "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2018/01/22/megaarsitath_halua-kenari-696x464.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Arababu",
          "image": "https://mmc.tirto.id/image/otf/970x0/2022/12/28/arababu-tropenmuseum_ratio-16x9.jpg",
          "ytUrl": "https://youtu.be/Q4rGptBelFA?si=F3MYNK3awUEo_nbr "
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Borero",
          "ytUrl": "https://youtu.be/bT1fbqORkA4?si=-E7KANz9BUmKvRqT "
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Bambu Gila",
          "ytUrl": "https://www.youtube.com/watch?v=cG0o60fdbMM&ab_channel=zulkiflibaim"
        }
      ]
    }
  ]
},

"91-A": {
  "name": "Papua",
  "capital": "Jayapura",
  "area": "319,036", // dalam km²
  "population": "1.061 juta (2024)", // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Coat_of_arms_of_Papua_2.svg/120px-Coat_of_arms_of_Papua_2.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Kariwari",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Raiyani_Muharramah_Rumah_Karwari_Papua_DSC_8244.jpg/250px-Raiyani_Muharramah_Rumah_Karwari_Papua_DSC_8244.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Koteka & Rok Rumbai",
          "image": "https://pariwisataindonesia.id/wp-content/uploads/2020/12/Kotake-Papua-foto-carakuscom-640x480.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Selamat Datang",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=bA4llOELaUA&ab_channel=MansaiPapua"
        },
        {
          "name": "Tari Musyoh",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=egTI93mVeo0&ab_channel=MediaEdukatif"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Tombak",
          "image": "https://www.papuaerfgoed.org/sites/default/files/styles/max_1300x1300/public/collectie/images/2005-04/EA_55_19.jpg?itok=RwkkyVlP"
        },
        {
          "name": "Busur dan Panah",
          "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2018/12/26/roro_SenjataKhasDaerahPapua.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Papeda",
          "image": "https://cdn1-production-images-kly.akamaized.net/VYo2v8fXvwGNOy7RluB7-sPQR30=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3225045/original/030810800_1598943228-PAPEDA.jpg"
        },
        {
          "name": "Sagu Lempeng",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHhuuUKfri180I-4V8pHvjZ8FeELza0UQUA&s"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Tifa",
          "image": "https://asset.kompas.com/crops/jxPCn_eT0V2gHIu_1ynPHifqr_s=/103x66:897x596/750x500/data/photo/2022/03/20/623716066e1a9.jpg",
          "ytUrl": "https://youtu.be/C2xG-3E7Xnk?si=Hm9ZX-GkT7z9kHBJ "
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Yamko Rambe Yamko",
          "ytUrl": "https://youtu.be/I8bYDzEJVnk?si=6kjfXyBNF8FxxlIb"
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tari Perang",
          "ytUrl": "https://www.youtube.com/watch?v=-LbpPKmZ43g&ab_channel=Mrok"
        }
      ]
    }
  ]
},

"91-B": {
  "name": "Papua Pegunungan",
  "capital": "Jayawijaya",
  "area": "51,213", // km² (perkiraan luas wilayah)
  "population": "	1.470.518 (2024)", // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lambang_Papua_Pegunungan.svg/120px-Lambang_Papua_Pegunungan.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Honai",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Dani_people_traditional_house_near_Wamena%2C_Papua%2C_Indonesia_04.jpg/250px-Dani_people_traditional_house_near_Wamena%2C_Papua%2C_Indonesia_04.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Koteka dan Rok Rumbai",
          "image": "https://pariwisataindonesia.id/wp-content/uploads/2020/12/Kotake-Papua-foto-carakuscom-640x480.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Musyoh",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=egTI93mVeo0&ab_channel=MediaEdukatif"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Busur dan Panah",
          "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2018/12/26/roro_SenjataKhasDaerahPapua.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Bubur Sagu",
          "image": "https://pesonapapua.com/wp-content/uploads/2024/04/Mengenal-Lebih-Dalam-Makanan-Bubur-Sagu-Khas-Papua.webp"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Pikon (kaido)",
          "image": "https://cdn.rri.co.id/berita/Bovendigoel/t/1727383303183-Pikon_failfaire/13uroo50kdy6ev1.jpeg",
          "ytUrl": "https://youtu.be/qhe4wDTT1UU?si=Sxw9OcCnPl3WVmhw"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Jayawijaya Hanorasuok",
          "ytUrl": "https://youtu.be/v3_lKyfnjqg?si=0bLhWaeP3L6bbvWb"
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Festival Budaya Lembah Baliem",
          "ytUrl": "https://www.youtube.com/watch?v=F-2DkjKKv5o&ab_channel=GaleryLuhutSiahaan"
        }
      ]
    }
  ]
},

"91-C": {
  "name": "Papua Selatan",
  "capital": "Merauke",
  "area": 119_749, // km² (perkiraan luas wilayah)
  "population": 517_000, // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lambang_Kabupaten_Merauke.png/200px-Lambang_Kabupaten_Merauke.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Rumsram (umum di pesisir Papua)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rumah_Rumsram_di_Papua.jpg/500px-Rumah_Rumsram_di_Papua.jpg"
        },
        {
          "name": "Rumah Kariwari",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Rumah_Kariwari.jpg/500px-Rumah_Kariwari.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Koteka & Rok Rumbai Marind",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Koteka_traditional_dress_Papua.jpg/330px-Koteka_traditional_dress_Papua.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Yospan",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tari_Yospan_Papua.jpg/500px-Tari_Yospan_Papua.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=86CnnPvJE-0"
        },
        {
          "name": "Tari Suanggi",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tari_Suanggi_Papua.jpg/500px-Tari_Suanggi_Papua.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=8wqE_cWQ5-8"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Tombak Marind",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tombak_Papua.jpg/500px-Tombak_Papua.jpg"
        },
        {
          "name": "Busur dan Panah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Busur_dan_panah_Papua.jpg/500px-Busur_dan_panah_Papua.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Sagu Sep (Papeda bakar)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Sagu_sep_Papua.jpg/500px-Sagu_sep_Papua.jpg"
        },
        {
          "name": "Ikan Bakar khas Merauke",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ikan_bakar.jpg/500px-Ikan_bakar.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Tifa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Tifa_Maluku.jpg/500px-Tifa_Maluku.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=MTpdm5A2OGo"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Apuse",
          "ytUrl": "https://www.youtube.com/watch?v=U5ePNGM0cRc"
        },
        {
          "name": "Yamko Rambe Yamko",
          "ytUrl": "https://www.youtube.com/watch?v=a9sQAZ9z2s4"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tari Adat Suku Marind",
          "ytUrl": "https://www.youtube.com/watch?v=9X9NQ2Tt6cY"
        }
      ]
    }
  ]
},

"91-D": {
  "name": "Papua Tengah",
  "capital": "Wanggar, Nabire",
  "area": "66,129", // km² (perkiraan luas wilayah)
  "population": "	1.369.112 (2024)", // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lambang_Papua_Tengah.png/120px-Lambang_Papua_Tengah.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Emawa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Emawa_Mee.png"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Koteka dan Rok Rumbai",
          "image": "https://pariwisataindonesia.id/wp-content/uploads/2020/12/Kotake-Papua-foto-carakuscom-640x480.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Wor",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=djWhWkvp7Us&ab_channel=RiauMagz"
        },
        {
          "name": "Tari Sajojo",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=DkEJLFhMOAM&list=RDDkEJLFhMOAM&start_radio=1&ab_channel=NasywaAzizah"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Busur dan Panah",
          "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2018/05/17/oakirbin_busurpanahpapuabarat.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Papeda",
          "image": "https://awsimages.detik.net.id/community/media/visual/2019/09/06/14cc42ca-a8d6-43b9-baa5-016660b9cd0e_169.jpeg?w=1200"
        },
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Fuu",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdl9Y88aZIdxhssCRHSvTbc-pTQm0ABAbJg&s",
          "ytUrl": "https://youtu.be/kSQlrcCxlBc?si=CZ7bajcuXY2Lz6uU "
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Akai Bipa Mare",
          "ytUrl": "https://youtu.be/qO0uisgMrw4?si=bjo-hZElR3dLwMpc"
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tari Yospan",
          "ytUrl": "https://www.youtube.com/watch?v=BCkRtls1t08&list=RDBCkRtls1t08&start_radio=1&ab_channel=PIKKPLNPUSAT.youtube.com/watch?v=86CnnPvJE-0"
        }
      ]
    }
  ]
},


"92-A": {
  "name": "Papua Barat",
  "capital": "Manokwari",
  "area": "140,376", // dalam km²
  "population": "578,760 (2024)", // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_West_Papua.svg/120px-Coat_of_arms_of_West_Papua.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Kaki Seribu",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rumah_Kaki_Seribu_%28Mod_Aki_Aksa%29.jpg/330px-Rumah_Kaki_Seribu_%28Mod_Aki_Aksa%29.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Koteka & Rok Rumbai",
          "image": "https://pariwisataindonesia.id/wp-content/uploads/2020/12/Kotake-Papua-foto-carakuscom-640x480.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tarian Tumbu Tanah",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=yAggW5bwaQI&ab_channel=Danang.WR"
        },
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Busur dan Panah",
          "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2018/05/17/oakirbin_busurpanahpapuabarat.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Ikan Bakar Manokwari",
          "image": "https://cdn.rri.co.id/berita/66/images/1709454651458-i/pd9h0cazg3b2epb.jpeg"
        },
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Guoto",
          "image": "https://asset.kompas.com/crops/T08c2o1G8Ncv0GpwjNowUq7FPa0=/110x0:911x534/1200x800/data/photo/2021/05/11/609a88d76d343.jpg",
          "ytUrl": ""
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Apuse",
          "ytUrl": "https://youtu.be/VlyDN-yQMuk?si=ln4oRBGLQPDpaU7c"
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tarian Perang",
          "ytUrl": "https://www.youtube.com/watch?v=-LbpPKmZ43g&ab_channel=Mrok"
        }
      ]
    }
  ]
},

"92-B": {
  "name": "Papua Barat Daya",
  "capital": "Sorong",
  "area": 62_386, // km² (perkiraan luas wilayah)
  "population": 510_000, // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lambang_Kota_Sorong.png/200px-Lambang_Kota_Sorong.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Kaki Seribu (Arfak)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rumah_Kaki_Seribu_Papua.jpg/500px-Rumah_Kaki_Seribu_Papua.jpg"
        },
        {
          "name": "Rumah Honai (umum di pedalaman Papua)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Honai_house_Papua.jpg/500px-Honai_house_Papua.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Rok Rumbai & Hiasan Kepala Cendrawasih",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pakaian_adat_Papua.jpg/330px-Pakaian_adat_Papua.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Yospan",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tari_Yospan_Papua.jpg/500px-Tari_Yospan_Papua.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=86CnnPvJE-0"
        },
        {
          "name": "Tari Sajojo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tari_Sajojo.jpg/500px-Tari_Sajojo.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=zPpXc7On1yM"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Busur dan Panah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Busur_dan_panah_Papua.jpg/500px-Busur_dan_panah_Papua.jpg"
        },
        {
          "name": "Parang Papua",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Parang_tradisional_Papua.jpg/500px-Parang_tradisional_Papua.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Papeda (dari sagu)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Papeda_dengan_ikan_kuah_kuning.jpg/500px-Papeda_dengan_ikan_kuah_kuning.jpg"
        },
        {
          "name": "Ikan Kuah Kuning",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ikan_kuah_kuning.jpg/500px-Ikan_kuah_kuning.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Tifa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Tifa_Maluku.jpg/500px-Tifa_Maluku.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=MTpdm5A2OGo"
        },
        {
          "name": "Pikon (alat musik tiup pegunungan Papua)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pikon_Papua.jpg/500px-Pikon_Papua.jpg",
          "ytUrl": "https://www.youtube.com/watch?v=8eG-1SHtL9w"
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Sajojo",
          "ytUrl": "https://www.youtube.com/watch?v=zPpXc7On1yM"
        },
        {
          "name": "Yamko Rambe Yamko",
          "ytUrl": "https://www.youtube.com/watch?v=a9sQAZ9z2s4"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tari Perang Papua",
          "ytUrl": "https://www.youtube.com/watch?v=YrCd7l8lKqM"
        }
      ]
    }
  ]
}

};

const provinceSongs = {
  "31": "/music/jakarta.mp3",
  "32": "/music/jawa_barat.mp3",
  "36": "/music/banten.mp3",
  "33": "/music/jawa_tengah.mp3",
  "34": "/music/yogyakarta.mp3",
  "35": "/music/jawa_timur.mp3",

  "11": "/music/aceh.mp3",
  "12": "/music/sumatera_utara.mp3",
  "13": "/music/sumatera_barat.mp3",
  "14": "/music/riau.mp3",
  "15": "/music/jambi.mp3",
  "21": "/music/kepriau.mp3",
  "16": "/music/sumsel.mp3",
  "19": "/music/kepbanglitunh.mp3",
  "18": "/music/lampung.mp3",

  "61": "/music/kalbar.mp3",
  "62": "/music/kalteng.mp3",
  "63": "/music/kalsel.mp3",
  "64": "/music/kaltim.mp3",
  "65": "/music/kalut.mp3",

  "71": "/music/sulut.mp3",
  "72": "/music/sulteng.mp3",

  // maluku & papua
  "81": "/music/maluku.mp3",
  "82": "/music/maluku_utara.mp3",


  "91-A": "/music/papua.mp3",
  "91-B": "/music/papua_pegunungan.mp3",
  "91-D": "/music/papua_tengah.mp3",

  "92-A": "/music/papua_barat.mp3"
  // dst...
};

export default function ProvinceDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const province = provincesData[id];

  const audioRef = useRef(null);

  useEffect(() => {
    if (id && provinceSongs[id]) {
      audioRef.current.src = provinceSongs[id];
      audioRef.current.play().catch(e => {
        console.log("Audio play error:", e);
      });
    }
  }, [id]);

  if (!province) {
    return (
      <div className="p-8 text-center font-sans">
        <h1 className="text-2xl font-bold">Provinsi tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <>
      <main className="max-w-4xl mx-auto p-6 pb-[88px] font-sans">
        <button
          onClick={() => router.back()}
          className="mb-6 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          ← Kembali
        </button>

        <audio ref={audioRef} preload="auto" />

        <h1 className="text-4xl font-bold mb-6 text-yellow-900">{province.name}</h1>
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
          <img
            src={province.image}
            alt={`${province.name} emblem`}
            className="w-32 h-32 object-contain rounded-md shadow"
            loading="lazy"
          />
          <div className="text-gray-800 text-base sm:text-lg space-y-2">
            <p><span className="font-semibold text-yellow-700">Ibu Kota:</span> {province.capital}</p>
            <p><span className="font-semibold text-yellow-700">Luas Wilayah:</span> {province.area} km²</p>
            <p><span className="font-semibold text-yellow-700">Populasi:</span> {province.population.toLocaleString()}</p>
          </div>
        </div>

        {province.cultures.map((culture) => (
          <section key={culture.name} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-800 border-b border-yellow-300 pb-2">{culture.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {culture.data.map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-44 object-cover rounded-md mb-4"
                      loading="lazy"
                    />
                  )}
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  {item.ytUrl && (
                    <a
                      href={item.ytUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-600 hover:underline mt-auto"
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
      <BottomNav />
    </>
  );
}
