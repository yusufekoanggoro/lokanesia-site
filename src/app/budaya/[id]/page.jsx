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
              "name": "Gong",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gong_Indonesia.jpg/400px-Gong_Indonesia.jpg",
              "ytUrl": "https://www.youtube.com/watch?v=CEeqfpU4Fj0"
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
    name: "Bengkulu",
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
  "18": {
    name: "Lampung",
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
  "19": {
    name: "Kepulauan Bangka Belitung",
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
  "27": {
    name: "Bali",
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
  "28": {
    name: "Nusa Tenggara Barat",
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
  "29": {
    name: "Nusa Tenggara Timur",
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
  "30": {
    name: "Kalimantan Barat",
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
  "62": {
    name: "Kalimantan Tengah",
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
  "63": {
    name: "Kalimantan Selatan",
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
  "64": {
    name: "Kalimantan Timur",
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
  "65": {
    name: "Kalimantan Utara",
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
  "71": {
    name: "Sulawesi Utara",
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
  "72": {
    name: "Sulawesi Tengah",
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
  "37": {
    name: "Sulawesi Selatan",
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
  "38": {
    name: "Sulawesi Tenggara",
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
  "39": {
    name: "Gorontalo",
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
  "39": {
    name: "Sulawesi Barat",
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
  "40": {
    name: "Maluku",
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
  "41": {
    name: "Maluku Utara",
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
  "42": {
    name: "Papua Barat",
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
  "43": {
    name: "Papua",
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
  "44": {
    name: "Papua Tengah",
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
  "45": {
    name: "Papua Tengah",
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
  "46": {
    name: "Papua Pegunungan",
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
  "47": {
    name: "Papua Selatan",
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
  "48": {
    name: "Papua Barat Daya",
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
