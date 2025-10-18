'use client';

import { useEffect, useRef, useState } from "react";
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
  "16": { // blm
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
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Rumah_Limas_of_IDR_10000_banknote.jpg/250px-Rumah_Limas_of_IDR_10000_banknote.jpg"
            },
            {
              "name": "Rumah Ulu",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Rumah_ulu.jpg/250px-Rumah_ulu.jpg"
            }
          ]
        },
        {
          "name": "Baju Adat",
          "data": [
            {
              "name": "Aesan Gede",
              "image": "https://backpackerjakarta.com/wp-content/uploads/2018/02/Gambar-Aesan-Gede-Pria-dan-Wanita-1.jpg"
            },
            {
              "name": "Aesan Paksangko",
              "image": "https://sumateraekspres.bacakoran.co/upload/b871da48380b35abad1e670af85e6dd4.jpg"
            }
          ]
        },
        {
          "name": "Tarian",
          "data": [
            {
              "name": "Tari Gending Sriwijaya",
              "image": "",
              "ytUrl": "https://www.youtube.com/watch?v=_iOgonp5hEk&list=RD_iOgonp5hEk&start_radio=1&ab_channel=PesonaSriwijaya"
            },
            {
              "name": "Tari Tanggai",
              "image": "",
              "ytUrl": "https://www.youtube.com/watch?v=dwPrUIta8g0&list=RDdwPrUIta8g0&start_radio=1&ab_channel=SanggarRumahElokPalembang"
            }
          ]
        },
        {
          "name": "Senjata",
          "data": [
            {
              "name": "Keris Palembang",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJG6FpUwn8NSawi2QOHZNjT_uspdP1no4QQ&s"
            },
            {
              "name": "Tombak Trisula",
              "image": "https://cdn0-production-images-kly.akamaized.net/Z6y0k7o9BgvzdaXSxyPAwbZBI3g=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/5197833/original/016475400_1745484931-Tombak_Trisula_Sumsel.jpg"
            }
          ]
        },
        {
          "name": "Makanan Khas",
          "data": [
            {
              "name": "Pempek",
              "image": "https://lingkar.news/wp-content/uploads/2023/03/Aneka-Resep-Pempek-Makanan-Tradisional-Khas-Palembang.jpg"
            },
            {
              "name": "Tekwan",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwRoXQ0VPi__FktYDoCH1VVhYuQwSV2kFqA&s"
            }
          ]
        },
        {
          "name": "Alat Musik",
          "data": [
            {
              "name": "Accordion",
              "image": "https://img.inews.co.id/media/600/files/inews_new/2022/08/15/akordieon.jpg",
              "ytUrl": "https://youtu.be/f-bFv0c38_Q?si=HlKRc6ERpwW2vHN3"
            },
          ]
        },
        {
          "name": "Lagu Daerah",
          "data": [
            {
              "name": "Dek Sangke",
              "ytUrl": "https://youtu.be/aGGFDYPWawM?si=lUE80RY5NjHedYwI "
            },
            {
              "name": "Cuk Mak Ilang",
              "ytUrl": " https://youtu.be/ko-n9IY1Z78?si=T44XvepYtxK_I-ae "
            }
          ]
        },
        {
          "name": "Seni Pertunjukan",
          "data": [
            {
              "name": "Dulmuluk (Teater Tradisional Palembang)",
              "ytUrl": "https://www.youtube.com/watch?v=J3LPoY5AJ_A&ab_channel=ZONALITERASI"
            }
          ]
        }
    ]
  },
  "17": {
    "name": "Bengkulu",
    "capital": "Bengkulu",
    "area": "19,919", // dalam km²
    "population": "	2.115.024 (2024)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Coat_of_arms_of_Bengkulu.svg/120px-Coat_of_arms_of_Bengkulu.svg.png",
    "cultures": [
      {
        "name": "Rumah Adat",
        "data": [
          {
            "name": "Rumah Bubungan Lima",
            "image": "https://www.lamudi.co.id/journal/wp-content/uploads/2023/11/bengkulu.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Rejang",
            "image": "https://asset.kompas.com/crops/6Vp35nMUIlT4fk49HOpFKlzxiXM=/25x19:634x425/780x390/data/photo/2021/03/16/60506fc949f08.png"
          },
          {
            "name": "Baju Melayu Bengkulu",
            "image": "https://cdn.rri.co.id/berita/Bintuhan/o/1745837088368-1000080595/hk3llekil12loge.jpeg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Andun",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=Eke_n36NBt0&ab_channel=AYUWULANDARI"
          },
          {
            "name": "Tari Bidadari Teminang Anak",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=aUDNBMgNIN8&ab_channel=LovelyIndonesia"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Keris Bengkulu",
            "image": "https://asset.kompas.com/crops/MzswZJCyPWTaiDZZTGdzGDBN6u4=/170x115:840x562/750x500/data/photo/2021/05/18/60a37e1eec263.png"
          },
          {
            "name": "Pedang Jenawi",
            "image": "https://inakoran.com/uploads/2022/04/02/1648893984-p8e884e94537e2f3d5612ebc25e4d321c.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Pendap",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Jd506aji93N7_K8bFQF5AmQ5H-KMz1fhsQ&s"
          },
          {
            "name": "Lemea",
            "image": "https://cdn.rri.co.id/berita/Bengkulu/o/1727413013195-IMG-20240927-WA0044/f1zn8coldjxrqsi.jpeg"
          },
          {
            "name": "Bagar Hiu",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDx3z49hdgvyc_neRN-pAAeYVurQKSTFi8Bg&s"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Doll",
            "image": "https://osccdn.medcom.id/images/content/2020/04/05/183db23a75f86dfa1760d494f7f36820.jpg",
            "ytUrl": ""
          },
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Ikan Pais",
            "ytUrl": " https://youtu.be/JsHExksLj6s?si=Avw9UGbbuobUEd2z "
          },
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Tabot",
            "ytUrl": "https://www.youtube.com/watch?v=pmxjdGMUF0o&ab_channel=MasAMtv"
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
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Coat_of_arms_of_Lampung.svg/120px-Coat_of_arms_of_Lampung.svg.png",
    "cultures": [
      {
        "name": "Rumah Adat",
        "data": [
          {
            "name": "Nuwo Sesat",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rumah_adat_Nuwo_Sesat_lampung.jpg/330px-Rumah_adat_Nuwo_Sesat_lampung.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Adat Saibatin",
            "image": "https://akcdn.detik.net.id/community/media/visual/2023/05/27/baju-adat-lampung-saibatin.jpeg?w=1080"
          },
          {
            "name": "Baju Adat Pepadun",
            "image": "https://akcdn.detik.net.id/community/media/visual/2023/05/27/baju-adat-lampung-pepadun.jpeg?w=1080"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Sigeh Pengunten",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=oPjREWreEhE&list=RDoPjREWreEhE&start_radio=1&ab_channel=GenBIProvinsiLampung"
          },
          {
            "name": "Tari Melinting",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=FL2dxHKipq8&ab_channel=MuhammadZopi"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Badik",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/BADIK_PEJUANG_SELIKUKH_LIMA.jpg/250px-BADIK_PEJUANG_SELIKUKH_LIMA.jpg"
          },
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Seruit",
            "image": "https://www.kelampung.com/wp-content/uploads/2023/03/seruit.jpg"
          },
          {
            "name": "Gulai Taboh",
            "image": "https://upload.wikimedia.org/wikipedia/id/c/c0/Gulai_Taboh_Lampung.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Bende",
            "image": "https://cdn.rri.co.id/berita/Bandar_Lampung/o/1735308598150-IMG_20241227_210842/ip9mo1vb0pa0cm6.jpeg",
            "ytUrl": ""
          },
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Cangget Agung",
            "ytUrl": "https://youtu.be/ODDVfgXST4E?si=pcgIYANl4SEBwC9e "
          },
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Cangget",
            "ytUrl": "https://www.youtube.com/watch?v=Hq_Yyq3-oBU&ab_channel=AprizalMirzha"
          }
        ]
      }
    ]
  },
  "19": {
    name: "Kepulauan Bangka Belitung",
    capital: "Pangkalpinang",
    area:  "16.424,23 ", // dalam km²
    population: "1.512 juta (2024)" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_arms_of_Bangka_Belitung_Islands.svg/120px-Coat_of_arms_of_Bangka_Belitung_Islands.svg.png",
    "cultures": [
        {
          "name": "Rumah Adat",
          "data": [
            {
              "name": "Rumah Panggung",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/%E7%83%88%E6%B8%AF%E9%A6%AC%E4%BE%86%E5%B1%8B_Rumah_Tua_Parit_Padang.jpg/250px-%E7%83%88%E6%B8%AF%E9%A6%AC%E4%BE%86%E5%B1%8B_Rumah_Tua_Parit_Padang.jpg"
            },
            {
              "name": "Rumah Limas Potong",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rumah_limas_tradisional_di_Bangka_Selatan.jpg/250px-Rumah_limas_tradisional_di_Bangka_Selatan.jpg"
            }
          ]
        },
        {
          "name": "Baju Adat",
          "data": [
            {
              "name": "Paksian",
              "image": "https://imgsrv2.voi.id/UH-hg8z0D3cU7E_ai1pTliHK7nN4jLcJkQHErbcPl0Q/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNDk2My8yMDIxMDIyMzE0MjItbWFpbi5qcGc.jpg"
            }
          ]
        },
        {
          "name": "Tarian",
          "data": [
            {
              "name": "Tari Campak",
              "image": "",
              "ytUrl": "https://www.youtube.com/watch?v=BV31zSft-tk&list=RDBV31zSft-tk&start_radio=1&ab_channel=KWARCABPGK"
            },
            {
              "name": "Tari Sepen",
              "image": "",
              "ytUrl": "https://www.youtube.com/watch?v=FJT42jtObnE&list=RDFJT42jtObnE&start_radio=1&ab_channel=LigatBelitungProduction"
            }
          ]
        },
        {
          "name": "Senjata",
          "data": [
            {
              "name": "Sewir",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/COLLECTIE_TROPENMUSEUM_Kris_met_houten_greep_en_houten_schede_TMnr_A-3916a.jpg/330px-COLLECTIE_TROPENMUSEUM_Kris_met_houten_greep_en_houten_schede_TMnr_A-3916a.jpg"
            },
          ]
        },
        {
          "name": "Makanan Khas",
          "data": [
            {
              "name": "Lempah Kuning",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lempah_kuning.JPG/250px-Lempah_kuning.JPG"
            },
          ]
        },
        {
          "name": "Alat Musik",
          "data": [
            {
              "name": "Dambus",
              "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/507_Bangka-Belitung-Dambus-2.jpg",
              "ytUrl": "https://youtu.be/VTXyUSiBuow?si=wPK3u4j72NqB9RVf"
            },
          ]
        },
        {
          "name": "Lagu Daerah",
          "data": [
            {
              "name": "Yok Miak",
              "ytUrl": "https://youtu.be/h7DgSo9LiGA?si=O7G2Km-dM8hdRoDx "
            },
          ]
        },
        {
          "name": "Seni Pertunjukan",
          "data": [
            {
              "name": "Sepintu Sedulang",
              "ytUrl": "https://www.youtube.com/watch?v=tu79w5lHX38&list=RDtu79w5lHX38&start_radio=1&ab_channel=adishwara"
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

  // p jawa
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

// p bali dan nt
"51": {
  "name": "Bali",
  "capital": "Denpasar",
  "area": "5.780,06",
  "population": "4.461 juta (2024)",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Official_seal_of_the_Province_of_Bali.png/120px-Official_seal_of_the_Province_of_Bali.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Gapura Candi Bentar",
          "image": "https://s3.ap-southeast-1.wasabisys.com/c340968/2023/05/W2Rbt6Vb-Gapura-Candi-Bentar.webp"
        },
        {
          "name": "Rumah Bale",
          "image": "https://www.daerahkita.com/images/gambar/rumah-bale-tempat-tinggal-adat-suku-sasak-di-lombok-1.webp"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Payas Agung",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1GeMixQLYZ2DmgMbbskXrcjt7LGmLdDnlg&s"
        },
        {
          "name": "Kebaya Bali",
          "image": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/7/11/1c273000-b95c-4c82-b62b-2435d97155a1.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Kecak",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=2I5krxbnrA4&ab_channel=santowardoyo"
        },
        {
          "name": "Tari Pendet",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=r93o8G3zEbc&list=RDr93o8G3zEbc&start_radio=1&ab_channel=PPSTKENCANAMAS"
        },
        {
          "name": "Tari Barong",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=aS414M6VcWY&ab_channel=MasJarotWibowo"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Keris Bali",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-tOSthdQsChnkUyMcAie40CmGkhXYzwcdw&s"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Ayam Betutu",
          "image": "https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/11/Resep-Ayam-Betutu.jpg?fit=1536%2C1920&ssl=1"
        },
        {
          "name": "Lawar",
          "image": "https://asset.kompas.com/crops/aKHzGiCyRFfjzCWSTPWuyUd9KCs=/0x331:667x775/1200x800/data/photo/2022/06/08/62a00174befad.jpg"
        },
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Cengceng",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DcVb_YtZod0WW0OuD6U20EjzgWXpLT6Shw&s",
          "ytUrl": "https://youtu.be/gFipiNDYRoE?si=XkvwuiqbGNTYLCU8"
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Mejangeran",
          "ytUrl": "https://youtu.be/dHb_eQoUUh8?si=XKBRRdRpOH56WC4G "
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Wayang Wong Bali",
          "ytUrl": "https://www.youtube.com/watch?v=sm0TUopXLQg&ab_channel=MainCreativeBali"
        },
      ]
    }
  ]
},

"52": {
  "name": "Nusa Tenggara Barat",
  "capital": "Mataram",
  "area": "19,709",
  "population": "	5.666.314 juta (2024)",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Coat_of_arms_of_West_Nusa_Tenggara.svg/120px-Coat_of_arms_of_West_Nusa_Tenggara.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Bale Lumbung",
          "image": "https://image.idntimes.com/post/20190723/sade-00499abad3ffcce1a0ed53acd1e4269a.jpg"
        },
        {
          "name": "Bale Tani",
          "image": "https://assets.promediateknologi.id/crop/232x0:1512x959/750x500/webp/photo/2023/01/20/3220035745.jpeg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Baju Adat Sasak (Lambung & Pegon)",
          "image": "https://image.idntimes.com/post/20201105/baju-adat-sasak-lombok-at-devina-wo-2-86cfcfe0186f2281c08d99ede8ca4e01.jpg"
        },
        {
          "name": "Baju Bonder (Bima)",
          "image": "https://infopublik.id/resources/album/bulan-desember-2019/PicsArt_12-17-07_32_03.jpg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Gendang Beleq",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=5lAMOLuxFBg&ab_channel=MANDISUARETV"
        },
        {
          "name": "Tari Peresean",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=WP-wQAxF5uA&ab_channel=IndonesiaTari"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Keris Bima",
          "image": "https://3.bp.blogspot.com/-Mr_sD7DmgmQ/Wv2astltp7I/AAAAAAAAAZw/SdthBD3OLKkEwi17afFC5Fo3mCc7ggXvQCLcBGAs/s640/keris-nusa-tenggara-barat.gif"
        },
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Ayam Taliwang",
          "image": "https://awsimages.detik.net.id/community/media/visual/2023/02/01/resep-ayam-taliwang-khas-lombok_43.jpeg?w=1200"
        },
        {
          "name": "Plecing Kangkung",
          "image": "https://awsimages.detik.net.id/community/media/visual/2021/11/30/resep-plecing-kangkung-khas-lombok_43.jpeg?w=600&q=90"
        },
        {
          "name": "Sate Rembiga",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JBN2GT6_Y2TSrwjgYQf86yGcxGsQVbKyrw&s"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Serunai",
          "image": "https://awsimages.detik.net.id/community/media/visual/2024/03/19/serunai-alat-musik-tradisional-ntb-istimewa_169.webp?w=620",
          "ytUrl": "https://youtu.be/yM8dMrfZ1Uk?si=oqHriLGRLgItg1wz "
        }
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Tutu Koda",
          "ytUrl": "https://youtu.be/Ttjb1GBVbdk?si=A_2Mu6L4KY4V9dzY "
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Peresean (Pertarungan tradisional)",
          "ytUrl": "https://www.youtube.com/watch?v=Mzhq8glYe1M&ab_channel=TimbangMomot"
        },
      ]
    }
  ]
},

"53": {
  "name": "Nusa Tenggara Timur",
  "capital": "Kupang",
  "area": "47,876",
  "population": "5.715 juta (2024)",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png/120px-Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Sao Ata Mosa Lakitana (Rumah Raja Sumba)",
          "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2014/08/03/metaindriyani_nttrmh.jpg"
        },
        {
          "name": "Sao Ria (Rumah Adat Flores)",
          "image": "https://cdn.timesmedia.co.id/images/2019/11/24/Sao-Ria-rumah-adat.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Ikat Sumba",
          "image": "https://www.greeners.co/wp-content/uploads/2017/10/Mode-Tenun-Ikat-Sumba-Eksotisme-Nusa-Tenggara-Timur-dalam-Kain.jpg"
        },
        {
          "name": "Baju Amarasi (Timor)",
          "image": "https://assets.promediateknologi.id/crop/159x74:826x509/0x0/webp/photo/p3/93/2024/08/05/Desain-tanpa-judul-2-3164229528.png"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Caci (Manggarai, Flores)",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=bhW0LgMaFKg&ab_channel=BKNPDIPerjuangan"
        },
        {
          "name": "Tari Likurai (Belu, Timor)",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=LOlhgviLmqw&ab_channel=StudioJero"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Parang",
          "image": "https://img.lazcdn.com/g/ff/kf/S7bb09dbed47d4592a38cf7d9c71dbd7eV.jpg_360x360q80.jpg_.webp"
        },
        {
          "name": "Suri (tombak khas NTT)",
          "image": "https://asset.kompas.com/crops/NeLRC4nx0lEAqmz2Ze4u5W2dYXQ=/24x18:772x516/375x240/data/photo/2018/11/26/1251555276.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Jagung Bose",
          "image": "https://rajominang.id/blog/uploads/images/202504/image_750x_67f645e6cf3c3.jpg"
        },
        {
          "name": "Se'i Sapi",
          "image": "https://asset.kompas.com/crops/DXz8VuHdCJkniBVJv_YzdB2l6BE=/0x354:1440x1314/750x500/data/photo/2020/07/19/5f13ac00c83fb.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Sasando",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZZKUmUL-YKHi_daz917AKREfXdFkwsoIAg&s",
          "ytUrl": "https://youtu.be/e8NHPMAOD8w?si=YaomStiacak_J-Uj "
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Anak Kambing Saya",
          "ytUrl": "https://www.youtube.com/watch?v=UmFzip9EKpY&list=RDUmFzip9EKpY&start_radio=1&ab_channel=BaLiTa-BabaLiliTata"
        },
        {
          "name": "Gemu Famire",
          "ytUrl": "https://youtu.be/brvQbverqIY?si=Bhhcpxf7J95dHup3"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Caci (pertarungan tradisional Manggarai)",
          "ytUrl": "https://www.youtube.com/watch?v=BMPYB1WgVig&ab_channel=SAATECHANNEL"
        },
        {
          "name": "Sandelwood Parade (Sumba)",
          "ytUrl": "https://www.youtube.com/watch?v=oevm6lnJDk8&ab_channel=ElangSumba"
        }
      ]
    }
  ]
},

// p kalimantan
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
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPusU2UYr1X4yG8pb9bLjNU1KUwzhg5TekA&s"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "King Baba (Pria)",
            "image": "https://pbs.twimg.com/media/EPCke6YUwAAZ_E1.jpg"
          },
          {
            "name": "King Bibinge (Wanita)",
            "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2018/08/15/oskm18_16918280_shellyana_images4.jpeg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Monong (Tolak Bala)",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=o8v97-EV_RQ&ab_channel=CinaritaNusantara"
          },
          {
            "name": "Tari Zapin Tembung",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=c2rdReouhRc&list=RDc2rdReouhRc&start_radio=1&ab_channel=InneSuryani"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/239/2024/12/17/Mandau-2107226971.png"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Bubur Pedas Sambas",
            "image": "https://cdn1-production-images-kly.akamaized.net/QZSeka6HVAti-I5ysjuUWlGpisM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1309676/original/027544300_1470488585-20160806-bubur-pedas-sambas-kalbar.jpg"
          },
          {
            "name": "Pengkang",
            "image": "https://cdn0-production-images-kly.akamaized.net/i0cgiej0cGxzdkqZjem6T9Rp5_M=/948x0:4597x3649/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3910408/original/016234400_1642738101-shutterstock_2035213286.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Tuma",
            "image": "https://khatulistiwahits.com/wp-content/uploads/2023/07/Alat-musik-unik-1.webp",
            "ytUrl": ""
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
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Sandung (Ritual Dayak)",
            "ytUrl": "https://www.youtube.com/watch?v=KGLsChz3ldI&ab_channel=Bayusamudraoxone"
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
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rumah_Betang_Sei_Pasah_180505002.JPG/250px-Rumah_Betang_Sei_Pasah_180505002.JPG"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Pakaian Sangkarut (Pria)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUCiEAIB81L2uf0s5nLfGzXCgj8FRiBNt0Q&s"
          },
          {
            "name": "Pakaian Sangkarut (Wanita)",
            "image": "https://www.wonderverseindonesia.com/storage/app/uploads/public/654/0b5/ced/6540b5ced2832506326168.jpg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Tambun dan Bungai",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=LOq1onjSLW8&ab_channel=JalwaJalwa"
          },
          {
            "name": "Tari Balean Dadas",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=rIDsOqaZkdw&ab_channel=FerdinandBundong"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/COLLECTIE_TROPENMUSEUM_Zwaard_met_gevest_van_been_schede_en_mesje_TMnr_391-122.jpg/330px-COLLECTIE_TROPENMUSEUM_Zwaard_met_gevest_van_been_schede_en_mesje_TMnr_391-122.jpg"
          },
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Juhu Singkah (Umbut Rotan)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hjGBjS6491Rpvt65yNdPCQRDxVZzdMOZQw&s"
          },
          {
            "name": "Kalumpe (Daun Singkong Tumbuk)",
            "image": "https://jadesta.kemenpar.go.id/imgpost/85390.jpg"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Japen",
            "image": "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/243/2024/10/09/japen-1693024864.jpg",
            "ytUrl": "https://www.youtube.com/live/g_DJHMdwenk?si=mrsoMujFPXyLQxlP "
          }
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Manari Manasai",
            "ytUrl": "https://youtu.be/FSa8k-cT7ag?si=s2xGWTIUVTBa72Pb "
          },
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Mamapas Lewu (Upacara Adat Dayak Ngaju)",
            "ytUrl": "https://www.youtube.com/watch?v=7OwMWQlv6TA&ab_channel=PeniLisari"
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
            "image": "https://upload.wikimedia.org/wikipedia/id/thumb/7/76/Fasade_Bubungan_Tinggi_Teluk_Selong_Martapura.JPG/250px-Fasade_Bubungan_Tinggi_Teluk_Selong_Martapura.JPG"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Baamar Galung Pancar Mata (Pria)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPtk_bQr0sYwDITCeImBQuEJq_TaQ3XET2g&s"
          },
          {
            "name": "Baju Bagajah Gamuling Baular Lulut (Wanita)",
            "image": "https://pariwisataindonesia.id/wp-content/uploads/2020/10/baju-bagajah-gamuling-baular-lulut-fot0-by-FB.jpg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Radap Rahayu",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=Fy2xBb1ydHk&list=RDFy2xBb1ydHk&start_radio=1&ab_channel=NurMardhatillah"
          },
          {
            "name": "Tari Baksa Kembang",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=QVDYR0wM_C8&list=RDQVDYR0wM_C8&start_radio=1&ab_channel=HayatiMayangArum"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/COLLECTIE_TROPENMUSEUM_Zwaard_met_gevest_van_been_schede_en_mesje_TMnr_391-122.jpg/330px-COLLECTIE_TROPENMUSEUM_Zwaard_met_gevest_van_been_schede_en_mesje_TMnr_391-122.jpg"
          },
          {
            "name": "Keris Banjar",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Kris_and_scabbard.jpg/250px-Kris_and_scabbard.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Soto Banjar",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKuuSQVVxUX1DyZjdwL0_K_f6YYJVEZX-JQ&s"
          },
          {
            "name": "Ketupat Kandangan",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ketupat_Kandangan_ikan_haruan.JPG/250px-Ketupat_Kandangan_ikan_haruan.JPG"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Sensapi",
            "image": "https://i.ytimg.com/vi/rl-Vd0_F0TE/maxresdefault.jpg",
            "ytUrl": " https://youtu.be/KERZGeUhkFI?si=FAjJU7hLwPln42sM "
          },
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Ampar-Ampar Pisang",
            "ytUrl": "https://youtu.be/WKXE2Qam_m8?si=dtKxI-mk4oPgvKBy"
          },
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Mamanda (Teater Rakyat Banjar)",
            "ytUrl": "https://www.youtube.com/watch?v=YqNEpIc5M70&ab_channel=DAPURTEATERKAL-SEL"
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
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Desa_Budaya_Pampang.jpg/330px-Desa_Budaya_Pampang.jpg"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Ta’a (Wanita Dayak)",
            "image": "https://genpi.id/wp-content/uploads/2021/07/Pakaian-Adat-Taa-instagram.com-pesonadayakhitz-1.jpg"
          },
          {
            "name": "Sapei Sapaq (Pria Dayak)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1jm9WOQjMJz6YvmM1q9tL8uq7cF7Z1hE5g&s"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Gong",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=qQuha5oCq_E&ab_channel=IntanRezkyPutri"
          },
          {
            "name": "Tari Hudoq",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=nVM10FmnTEc&ab_channel=Ucupridhofreund"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://awsimages.detik.net.id/community/media/visual/2022/10/14/mandau_169.jpeg?w=1200"
          },
          {
            "name": "Telawang (Perisai Dayak)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/6d/COLLECTIE_TROPENMUSEUM_Houten_schild_met_mens-_en_dierfiguren_TMnr_740-62.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Nasi Bekepor",
            "image": "https://jurnalkaltim.com/wp-content/uploads/2023/10/Resep-Nasi-Bekepor.webp"
          },
          {
            "name": "Amplang",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Amplang_on_a_plate.JPG/1200px-Amplang_on_a_plate.JPG"
          }
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Uding",
            "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2018/05/31/oakirbin_Uding.jpg",
            "ytUrl": "https://youtu.be/3qWsvrKh0BA?si=fH-nPINd_yPeWGeM "
          },
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Indung-Indung",
            "ytUrl": "https://youtu.be/uV2RlE4QjMc?si=rnpussNRCeI7u6gi"
          },
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Hudoq Festival",
            "ytUrl": "https://www.youtube.com/watch?v=t9o5e9yVfP0&ab_channel=SeputarPrambanan"
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
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Baloy_Mayo_Adat_Tidung_%282%29.JPG/250px-Baloy_Mayo_Adat_Tidung_%282%29.JPG"
          }
        ]
      },
      {
        "name": "Baju Adat",
        "data": [
          {
            "name": "Baju Ta’a & Sapei Sapaq (Dayak)",
            "image": "https://sdn13.bimakota.sch.id/upload/kontent/1722428979_4e7f68f7e2f72aa98a30.jpeg"
          }
        ]
      },
      {
        "name": "Tarian",
        "data": [
          {
            "name": "Tari Jepen (Pengaruh Melayu & Bugis)",
            "image": "",
            "ytUrl": "https://www.youtube.com/watch?v=3jyQ8afPKNE&list=RD3jyQ8afPKNE&start_radio=1&ab_channel=RumahBudayaIndonesia"
          }
        ]
      },
      {
        "name": "Senjata",
        "data": [
          {
            "name": "Mandau",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/COLLECTIE_TROPENMUSEUM_Zwaard_met_gevest_van_been_schede_en_mesje_TMnr_391-122.jpg/330px-COLLECTIE_TROPENMUSEUM_Zwaard_met_gevest_van_been_schede_en_mesje_TMnr_391-122.jpg"
          }
        ]
      },
      {
        "name": "Makanan Khas",
        "data": [
          {
            "name": "Ikan Asin Richa",
            "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2018/01/13/denian_Ikan_Asin_Richa.jpg"
          },
        ]
      },
      {
        "name": "Alat Musik",
        "data": [
          {
            "name": "Sampe/sape",
            "image": "https://student-activity.binus.ac.id/himdkv/wp-content/uploads/sites/11/2021/06/sape-1.jpg",
            "ytUrl": " https://youtu.be/-hgIaKJprg0?si=ZqooT8kJuikmhchD "
          },
        ]
      },
      {
        "name": "Lagu Daerah",
        "data": [
          {
            "name": "Bebalon",
            "ytUrl": "https://youtu.be/A0DmsTuWQ1E?si=nsr9n-HntJn4IepL "
          },
        ]
      },
      {
        "name": "Seni Pertunjukan",
        "data": [
          {
            "name": "Pertunjukan Hudoq (Dayak)",
            "ytUrl": "https://www.youtube.com/watch?v=nVM10FmnTEc&ab_channel=Ucupridhofreund"
          }
        ]
      }
    ]
  },

// p sulawesi
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
          "image": "https://asset.kompas.com/crops/KM5fAg7wgvb4EkqrrPAYaVywe4I=/0x0:750x500/750x500/data/photo/2022/02/06/61ffc02d15390.jpeg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Pakaian Adat Minahasa",
          "image": "https://telusurkultur.com/cdn/shop/articles/Cover_Blog_Dienvibi_-_2023-08-17T144426.841.jpg?v=1692258577"
        },
        {
          "name": "Pakaian Adat Bolaang Mongondow",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO8lb8jIVIgcqh6MLM0ThM-f_-DmJulTHaw&s"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Kabasaran (Minahasa)",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=27CqwfBq5No&ab_channel=Omze"
        },
        {
          "name": "Tari Maengket",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=Tfzf9rX1OfQ&list=RDTfzf9rX1OfQ&start_radio=1&ab_channel=JOHANSUJIVLOG"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Perisai Sulawesi Utara",
          "image": "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2023/07/1311172023-Perisai-Sulawesi-Utara.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Tinutuan (Bubur Manado)",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSEYKhmUFY2mADAic2WqPc6HPv3p7eILo_A&s"
        },
        {
          "name": "Cakalang Fufu",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi93PCwhhfPJyD4-RkAVnfMZSjA17NdYzOJg&s"
        },
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Kolintang",
          "image": "https://asset-2.tstatic.net/tribunnews/foto/bank/images/kolintang-alat-musik-titin.jpg",
          "ytUrl": "https://youtu.be/dy4gt-IYpKs?si=kEV5OUL4ysLh1fSN "
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Si Patokaan",
          "ytUrl": "https://youtu.be/VbN4-j5Tm8Q?si=6oRoQIpGU4-wQIFI "
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Kabasaran Show (Tarian Perang)",
          "ytUrl": "https://www.youtube.com/watch?v=q88VLvq_5Hc&ab_channel=jemsboychannel"
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
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Rumah_adat_Tambi.jpg/250px-Rumah_adat_Tambi.jpg"
        },
        {
          "name": "Souraja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sou_Raja_or_Banua_Oge%2C_Palu%2C_Central_Sulawesi_2018-09-17_01.jpg/250px-Sou_Raja_or_Banua_Oge%2C_Palu%2C_Central_Sulawesi_2018-09-17_01.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Ngata (Pakaian Adat Kaili)",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBBLkIiBjvm3Ow_lA1ZP6OneK-ou6Hoyv3w&s"
        },
        {
          "name": "Pakaian Adat Pamona",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXXte1TiZL1tGx1hKN0_akGGSAJBIIH9zbg&s"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Dero (Pamona)",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=4mb5X7XSY4Y&list=RD4mb5X7XSY4Y&start_radio=1&ab_channel=IskandarProject"
        },
        {
          "name": "Tari Pamonte (Kaili)",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=MfG35AAnXXw&list=RDMfG35AAnXXw&start_radio=1&ab_channel=AyuMBahasyuan"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Kanta",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/COLLECTIE_TROPENMUSEUM_Smal_houten_schild_met_banenversiering_van_been_schelpen_en_geitenhaar_TMnr_1772-431.jpg/330px-COLLECTIE_TROPENMUSEUM_Smal_houten_schild_met_banenversiering_van_been_schelpen_en_geitenhaar_TMnr_1772-431.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Kaledo (Kaki Lembu Donggala)",
          "image": "https://static.republika.co.id/uploads/images/inpicture_slide/sup-tulang-kaki-lembu-khas-donggala-sulteng-_160523125101-201.jpg"
        },
        {
          "name": "Uta Kelo (Sayur Daun Kelor)",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYjJA5Rk6ZzjFglgtwPBCz_frXCHFibDkog&s"
        },
        {
          "name": "Lalampa",
          "image": "https://www.finnafood.com/blog/wp-content/uploads/2024/07/lalampa-Adalah.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Lalove",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTua-fpAii6K4fd5Q6GYR1YvLqyDMtKJDFGYw&s",
          "ytUrl": "https://youtu.be/MJCkSqoT2pM?si=IAPIJTai44VM-YG4 "
        },
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
          "ytUrl": "https://www.youtube.com/watch?v=XgMXoQSpa8k&list=RDXgMXoQSpa8k&start_radio=1&ab_channel=LFPRODUCTION"
        }
      ]
    }
  ]
},

"73": {
  "name": "Sulawesi Selatan",
  "capital": "Makassar",
  "area": "46,717",
  "population": "9.463 juta (2024)",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Coat_of_arms_of_South_Sulawesi.svg/120px-Coat_of_arms_of_South_Sulawesi.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Tongkonan (Toraja)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tongkonan_Toraja.jpg/250px-Tongkonan_Toraja.jpg"
        },
        {
          "name": "Balla Lompoa (Bugis/Makassar)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Balla%27_Lompoa_Museum.jpg/250px-Balla%27_Lompoa_Museum.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Baju Bodo (Bugis/Makassar)",
          "image": "https://awsimages.detik.net.id/community/media/visual/2021/03/04/baju-bodo_169.jpeg?w=1200"
        },
        {
          "name": "Seppa Tallung (Toraja)",
          "image": "https://awsimages.detik.net.id/community/media/visual/2022/04/01/pakaian-adat-sulawesi-selatan_169.jpeg?w=1200"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Pakarena (Makassar)",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=PfVyTq3gRDk&list=RDPfVyTq3gRDk&start_radio=1&ab_channel=AndiSyu"
        },
        {
          "name": "Tari Ma’randing (Toraja)",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=h7th70IeyLI&ab_channel=Torajaunik"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Badik (Bugis/Makassar)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sari_3.jpg/330px-Sari_3.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Coto Makassar",
          "image": "https://asset.kompas.com/crops/jTy2NMcIdQrT_poGigyc8oLGfYc=/0x1226:3000x3226/1200x800/data/photo/2021/06/11/60c2acf88c6f0.jpg"
        },
        {
          "name": "Konro",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Sop_Konro.JPG"
        },
        {
          "name": "Pallubasa",
          "image": "https://awsimages.detik.net.id/community/media/visual/2024/10/01/pallubasa-enak-di-jakarta-2_43.jpeg?w=1200"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Keso-keso (Biola Tradisional Bugis)",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1W-0NBosHZmdtnss0amXoy7bcZCgADubhg&s",
          "ytUrl": " https://youtu.be/CD5nXFM5ou8?si=RMWex-aPsh6KQKCb "
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Anging Mammiri",
          "ytUrl": "https://www.youtube.com/watch?v=IU-3uvRzvyA&list=RDIU-3uvRzvyA&start_radio=1&ab_channel=creative%2B"
        },
        {
          "name": "Pakarena",
          "ytUrl": "https://youtu.be/Ia7ryH1YQCI?si=mb79mt1UotH_9WBp"
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Ma’badong (Toraja)",
          "ytUrl": "https://www.youtube.com/watch?v=lmWXKjY1Ls4&ab_channel=ANEKATORAJA"
        },
      ]
    }
  ]
},

"74": {
  "name": "Sulawesi Tenggara",
  "capital": "Kendari",
  "area": "36,160",
  "population": "2.793 juta (2024)",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Coat_of_arms_of_Southeast_Sulawesi.svg/120px-Coat_of_arms_of_Southeast_Sulawesi.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Banua Tada (Buton)",
          "image": "https://cdn.rri.co.id/berita/Baubau/o/1719062112240-IMG_20240622_211215/zgiwgx3o62twsol.jpeg"
        },
        {
          "name": "Laika (Muna)",
          "image": "https://awsimages.detik.net.id/community/media/visual/2023/01/22/rumah-adat-laika-sulawesi-tenggara_43.png?w=1200"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Babu Nggawi (Tolaki)",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw7rahWKnBY8yDL0jKhgixhZS1E0mwJddoA&s"
        },
        {
          "name": "Babu Nggawi Langgai (Buton)",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHMiZLvKCJvj1iCPS-m6gow287-ptA3UuvA&s"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Lulo (Tolaki)",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=b5RQSfe0TUc&ab_channel=BUDAYA%26ALAMNUSANTARA"
        },
        {
          "name": "Tari Linda (Muna)",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=n-3xl146EgY&ab_channel=RanahSultra"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Parang Taawu / Mosehe",
          "image": "https://awsimages.detik.net.id/community/media/visual/2023/06/05/senjata-tradisional-sulawesi-tenggara.jpeg?w=334"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Sinonggi (Tolaki)",
          "image": "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-shutterstock-1887566764-e6f6e41199596a8d7da5de998e16742a.jpg?tr=w-768,h-576,fo-center"
        },
        {
          "name": "Kabuto (Makanan Buton)",
          "image": "https://cdn0-production-images-kly.akamaized.net/fdFBRxRrr43zT5f8iGydtfblx6E=/1x57:1000x620/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3242002/original/017665300_1600417068-shutterstock_1339481684.jpg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Lado-lado",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoRrPxdFSDyNRugIHaj7NxuiULHhBebZejQ&s",
          "ytUrl": ""
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Tana wolio",
          "ytUrl": "https://youtu.be/GC7315013EM?si=mzNhXOzR1fBRdhv9"
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tarian Lulo Massal",
          "ytUrl": "https://www.youtube.com/watch?v=FCDsqF9JJsk&ab_channel=DediSartono"
        },
        {
          "name": "Kande-kandea (Buton)",
          "ytUrl": "https://www.youtube.com/watch?v=QKf4n4qIL3o&ab_channel=AntaraSultra"
        }
      ]
    }
  ]
},

"75": {
  "name": "Gorontalo",
  "capital": "Gorontalo",
  "area": "12.025,147",
  "population": "	1.227.794 (2024)",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Coat_of_arms_of_Gorontalo.svg/120px-Coat_of_arms_of_Gorontalo.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Dulohupa",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/06/Dulohupa.jpg"
        },
        {
          "name": "Bantayo Poboide",
          "image": "https://geopark.gorontaloprov.go.id/media/images/32._Intangible-One_of_the_rooms_inside_Bantayo.width-800.jpg"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Bili'u (Pengantin Wanita)",
          "image": "https://i.pinimg.com/736x/aa/07/8d/aa078d94c325fac6c0d2fa137d99dd7f.jpg"
        },
        {
          "name": "Payunga (Pengantin Pria)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pakaian_adat_Payunga.png/1200px-Pakaian_adat_Payunga.png"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Saronde",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=QSssVDheaCo&list=RDQSssVDheaCo&start_radio=1"
        },
        {
          "name": "Tari Dana-dana",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=g1QdNZhFca0&list=RDg1QdNZhFca0&start_radio=1&ab_channel=ceritabudayabahasa"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Wamilo",
          "image": "https://asset.kompas.com/crops/jBspLQLqlAHhXtTESZLVv8srFTI=/178x72:742x448/750x500/data/photo/2021/05/19/60a4d9a74cd03.png"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Binte Biluhuta",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyVDDEPeNEQJjwiBjDMUzUCB2jkZm_b-F8w&s"
        },
        {
          "name": "Ilabulo",
          "image": "https://indonesiakaya.com/wp-content/uploads/2025/03/Edited-pictures_illabullo_04-1.jpeg"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Polopalo",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0jAco6b368c6SMgM3LMlnhNmdD2y0kcijw&s",
          "ytUrl": ""
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Binthe Biluhuta",
          "ytUrl": "https://youtu.be/VPJNr89QVDI?si=O2KZJ8ZGNaZJz6Ar "
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tarian Saronde (pertunjukan pernikahan)",
          "ytUrl": "https://www.youtube.com/watch?v=46QylIVFRmA&list=RD46QylIVFRmA&start_radio=1&ab_channel=UMGO"
        }
      ]
    }
  ]
},

"76": {
  "name": "Sulawesi Barat",
  "capital": "Mamuju",
  "area": "16,787", 
  "population": "1.481 juta (2023)",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Coat_of_arms_of_West_Sulawesi.svg/120px-Coat_of_arms_of_West_Sulawesi.svg.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Boyang Adaq",
          "image": "https://awsimages.detik.net.id/community/media/visual/2022/09/17/rumah-adat-mandar_169.jpeg?w=650"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Baju Pokko (Wanita)",
          "image": "https://asset.kompas.com/crops/OkuBwDPPGzQwc4ieiHDD96Woam0=/0x7:791x534/1200x800/data/photo/2025/01/20/678e4afd62f0a.jpeg"
        },
        {
          "name": "Baju Pattuqduq Towaine (Pria)",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDr44PK6LZN2hehTtuWjl_jgIge44aXNJUA&s"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Pattuqduq Towaine",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=WvN9q3GMnWo&list=RDWvN9q3GMnWo&start_radio=1&ab_channel=Perjalananrasa"
        },
        {
          "name": "Tari Sayyang Pattuddu’",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=zHvzmWKAqIY&ab_channel=TRANS7OFFICIAL"
        }
      ]
    },
    {
      "name": "Senjata",
      "data": [
        {
          "name": "Belati Jambia",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jambiya.jpg/250px-Jambiya.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Jepa",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPCR8aejkQU-hsIcpEPoSxp73dwKwTivdCA&s"
        },
        {
          "name": "Kue Kui-kui",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxU6lgFHKa7X6wXD_29Of--RgB_4V52HebOg&s"
        }
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Talindo",
          "image": "https://cdn.rri.co.id/berita/Makassar/o/1754372410405-talindo/p16jf31ilrzt3uq.png",
          "ytUrl": "https://youtu.be/ZsWdFCk1u4o?si=5LNgMpeV6UNtHLw3 "
        },
    
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Tenggang-tenggang lopi",
          "ytUrl": "https://youtu.be/17en8Ep5vQE?si=ppRKJe3AxQfrUekE"
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Sayyang Pattu’du (kuda menari tradisional)",
          "ytUrl": "https://www.youtube.com/watch?v=YIdoyfrdo8I&ab_channel=SyaripHasib"
        }
      ]
    }
  ]
},

// p maluku dan papua

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
  "area": "117,849", // km² (perkiraan luas wilayah)
  "population": "	562.220 (2024)", // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_Papua_Selatan.png/120px-Logo_Papua_Selatan.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Rumsram (umum di pesisir Papua)",
          "image": "https://rumahetnikpapua.com/wp-content/uploads/2023/11/IMG_8787-1024x683.jpg"
        },
        {
          "name": "Rumah Kariwari",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6a1aPhCYZvm_q5udGwv1UKOVbu24-6w2QhA&s"
        }
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Koteka & Rok Rumbai Marind",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG8DtZCf3bbGrIlQ538f9zXYVUC0d4ijpjw&s"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
        {
          "name": "Tari Yospan",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=BCkRtls1t08&list=RDBCkRtls1t08&start_radio=1&ab_channel=PIKKPLNPUSAT"
        },
        {
          "name": "Tari Suanggi",
          "image": "",
          "ytUrl": "https://www.youtube.com/watch?v=I4WyBWm7RhE&list=RDI4WyBWm7RhE&start_radio=1&ab_channel=YoggaFransisco"
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
          "name": "Sagu Sep (Papeda bakar)",
          "image": "https://asset-2.tribunnews.com/papuabarat/foto/bank/images/Gani-Nu-sagu-bakar-makanan-khas-warga-di-Lopintol-Raja-Ampat.jpg"
        },
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
          "name": "E mambo simbo",
          "ytUrl": "https://youtu.be/Kk5_K6S9Vug?si=tsSs6vtokJpAeyUw"
        },
        {
          "name": "Apuse",
          "ytUrl": "https://www.youtube.com/watch?v=J_TPrhwM7DI&list=RDJ_TPrhwM7DI&start_radio=1&ab_channel=DivaTheSeriesOfficial"
        },
        {
          "name": "Yamko Rambe Yamko",
          "ytUrl": "https://www.youtube.com/watch?v=HY_gTFciG70&list=RDHY_gTFciG70&start_radio=1&ab_channel=AnimasiCeritaIndonesia-ACI"
        }
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tari Adat Suku Marind",
          "ytUrl": "https://www.youtube.com/watch?v=eU5HAFzu6WM&ab_channel=DominikusUlukyananOfficial"
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
  "area": "39,123", // km² (perkiraan luas wilayah)
  "population": "623.186 (2024)", // perkiraan 2023
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_Papua_Barat_Daya1.png/120px-Logo_Papua_Barat_Daya1.png",
  "cultures": [
    {
      "name": "Rumah Adat",
      "data": [
        {
          "name": "Rumah Kaki Seribu (Arfak)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rumah_Kaki_Seribu_%28Mod_Aki_Aksa%29.jpg/330px-Rumah_Kaki_Seribu_%28Mod_Aki_Aksa%29.jpg"
        },
      ]
    },
    {
      "name": "Baju Adat",
      "data": [
        {
          "name": "Rok Rumbai & Hiasan Kepala Cendrawasih",
          "image": "https://kabarbaik.co/wp-content/uploads/2024/04/baju-adat.jpeg"
        }
      ]
    },
    {
      "name": "Tarian",
      "data": [
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
          "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2018/02/27/reginaberliani_busurdanpanah.jpg"
        },
        {
          "name": "Parang Papua",
          "image": "https://radarmukomuko.disway.id/upload/81835513b89222c52d062008c754842d.jpg"
        }
      ]
    },
    {
      "name": "Makanan Khas",
      "data": [
        {
          "name": "Papeda (dari sagu)",
          "image": "https://img.inews.co.id/media/1200/files/inews_new/2023/10/20/Papeda.jpg"
        },
      ]
    },
    {
      "name": "Alat Musik",
      "data": [
        {
          "name": "Triton",
          "image": "https://pdbifiles.nos.jkt-1.neo.id/files/2016/04/22/novalkarom_TritondariPapua.JPG",
          "ytUrl": "https://youtu.be/0mCoSmfzJtQ "
        },
      ]
    },
    {
      "name": "Lagu Daerah",
      "data": [
        {
          "name": "Sajojo",
          "ytUrl": "https://youtu.be/SsqiWAJj7n8?si=LmnzoyLLqHQzRt_6 "
        },
      ]
    },
    {
      "name": "Seni Pertunjukan",
      "data": [
        {
          "name": "Tari Perang Papua",
          "ytUrl": "https://www.youtube.com/watch?v=-LbpPKmZ43g&ab_channel=Mrok"
        }
      ]
    }
  ]
}

};

const provinceSongs = {
  // p jawa
  "31": "/music/jakarta.mp3",
  "32": "/music/jawa_barat.mp3",
  "36": "/music/banten.mp3",
  "33": "/music/jawa_tengah.mp3",
  "34": "/music/yogyakarta.mp3",
  "35": "/music/jawa_timur.mp3",

  // p sumatera
  "11": "/music/aceh.mp3",
  "12": "/music/sumatera_utara.mp3",
  "13": "/music/sumatera_barat.mp3",
  "14": "/music/riau.mp3",
  "15": "/music/jambi.mp3",
  "16": "/music/sumsel.mp3",
  "17": "/music/bengkulu.mp3",
  "18": "/music/lampung.mp3",
  "19": "/music/kepbanglitung.mp3",
  "21": "/music/kepriau.mp3",

  // p kalimantan
  "61": "/music/kalbar.mp3",
  "62": "/music/kalteng.mp3",
  "63": "/music/kalsel.mp3",
  "64": "/music/kaltim.mp3",
  "65": "/music/kalut.mp3",

  // p sulawesi
  "71": "/music/sulut.mp3",
  "72": "/music/sulteng.mp3",
  "73": "/music/sulsel.mp3",
  "74": "/music/sultra.mp3",
  "75": "/music/gorontalo.mp3",
  "76": "/music/sulbar.mp3",

  // Bali dan Nusa Tenggara
  "51": "/music/bali.mp3",
  "52": "/music/ntb.mp3",
  "53": "/music/ntt.mp3",

  // maluku & papua
  "81": "/music/maluku.mp3",
  "82": "/music/maluku_utara.mp3",

  "91-A": "/music/papua.mp3",
  "91-B": "/music/papua_pegunungan.mp3",
  "91-C": "/music/papua_selatan.mp3",
  "91-D": "/music/papua_tengah.mp3",

  "92-A": "/music/papua_barat.mp3",
  "92-B": "/music/papua_barat_daya.mp3"
  // dst...
};

const provinceQuizzes = {
  "31":[
  {
    "pertanyaan": "Berapakah luas wilayah provinsi DKI Jakarta?",
    "pilihan": [
      "10.640.000 km2",
      "66.15 km2",
      "661.5 km2",
      "6.615 km2"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional DKI Jakarta?",
    "pilihan": [
      "Pakaian pangsi",
      "Kebaya encim",
      "Pakaian ulos",
      "Baju kurung"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Mana saja yang termasuk rumah adat DKI Jakarta?",
    "pilihan": [
      "Rumah panggung Betawi",
      "Rumah Kebaya",
      "Rumah Gudang",
      "Semua benar"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas DKI Jakarta?",
    "pilihan": [
      "Sate lilit",
      "Kerak telor",
      "Gudeg",
      "Sate bandeng"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama senjata dari DKI Jakarta?",
    "pilihan": [
      "Keris",
      "Celurit",
      "Golok",
      "Rencong"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa saja tarian yang berasal dari DKI Jakarta?",
    "pilihan": [
      "Tari Katuran, Tari Saman dan Tari Piring",
      "Tari Piring dan Tari Rampak Bedug",
      "Tari Topeng Betawi",
      "Tari Jaipong dan Tari Tor-tor"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah alat musik yang berasal dari DKI Jakarta?",
    "pilihan": [
      "Suling dan gambus",
      "Pantun Bambu",
      "Tehyan, Tanjidor dan Rebana",
      "Gamelan dan gendang"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik Tehyan?",
    "pilihan": [
      "Dipukul",
      "Dipetik",
      "Ditiup",
      "Digesek"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah judul lagu yang berasal dari DKI Jakarta?",
    "pilihan": [
      "Suwe ora jamu",
      "Tabola bale dan Injit-injit semut",
      "Kicir-kicir, Ondel-ondel dan Jali-jali",
      "Dayung Sampan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama seni pertunjukan yang berasal dari DKI Jakarta?",
    "pilihan": [
      "Debus Surosowan",
      "Wayang",
      "Lenong",
      "Ludruk"
    ],
    "jawaban": 2
  }
],

"32": [
  {
    "pertanyaan": "Manakah yang merupakan ibu kota provinsi Jawa Barat?",
    "pilihan": [
      "Jakarta",
      "Tangerang",
      "Serang",
      "Bandung"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Jawa Barat?",
    "pilihan": [
      "Pakaian pangsi dan kebaya sunda",
      "Kebaya encim",
      "Pakaian ulos",
      "Baju kurung"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa saja nama rumah adat daerah Jawa Barat?",
    "pilihan": [
      "Imah Sulah nyanda",
      "Imah Badak Heuay, Imah Togog Anjing, Imah Julang ngapak dan Jolopong",
      "Imah adat kasepuhan",
      "Imah adat rakit"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Jawa Barat?",
    "pilihan": [
      "Sate lilit",
      "Kerak telor",
      "Gudeg",
      "Batagor"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama senjata yang berasal dari Jawa Barat?",
    "pilihan": [
      "Kujang",
      "Celurit",
      "Bedog",
      "Rencong"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa saja tarian yang berasal dari Jawa Barat?",
    "pilihan": [
      "Tari Katuran",
      "Tari Piring dan Tari Rampak Bedug",
      "Tari Cokek",
      "Tari Jaipong"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Jawa Barat?",
    "pilihan": [
      "Suling dan Angklung",
      "Pantun Bambu",
      "Gendang dan Suling",
      "Gamelan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik suling?",
    "pilihan": [
      "Dipukul",
      "Dipetik",
      "Ditiup",
      "Ditekan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah judul lagu yang berasal dari Jawa Barat?",
    "pilihan": [
      "Manuk Dadali dan Tokecang",
      "Jali-jali",
      "Kicir-kicir",
      "Dayung Sampan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Jawa Barat?",
    "pilihan": [
      "Debus Surosowan",
      "Angklung bungko",
      "Lenong",
      "Ludruk"
    ],
    "jawaban": 1
  }
],

"33": [
  {
    "pertanyaan": "Manakah yang merupakan ibu kota provinsi Jawa Tengah?",
    "pilihan": [
      "Jakarta",
      "Semarang",
      "Serang",
      "Bandung"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Jawa Tengah?",
    "pilihan": [
      "Pakaian Surjan",
      "Kebaya encim",
      "Pakaian ulos",
      "Baju kurung"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa saja nama rumah adat daerah Jawa Tengah?",
    "pilihan": [
      "Rumah Sulah nyanda",
      "Rumah Badak Heuay, Imah Togog Anjing, Imah Julang ngapak dan Jolopong",
      "Rumah adat kasepuhan",
      "Rumah Joglo, Limasan dan Tajug"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Jawa Tengah?",
    "pilihan": [
      "Sate lilit dan Gudeg",
      "Kerak telor",
      "Soto Kudus dan Getuk",
      "Batagor"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Mana saja senjata yang berasal dari Jawa Tengah?",
    "pilihan": [
      "Keris dan Wedhung",
      "Celurit dan Panah",
      "Bedog dan Tombak",
      "Rencong dan Bambu Runcing"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Jawa Tengah?",
    "pilihan": [
      "Tari Katuran",
      "Tari Piring dan Tari Rampak Bedug",
      "Tari Cokek",
      "Tari Gambyong"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Jawa Tengah?",
    "pilihan": [
      "Suling dan Angklung",
      "Pantun Bambu",
      "Gendang",
      "Gamelan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Dipetik",
      "Ditiup",
      "Ditekan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah judul lagu yang berasal dari Jawa Tengah?",
    "pilihan": [
      "Manuk Dadali dan Tokecang",
      "Jali-jali",
      "Lir-ilir dan Gundul-gundul Pacul",
      "Dayung Sampan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Jawa Tengah?",
    "pilihan": [
      "Debus Surosowan",
      "Tari Kuda Lumping",
      "Lenong",
      "Ludruk"
    ],
    "jawaban": 1
  }
],

"34": [
  {
    "pertanyaan": "Manakah yang merupakan ibu kota provinsi Yogyakarta?",
    "pilihan": [
      "Jakarta",
      "Semarang",
      "Serang",
      "Yogyakarta"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Yogyakarta?",
    "pilihan": [
      "Pakaian Surjan",
      "Kebaya encim",
      "Pakaian ulos",
      "Baju kurung"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa saja nama rumah adat Yogyakarta?",
    "pilihan": [
      "Rumah Sulah nyanda",
      "Rumah Badak Heuay, Imah Togog Anjing, Imah Julang ngapak dan Jolopong",
      "Rumah Bangsal Kencono dan Rumah Joglo",
      "Rumah Joglo, Limasan dan Tajug"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Yogyakarta?",
    "pilihan": [
      "Gudeg Nangka",
      "Kerak telor",
      "Soto Kudus",
      "Batagor"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa senjata yang berasal dari Yogyakarta?",
    "pilihan": [
      "Keris",
      "Celurit dan Panah",
      "Bedog",
      "Rencong dan bambu Runcing"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Yogyakarta?",
    "pilihan": [
      "Tari Katuran",
      "Tari Serimpi",
      "Tari Cokek",
      "Tari Gambyong"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik dari Yogyakarta?",
    "pilihan": [
      "Suling dan Angklung",
      "Pantun Bambu",
      "Gendang",
      "Gamelan"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Dipetik",
      "Ditiup",
      "Ditekan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah judul lagu yang berasal dari Yogyakarta?",
    "pilihan": [
      "Manuk dadali dan Tokecang",
      "Suwe Ora Jamu",
      "Lir-ilir dan Gundul-gundul pacul",
      "Dayung Sampan"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Yogyakarta?",
    "pilihan": [
      "Debus Surosowan",
      "Tari Kuda lumping",
      "Lenong",
      "Wayang Kulit"
    ],
    "jawaban": 3
  }
],

"35": [
  {
    "pertanyaan": "Manakah yang merupakan ibu kota provinsi Jawa Timur?",
    "pilihan": [
      "Surabaya",
      "Semarang",
      "Serang",
      "Bandung"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Berapakah luas wilayah Jawa Timur?",
    "pilihan": [
      "4,7922 km2",
      "47,922 km2",
      "479,22 km2",
      "4792,2 km2"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Jawa Timur?",
    "pilihan": [
      "Baju Gothil",
      "Kebaya encim",
      "Pakaian ulos",
      "Baju kurung"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa saja nama rumah adat daerah Jawa Timur?",
    "pilihan": [
      "Rumah Sulah nyanda",
      "Rumah Badak Heuay, Imah Togog Anjing, Imah Julang ngapak dan Jolopong",
      "Rumah Tanean Lanjhang, Tengger, Dhurung dan Joglo",
      "Rumah Joglo, Limasan dan Tajug"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Jawa Timur?",
    "pilihan": [
      "Sate lilit dan Gudeg",
      "Kerak telor",
      "Soto Kudus dan Getuk",
      "Tahu campur"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Jawa Timur?",
    "pilihan": [
      "Keris dan Wedhung",
      "Celurit",
      "Bedog dan Tombak",
      "Rencong"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Jawa Timur?",
    "pilihan": [
      "Reog Ponorogo",
      "Tari Piring dan Tari Rampak Bedug",
      "A dan D benar",
      "Gandrung Banyuwangi"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Jawa Timur?",
    "pilihan": [
      "Suling dan Angklung",
      "Pantun Bambu",
      "Timbal atau Gendang",
      "Gamelan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Jawa Timur?",
    "pilihan": [
      "Manuk dadali dan Tokecang",
      "Jali-jali",
      "Lir-ilir dan Gundul-gundul pacul",
      "Rek ayo rek dan Cublak-cublak suweng"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Jawa Timur?",
    "pilihan": [
      "Wayang kulit",
      "Tari Kuda lumping",
      "Lenong",
      "Ludruk"
    ],
    "jawaban": 0
  }
],

"36": [
  {
    "pertanyaan": "Manakah yang merupakan ibu kota provinsi Banten?",
    "pilihan": [
      "Jakarta",
      "Tangerang",
      "Serang",
      "Cilegon"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional dari Banten?",
    "pilihan": [
      "Pakaian pangsi",
      "Kebaya encim",
      "Pakaian ulos",
      "Baju kurung"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Banten?",
    "pilihan": [
      "Rumah adat Sulah nyanda",
      "Rumah adat kebaya",
      "Rumah adat kasepuhan",
      "Rumah adat rakit"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Banten?",
    "pilihan": [
      "Sate lilit",
      "Kerak telor",
      "Gudeg",
      "Sate bandeng"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama senjata yang berasal dari Banten?",
    "pilihan": [
      "Keris",
      "Celurit",
      "Bedog",
      "Rencong"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa saja tarian yang berasal dari Banten?",
    "pilihan": [
      "Tari Katuran, Tari Saman dan Tari Piring",
      "Tari Piring dan Tari Rampak Bedug",
      "Tari Cokek, Tari Rampak Bedug dan Tari Katuran",
      "Tari Jaipong dan Tari Tor-tor"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah nama alat musik yang berasal dari Banten?",
    "pilihan": [
      "Suling",
      "Pantun Bambu",
      "Angklung",
      "Gamelan"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Dipetik",
      "Ditiup",
      "Ditekan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah judul lagu yang berasal dari Banten?",
    "pilihan": [
      "Suwe ora jamu",
      "Tabola bale",
      "Kicir-kicir",
      "Dayung Sampan"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama seni pertunjukan yang berasal dari Banten?",
    "pilihan": [
      "Debus Surosowan",
      "Wayang",
      "Lenong",
      "Ludruk"
    ],
    "jawaban": 0
  }
],

"51": [
  {
    "pertanyaan": "Manakah yang merupakan ibu kota provinsi Bali?",
    "pilihan": [
      "Tabanan",
      "Garokgak",
      "Denpasar",
      "Buleleng"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Berapakah luas wilayah provinsi Bali?",
    "pilihan": [
      "5,780,06 km2",
      "578,006 km2",
      "57,800,6 km2",
      "5780,06 km2"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Bali?",
    "pilihan": [
      "Baju Gothil",
      "Kebaya encim",
      "Payas Agung",
      "Baju kurung"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa saja nama rumah adat daerah Bali?",
    "pilihan": [
      "Rumah Gapura candi bentar dan rumah bale",
      "Rumah Badak Heuay, Imah Togog Anjing, Imah Julang ngapak dan Jolopong",
      "Rumah Tanean Lanjhang, Tengger, Dhurung dan Joglo",
      "Rumah Joglo, Limasan dan Tajug"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Bali?",
    "pilihan": [
      "Sate lilit dan Gudeg",
      "Kerak telor",
      "Soto Kudus dan Getuk",
      "Ayam Betutu"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Bali?",
    "pilihan": [
      "Keris",
      "Celurit",
      "Bedog dan Tombak",
      "Rencong"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Bali?",
    "pilihan": [
      "Reog Ponorogo",
      "Tari Piring dan Tari Rampak Bedug",
      "Tari Kecak, Tari Pendet dan Tari Barong",
      "Gandrung Banyuwangi"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Bali?",
    "pilihan": [
      "Ceng-ceng",
      "Pantun Bambu",
      "Timbal atau Gendang",
      "Gamelan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Bali?",
    "pilihan": [
      "Manuk dadali dan Tokecang",
      "Jali-jali",
      "Lir-ilir dan Gundul-gundul pacul",
      "Mejangeran"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Bali?",
    "pilihan": [
      "Wayang kulit",
      "Tari Kuda lumping",
      "Wayang wong Bali",
      "Ludruk"
    ],
    "jawaban": 2
  }
],

"52": [
  {
    "pertanyaan": "Manakah yang merupakan ibu kota provinsi NTB?",
    "pilihan": [
      "Bima",
      "Mataram",
      "Sumbawa",
      "Lombok"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional NTB?",
    "pilihan": [
      "Baju adat Sasak (Lambung & Pegon)",
      "Kebaya encim",
      "Payas Agung",
      "Baju kurung"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa saja nama rumah adat daerah NTB?",
    "pilihan": [
      "Bale Gapura candi bentar dan rumah bale",
      "Imah Badak Heuay, Imah Togog Anjing, Imah Julang ngapak dan Jolopong",
      "Rumah Tanean Lanjhang, Tengger, Dhurung dan Joglo",
      "Bale Lumbung dan Bale Tani"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas NTB?",
    "pilihan": [
      "Sate lilit dan Gudeg",
      "Ayam taliwang dan Plecing kangkung",
      "Soto Kudus dan Getuk",
      "Ayam Betutu dan Sate lilit"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari NTB?",
    "pilihan": [
      "Keris Bima",
      "Celurit",
      "Bedog dan Tombak",
      "Rencong"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari NTB?",
    "pilihan": [
      "Reog Ponorogo",
      "Tari Gendang beleq dan Tari Peresean",
      "Tari kecak, Tari Pendet dan Tari Barong",
      "Gandrung Banyuwangi"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah NTB?",
    "pilihan": [
      "Ceng-ceng",
      "Pantun Bambu",
      "Timbal atau Gendang",
      "Serunai"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Dipetik",
      "Ditiup",
      "Ditekan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari NTB?",
    "pilihan": [
      "Manuk dadali dan Tokecang",
      "Tutu Koda",
      "Suwe ora jamu",
      "Mejangeran"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan NTB?",
    "pilihan": [
      "Wayang kulit",
      "Peresean",
      "Wayang wong NTB",
      "Ludruk"
    ],
    "jawaban": 1
  }
],

"53": [
  {
    "pertanyaan": "Dimana ibu kota provinsi NTT berada?",
    "pilihan": [
      "Kupang",
      "Atambua",
      "Kalabahi",
      "Larantuka"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional NTT?",
    "pilihan": [
      "Baju adat Sasak (Lambung & Pegon)",
      "Kebaya encim",
      "Payas Agung",
      "Baju kurung"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa saja nama rumah adat daerah NTT?",
    "pilihan": [
      "Bale Gapura candi bentar dan rumah bale",
      "Imah Badak Heuay, Imah Togog Anjing, Imah Julang ngapak dan Jolopong",
      "Sao Ata Lakitana dan Sao Ria",
      "Bale Lumbung dan Bale Tani"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas NTT?",
    "pilihan": [
      "Sate lilit dan Gudeg",
      "Ayam taliwang dan Plecing kangkung",
      "Soto Kudus dan Getuk",
      "Jagung Bose dan Se’I Sapi"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari NTT?",
    "pilihan": [
      "Keris Bima",
      "Suri",
      "Bedog dan Tombak",
      "Rencong"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari NTT?",
    "pilihan": [
      "Reog Ponorogo",
      "Tari Gendang beleq dan Tari Peresean",
      "Tari Caci dan Tari Likurai",
      "Gandrung Banyuwangi"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah NTT?",
    "pilihan": [
      "Ceng-ceng",
      "Pantun Bambu",
      "Sasando",
      "Serunai"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Dipetik",
      "Ditiup",
      "Ditekan"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari NTT?",
    "pilihan": [
      "Gemufamire dan Anak kambing saya",
      "Tutu Koda",
      "Suwe ora jamu",
      "Mejangeran"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan NTT?",
    "pilihan": [
      "Wayang kulit",
      "Peresean",
      "Wayang wong NTB",
      "Sandelwood Parade"
    ],
    "jawaban": 3
  }
],

// p kalimantan

"61": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Kalimantan Barat berada?",
    "pilihan": [
      "Pontianak",
      "Sintang",
      "Singkawang",
      "Bontang"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional wanita Kalimantan Barat?",
    "pilihan": [
      "Baju Ta’a",
      "Baju King Bibinge",
      "Pakaian Sangkarut",
      "Baju Bagajah Gamuling Baular Lulut"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional pria Kalimantan Barat?",
    "pilihan": [
      "Baju Ta’a",
      "Baju Baamar Galung Pancar Mata",
      "King Baba",
      "Baju Bagajah Gamuling Baular Lulut"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Kalimantan Barat?",
    "pilihan": [
      "Bale Gapura candi bentar",
      "Rumah Lamin",
      "Rumah Panjang",
      "Rumah Betang"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Kalimantan Barat?",
    "pilihan": [
      "Kalumpe dan Juhu Singkah",
      "Bubur pedas sambas dan Pengkang",
      "Nasi Bekepor dan Amplang",
      "Jagung Bose"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Kalimantan Barat?",
    "pilihan": [
      "Keris Bima",
      "Telawang",
      "Celurit",
      "Mandau"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Kalimantan Barat?",
    "pilihan": [
      "Tari Monong dan Tari Zapin Tembung",
      "Tari Gendang beleq dan Tari Peresean",
      "Tari Gong dan Tari Hudoq",
      "Tari Radap Rahayu dan Tari Baksa Kembang"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Kalimantan Barat?",
    "pilihan": [
      "Japen",
      "Sensapi",
      "Tuma",
      "Uding"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Kalimantan Barat?",
    "pilihan": [
      "Gemufamire",
      "Ampar-ampar pisang",
      "Indung-Indung",
      "Cik-cik periuk"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Kalimantan Barat?",
    "pilihan": [
      "Hudoq Festival",
      "Sandung",
      "Wayang",
      "Mamapas Lewu"
    ],
    "jawaban": 1
  }
],

"62": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Kalimantan Tengah berada?",
    "pilihan": [
      "Seruyan",
      "Sukamara",
      "Lamandau",
      "Palangka Raya"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Kalimantan Tengah?",
    "pilihan": [
      "Baju adat Sasak",
      "Baju Baamar Galung Pancar Mata",
      "Pakaian Sangkarut",
      "Baju Bagajah Gamuling Baular Lulut"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Kalimantan Tengah?",
    "pilihan": [
      "Bale Gapura candi bentar",
      "Bubungan Tinggi",
      "Sao Ata Lakitana",
      "Rumah Betang"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Kalimantan Tengah?",
    "pilihan": [
      "Kalumpe dan Juhu Singkah",
      "Gudeg dan sate",
      "Soto Kudus",
      "Jagung Bose"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Kalimantan Tengah?",
    "pilihan": [
      "Keris Bima",
      "Suri",
      "Mandau",
      "Rencong"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Kalimantan Tengah?",
    "pilihan": [
      "Tari Tambun dan Bungai",
      "Tari Gendang beleq dan Tari Peresean",
      "Tari Caci dan Tari Likurai",
      "Tari Radap Rahayu dan Tari Baksa Kembang"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Kalimantan Tengah?",
    "pilihan": [
      "Japen",
      "Sensapi",
      "Sasando",
      "Serunai"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Ditiup",
      "Dipetik",
      "Dipukul",
      "Digoyang"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Kalimantan Tengah?",
    "pilihan": [
      "Gemufamire",
      "Ampar-ampar pisang",
      "Suwe ora jamu",
      "Manari Manasai"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Kalimantan Tengah?",
    "pilihan": [
      "Mamanda",
      "Peresean",
      "Wayang",
      "Mamapas Lewu"
    ],
    "jawaban": 3
  }
],

"63": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Kalimantan Selatan berada?",
    "pilihan": [
      "Banjarbaru",
      "Martapura",
      "Banjarmasin",
      "Marabahan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional wanita Kalimantan Selatan?",
    "pilihan": [
      "Baju adat Sasak",
      "Baju Baamar Galung Pancar Mata",
      "Payas Agung",
      "Baju Bagajah Gamuling Baular Lulut"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional pria Kalimantan Selatan?",
    "pilihan": [
      "Baju adat Sasak",
      "Baju Baamar Galung Pancar Mata",
      "Payas Agung",
      "Baju Bagajah Gamuling Baular Lulut"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa saja nama rumah adat daerah Kalimantan Selatan?",
    "pilihan": [
      "Bale Gapura candi bentar",
      "Bubungan Tinggi",
      "Sao Ata Lakitana",
      "Bale Lumbung"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Kalimantan Selatan?",
    "pilihan": [
      "Ketupat Kandangan",
      "Gudeg",
      "Soto Kudus",
      "Jagung Bose"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Kalimantan Selatan?",
    "pilihan": [
      "Keris Bima",
      "Suri",
      "Mandau",
      "Rencong"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Kalimantan Selatan?",
    "pilihan": [
      "Reog Ponorogo",
      "Tari Gendang beleq dan Tari Peresean",
      "Tari Caci dan Tari Likurai",
      "Tari Radap Rahayu dan Tari Baksa Kembang"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Kalimantan Selatan?",
    "pilihan": [
      "Ceng-ceng",
      "Sensapi",
      "Sasando",
      "Serunai"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Kalimantan Selatan?",
    "pilihan": [
      "Gemufamire",
      "Ampar-ampar pisang",
      "Suwe ora jamu",
      "Manuk dadali"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Kalimantan Selatan?",
    "pilihan": [
      "Mamanda",
      "Peresean",
      "Wayang",
      "Sandelwood Parade"
    ],
    "jawaban": 0
  }
],

"64": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Kalimantan Timur berada?",
    "pilihan": [
      "Mahakam",
      "Samarinda",
      "Balikpapan",
      "Bontang"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional wanita Kalimantan Timur?",
    "pilihan": [
      "Baju Ta’a",
      "Baju Baamar Galung Pancar Mata",
      "Pakaian Sangkarut",
      "Baju Bagajah Gamuling Baular Lulut"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional pria Kalimantan Timur?",
    "pilihan": [
      "Baju Ta’a",
      "Baju Baamar Galung Pancar Mata",
      "Sapei Sapaq",
      "Baju Bagajah Gamuling Baular Lulut"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Kalimantan Timur?",
    "pilihan": [
      "Bale Gapura candi bentar",
      "Rumah Lamin",
      "Sao Ata Lakitana",
      "Rumah Betang"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Kalimantan Timur?",
    "pilihan": [
      "Kalumpe dan Juhu Singkah",
      "Gudeg dan sate",
      "Nasi Bekepor dan Amplang",
      "Jagung Bose"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Kalimantan Timur?",
    "pilihan": [
      "Keris Bima",
      "Telawang",
      "Celurit",
      "Rencong"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Kalimantan Timur?",
    "pilihan": [
      "Tari Tambun dan Bungai",
      "Tari Gendang beleq dan Tari Peresean",
      "Tari Gong dan Tari Hudoq",
      "Tari Radap Rahayu dan Tari Baksa Kembang"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Kalimantan Timur?",
    "pilihan": [
      "Japen",
      "Sensapi",
      "Sasando",
      "Uding"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Kalimantan Timur?",
    "pilihan": [
      "Gemufamire",
      "Ampar-ampar pisang",
      "Indung-Indung",
      "Manari Manasai"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Kalimantan Timur?",
    "pilihan": [
      "Hudoq Festival",
      "Peresean",
      "Wayang",
      "Mamapas Lewu"
    ],
    "jawaban": 0
  }
],

"65":[
  {
    "pertanyaan": "Dimana ibu kota provinsi Kalimantan Utara berada?",
    "pilihan": [
      "Tarakan",
      "Bulungan",
      "Tanjung Selor",
      "Malinau"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional wanita Kalimantan Utara?",
    "pilihan": [
      "Baju Ta’a",
      "Baju King Bibinge",
      "Pakaian Sangkarut",
      "Baju Bagajah Gamuling Baular Lulut"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional pria Kalimantan Utara?",
    "pilihan": [
      "Baju Ta’a",
      "Baju Baamar Galung Pancar Mata",
      "King Baba",
      "Baju Bagajah Gamuling Baular Lulut"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Kalimantan Utara?",
    "pilihan": [
      "Rumah Baloy",
      "Rumah Lamin",
      "Rumah Panjang",
      "Rumah Betang"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Kalimantan Utara?",
    "pilihan": [
      "Kalumpe",
      "Bubur pedas sambas",
      "Nasi Bekepor",
      "Ikan Asin Richa"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Kalimantan Utara?",
    "pilihan": [
      "Keris Bima",
      "Telawang",
      "Celurit",
      "Mandau"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Kalimantan Utara?",
    "pilihan": [
      "Tari Zapin Tembung",
      "Tari Jepen",
      "Tari Gong dan Tari Hudoq",
      "Tari Radap Rahayu"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Kalimantan Utara?",
    "pilihan": [
      "Japen",
      "Sampe/Sape",
      "Tuma",
      "Uding"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Kalimantan Utara?",
    "pilihan": [
      "Gemufamire",
      "Bebalon",
      "Indung-Indung",
      "Cik-cik periuk"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Kalimantan Utara?",
    "pilihan": [
      "Pertunjukan Hudoq",
      "Sandung",
      "Wayang",
      "Mamapas Lewu"
    ],
    "jawaban": 0
  }
],

// 
"11": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Aceh berada?",
    "pilihan": [
      "Banda Aceh",
      "Lhokseumawe",
      "Subussalam",
      "Sabang"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama rumah adat khas Aceh?",
    "pilihan": [
      "Krong Bade",
      "Tongkonan",
      "Gadang",
      "Honai"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional dari Aceh?",
    "pilihan": [
      "Ulee Balang",
      "Baju Bodo",
      "Baju Meukeusah",
      "Baju Cele"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa senjata tradisional yang berasal dari Aceh?",
    "pilihan": [
      "Celurit",
      "Badik",
      "Mandau",
      "Rencong"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Tarian tradisional yang terkenal dari Aceh adalah?",
    "pilihan": [
      "Tari Serimpi",
      "Tari Jaipong",
      "Tari Piring",
      "Tari Saman"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa alat musik khas yang berasal dari Aceh?",
    "pilihan": [
      "Sasando",
      "Serune Kalee",
      "Gamelan",
      "Kolintang"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Dipetik",
      "Ditiup",
      "Digoyang"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Makanan tradisional terkenal dari Aceh adalah?",
    "pilihan": [
      "Tekwan",
      "Papeda",
      "Mie Aceh",
      "Ayam Betutu"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Lagu daerah yang berasal dari Aceh adalah?",
    "pilihan": [
      "Bungong Jeumpa",
      "Rasa Sayange",
      "Apuse",
      "Sajojo"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan dari Aceh?",
    "pilihan": [
      "Tari Kecak",
      "Ratoh Jaroe",
      "Kuda Lumping",
      "Debus"
    ],
    "jawaban": 1
  }
],
"13": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Sumatera Barat berada?",
    "pilihan": [
      "Pariaman",
      "Padang",
      "Payakumbuh",
      "Padang Panjang"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Sumatera Barat?",
    "pilihan": [
      "Baju Batabue",
      "Baju King Bibinge",
      "Baju Rejang",
      "Baju Kurung Tanggung"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Sumatera Barat?",
    "pilihan": [
      "Rumah Bubungan Lima",
      "Rumah Gadang",
      "Rumah Panggung",
      "Rumah Betang"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Sumatera Barat?",
    "pilihan": [
      "Tekwan",
      "Lemea",
      "Tempoyak Ikan Patin",
      "Rendang"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Sumatera Barat?",
    "pilihan": [
      "Badik",
      "Telawang",
      "Kerambit dan Ruduih",
      "Keris"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Sumatera Barat?",
    "pilihan": [
      "Tari Sekapur Sirih",
      "Tari Melinting",
      "Tari Piring",
      "Tari Andun"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Sumatera Barat?",
    "pilihan": [
      "Japen",
      "Accordion",
      "Gambang Kayu",
      "Sarunai"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Sumatera Barat?",
    "pilihan": [
      "Cangget Agung",
      "Cuk mak ilang",
      "Kampuang Nan Jauh di Mato",
      "Ikan Pais"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Sumatera Barat?",
    "pilihan": [
      "Dulmuluk",
      "Tabot",
      "Cangget",
      "Randai"
    ],
    "jawaban": 3
  }
],
"14": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Riau berada?",
    "pilihan": [
      "Dumai",
      "Bengkalis",
      "Pekanbaru",
      "Selat Panjang"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Riau?",
    "pilihan": [
      "Baju Batabue",
      "Baju Kebaya Labuh",
      "Baju Rejang",
      "Baju Kurung Tanggung"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Riau?",
    "pilihan": [
      "Rumah Bubungan Lima",
      "Rumah Gadang",
      "Rumah Panggung",
      "Rumah Selaso Jatuh Kembar"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Riau?",
    "pilihan": [
      "Mie Sagu",
      "Lemea",
      "Tempoyak Ikan Patin",
      "Mie Gomak"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Riau?",
    "pilihan": [
      "Beladau",
      "Telawang",
      "Kerambit dan Ruduih",
      "Keris"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Riau?",
    "pilihan": [
      "Tari Sekapur Sirih",
      "Tari Melinting",
      "Tari Zapin",
      "Tari Andun"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Riau?",
    "pilihan": [
      "Japen",
      "Gambus",
      "Gambang Kayu",
      "Sarunai"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Riau?",
    "pilihan": [
      "Cangget Agung",
      "Cuk Mak Ilang",
      "Kampuang Nan Jauh di Mato",
      "Pulau Bintan"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Riau?",
    "pilihan": [
      "Makyong",
      "Tabot",
      "Cangget",
      "Randai"
    ],
    "jawaban": 0
  }
],
"15": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Jambi berada?",
    "pilihan": [
      "Jambi",
      "Tebo",
      "Muaro Jambi",
      "Sungai Penuh"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Jambi?",
    "pilihan": [
      "Aesan Gede dan Aesan Pasangko",
      "Baju King Bibinge",
      "Baju Rejang",
      "Baju Kurung Tanggung"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Jambi?",
    "pilihan": [
      "Rumah Bubungan Lima",
      "Rumah Panggung Kajang Lako",
      "Rumah Panggung",
      "Rumah Betang"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Jambi?",
    "pilihan": [
      "Tekwan",
      "Lemea",
      "Tempoyak Ikan Patin",
      "Ikan asin Richa"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Jambi?",
    "pilihan": [
      "Badik",
      "Telawang",
      "Pedang Jenawi",
      "Keris"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Jambi?",
    "pilihan": [
      "Tari Sekapur Sirih",
      "Tari Melinting",
      "Tari Gending Sriwijaya",
      "Tari Andun"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Jambi?",
    "pilihan": [
      "Japen",
      "Accordion",
      "Gambang Kayu",
      "Doll"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Jambi?",
    "pilihan": [
      "Cangget Agung",
      "Cuk mak ilang",
      "Injit-injit Semut",
      "Ikan Pais"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Jambi?",
    "pilihan": [
      "Dulmuluk",
      "Tabot",
      "Cangget",
      "Tari Sekapur Sirih"
    ],
    "jawaban": 3
  }
],
"16": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Sumatera Selatan berada?",
    "pilihan": [
      "Prabumulih",
      "Lubuk Linggau",
      "Palembang",
      "Pagar Alam"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Sumatera Selatan?",
    "pilihan": [
      "Aesan Gede dan Aesan Pasangko",
      "Baju King Bibinge",
      "Pakaian Sangkarut",
      "Baju adat Saibatin"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Sumatera Selatan?",
    "pilihan": [
      "Rumah panggung",
      "Rumah Lamin",
      "Rumah Limas dan Rumah Ulu",
      "Rumah Betang"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Sumatera Selatan?",
    "pilihan": [
      "Pempek dan Tekwan",
      "Seruit",
      "Nasi Bekepor",
      "Ikan asin Richa"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Sumatera Selatan?",
    "pilihan": [
      "Badik",
      "Telawang",
      "Celurit",
      "Tombak Trisula"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Sumatera Selatan?",
    "pilihan": [
      "Tari Zapin Tembung",
      "Tari Melinting",
      "Tari Gending Sriwijaya",
      "Tari Radap Rahayu"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Sumatera Selatan?",
    "pilihan": [
      "Japen",
      "Accordion",
      "Tuma",
      "Bende"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Sumatera Selatan?",
    "pilihan": [
      "Cangget Agung",
      "Cuk mak ilang",
      "Indung-Indung",
      "Cik-cik periuk"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Sumatera Selatan?",
    "pilihan": [
      "Dulmuluk",
      "Sandung",
      "Cangget",
      "Mamapas Lewu"
    ],
    "jawaban": 0
  }
],
"17": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Bengkulu berada?",
    "pilihan": [
      "Bengkulu",
      "Lubuk Linggau",
      "Palembang",
      "Pagar Alam"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Bengkulu?",
    "pilihan": [
      "Aesan Gede dan Aesan Pasangko",
      "Baju King Bibinge",
      "Baju Rejang",
      "Baju adat Saibatin"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Bengkulu?",
    "pilihan": [
      "Rumah Bubungan Lima",
      "Rumah Lamin",
      "Rumah Limas dan Rumah Ulu",
      "Rumah Betang"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Bengkulu?",
    "pilihan": [
      "Pempek dan Tekwan",
      "Pendap dan Lemea",
      "Nasi Bekepor",
      "Ikan asin Richa"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Bengkulu?",
    "pilihan": [
      "Badik",
      "Telawang",
      "Pedang Jenawi",
      "Tombak Trisula"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Bengkulu?",
    "pilihan": [
      "Tari Zapin Tembung",
      "Tari Melinting",
      "Tari Gending Sriwijaya",
      "Tari Andun"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Bengkulu?",
    "pilihan": [
      "Japen",
      "Accordion",
      "Tuma",
      "Doll"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Bengkulu?",
    "pilihan": [
      "Cangget Agung",
      "Cuk mak ilang",
      "Indung-Indung",
      "Ikan Pais"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Bengkulu?",
    "pilihan": [
      "Dulmuluk",
      "Tabot",
      "Cangget",
      "Mamapas Lewu"
    ],
    "jawaban": 1
  }
],
"18": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Lampung berada?",
    "pilihan": [
      "Bandar Lampung",
      "Way Kanan",
      "Pringsewu",
      "Lampung Barat"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Lampung?",
    "pilihan": [
      "Baju Ta’a",
      "Baju King Bibinge",
      "Pakaian Sangkarut",
      "Baju adat Saibatin"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Lampung?",
    "pilihan": [
      "Rumah Baloy",
      "Rumah Lamin",
      "Rumah Nuwo Sesat",
      "Rumah Betang"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan khas Lampung?",
    "pilihan": [
      "Kalumpe",
      "Seruit",
      "Nasi Bekepor",
      "Ikan asin Richa"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Lampung?",
    "pilihan": [
      "Badik",
      "Telawang",
      "Celurit",
      "Mandau"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Lampung?",
    "pilihan": [
      "Tari Zapin Tembung",
      "Tari Melinting",
      "Tari Gong dan Tari Hudoq",
      "Tari Radap Rahayu"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Lampung?",
    "pilihan": [
      "Japen",
      "Sampe/Sape",
      "Tuma",
      "Bende"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Digoyang"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Lampung?",
    "pilihan": [
      "Cangget Agung",
      "Bebalon",
      "Indung-Indung",
      "Cik-cik periuk"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Lampung?",
    "pilihan": [
      "Pertunjukan Hudoq",
      "Sandung",
      "Cangget",
      "Mamapas Lewu"
    ],
    "jawaban": 2
  }
],
"19": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Bangka Belitung berada?",
    "pilihan": [
      "Bengkulu",
      "Bangka",
      "Pangkalpinang",
      "Belitung"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Bangka Belitung?",
    "pilihan": [
      "Baju Paksian",
      "Baju King Bibinge",
      "Baju Rejang",
      "Baju adat Saibatin"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Bangka Belitung?",
    "pilihan": [
      "Rumah Bubungan Lima",
      "Rumah Lamin",
      "Rumah Limas dan Rumah Ulu",
      "Rumah Limas potong"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Bangka Belitung?",
    "pilihan": [
      "Pempek",
      "Pendap",
      "Nasi Bekepor",
      "Lempah Kuning"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Bangka Belitung?",
    "pilihan": [
      "Badik",
      "Sewir",
      "Pedang Jenawi",
      "Tombak Trisula"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Bangka Belitung?",
    "pilihan": [
      "Tari Zapin Tembung",
      "Tari Melinting",
      "Tari Campak dan Tari Sepen",
      "Tari Andun"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Bangka Belitung?",
    "pilihan": [
      "Dambus",
      "Accordion",
      "Tuma",
      "Doll"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Bangka Belitung?",
    "pilihan": [
      "Cangget Agung",
      "Yok Miak",
      "Indung-Indung",
      "Ikan Pais"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Bangka Belitung?",
    "pilihan": [
      "Dulmuluk",
      "Tabot",
      "Cangget",
      "Mamapas Lewu"
    ],
    "jawaban": 1
  }
],

// sulawesi
"71": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Sulawesi Utara berada?",
    "pilihan": [
      "Manado",
      "Bitung",
      "Kotamobagu",
      "Tomohon"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional wanita dari Sulawesi Utara?",
    "pilihan": [
      "Baju Bili’u",
      "Baju Bolaang Mongondow",
      "Baju Ngatau",
      "Baju Pamona"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Sulawesi Utara?",
    "pilihan": [
      "Rumah Balla Lompoa",
      "Rumah Wale",
      "Rumah Dulohupa",
      "Rumah Boyang Adaq"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Mana saja yang merupakan makanan Sulawesi Utara?",
    "pilihan": [
      "Illabulo dan Binte Biluhuta",
      "Tinutuan dan Cakalang Fufu",
      "Kaledo, Uta Kelo dan Lalampa",
      "Jepa dan Kue kui-kui"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Sulawesi Utara?",
    "pilihan": [
      "Wamilo",
      "Belati Jambia",
      "Kerambit dan Ruduih",
      "Perisai"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Sulawesi Utara?",
    "pilihan": [
      "Tari Maengket",
      "Tari Pamonte",
      "Tari Sayyang Pattuddu’",
      "Tari Pakarena"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Sulawesi Utara?",
    "pilihan": [
      "Lado-lado",
      "Lalove",
      "Kolintang",
      "Polopalo"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Digesek"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Sulawesi Utara?",
    "pilihan": [
      "Tenggang-tenggang Lopi",
      "Binthe Biluhuta",
      "Palu Ngataku",
      "SiPatokaan"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Sulawesi Utara?",
    "pilihan": [
      "Ma’badong",
      "Mpae",
      "Kabasaran Show",
      "Tari Saronde"
    ],
    "jawaban": 2
  }
],
"72": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Sulawesi Tengah berada?",
    "pilihan": [
      "Palu",
      "Poso",
      "Morowali",
      "Moutong"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional dari Sulawesi Tengah?",
    "pilihan": [
      "Baju Batabue",
      "Baju Bodo",
      "Baju Ngatau",
      "Baju Pamona"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Sulawesi Tengah?",
    "pilihan": [
      "Rumah Balla Lompoa",
      "Rumah Tambi",
      "Rumah Panggung",
      "Rumah Boyang Adaq"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Mana saja yang merupakan makanan Sulawesi Tengah?",
    "pilihan": [
      "Mie Sagu dan Konro",
      "Coto Makassar, Pallubasa dan Konro",
      "Kaledo, Uta Kelo dan Lalampa",
      "Jepa dan Kue Kui-kui"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Sulawesi Tengah?",
    "pilihan": [
      "Kanta",
      "Belati Jambia",
      "Kerambit dan Ruduih",
      "Parang Taawu/Mosehe"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Sulawesi Tengah?",
    "pilihan": [
      "Tari Lulo",
      "Tari Pamonte",
      "Tari Sayyang Pattuddu’",
      "Tari Pakarena"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Sulawesi Tengah?",
    "pilihan": [
      "Lado-lado",
      "Lalove",
      "Gambang Kayu",
      "Sarunai"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Digesek"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Sulawesi Tengah?",
    "pilihan": [
      "Tenggang-tenggang Lopi",
      "Cuk Mak Ilang",
      "Palu Ngataku",
      "Tana Wolio"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Sulawesi Tengah?",
    "pilihan": [
      "Ma’badong",
      "Mpae",
      "Sayyang Pattu’du",
      "Randai"
    ],
    "jawaban": 1
  }
],
"73": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Sulawesi Selatan berada?",
    "pilihan": [
      "Kendari",
      "Palopo",
      "Makassar",
      "Parepare"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Sulawesi Selatan?",
    "pilihan": [
      "Baju Batabue dan Kebaya Labuh",
      "Baju Bodo dan Seppa Talung",
      "Baju Rejang",
      "Baju Babu Nggawi"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Sulawesi Selatan?",
    "pilihan": [
      "Rumah Balla Lompoa",
      "Rumah Banua Tada",
      "Rumah Panggung",
      "Rumah Selaso Jatuh Kembar"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Mana saja yang merupakan makanan Sulawesi Selatan?",
    "pilihan": [
      "Mie Sagu dan Konro",
      "Coto Makassar, Pallubasa dan Konro",
      "Sinonggi dan Kabuton",
      "Mie Gomak dan Coto Makassar"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Sulawesi Selatan?",
    "pilihan": [
      "Badik",
      "Telawang",
      "Kerambit dan Ruduih",
      "Parang Taawu/Mosehe"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Sulawesi Selatan?",
    "pilihan": [
      "Tari Lulo",
      "Tari Melinting",
      "Tari Zapin",
      "Tari Pakarena"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Sulawesi Selatan?",
    "pilihan": [
      "Lado-lado",
      "Keso-keso",
      "Gambang Kayu",
      "Sarunai"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Digesek"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Sulawesi Selatan?",
    "pilihan": [
      "Cangget Agung",
      "Cuk Mak Ilang",
      "Anging Mammiri",
      "Tana Wolio"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Sulawesi Selatan?",
    "pilihan": [
      "Ma’badong",
      "Kande-kandea",
      "Cangget",
      "Randai"
    ],
    "jawaban": 0
  }
],
"74": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Sulawesi Tenggara berada?",
    "pilihan": [
      "Kendari",
      "Baubau",
      "Wakatobi",
      "Bombana"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Sulawesi Tenggara?",
    "pilihan": [
      "Baju Batabue",
      "Baju Kebaya Labuh",
      "Baju Rejang",
      "Baju Babu Nggawi"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Sulawesi Tenggara?",
    "pilihan": [
      "Rumah Bubungan Lima",
      "Rumah Banua Tada",
      "Rumah Panggung",
      "Rumah Selaso Jatuh Kembar"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Sulawesi Tenggara?",
    "pilihan": [
      "Mie Sagu",
      "Lemea",
      "Sinonggi dan Kabuton",
      "Mie Gomak"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Sulawesi Tenggara?",
    "pilihan": [
      "Beladau",
      "Telawang",
      "Kerambit dan Ruduih",
      "Parang Taawu/Mosehe"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Sulawesi Tenggara?",
    "pilihan": [
      "Tari Lulo",
      "Tari Melinting",
      "Tari Zapin",
      "Tari Andun"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Sulawesi Tenggara?",
    "pilihan": [
      "Lado-lado",
      "Gambus",
      "Gambang Kayu",
      "Sarunai"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Sulawesi Tenggara?",
    "pilihan": [
      "Cangget Agung",
      "Cuk Mak Ilang",
      "Kampuang Nan Jauh di Mato",
      "Tana Wolio"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Sulawesi Tenggara?",
    "pilihan": [
      "Makyong",
      "Kande-kandea",
      "Cangget",
      "Randai"
    ],
    "jawaban": 1
  }
],
"75": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Gorontalo berada?",
    "pilihan": [
      "Palu",
      "Poso",
      "Gorontalo",
      "Moutong"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional wanita dari Gorontalo?",
    "pilihan": [
      "Baju Bili’u",
      "Baju Bodo",
      "Baju Ngatau",
      "Baju Pamona"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional pria dari Gorontalo?",
    "pilihan": [
      "Baju Bili’u",
      "Baju Bodo",
      "Baju Ngatau",
      "Baju Payunga"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Gorontalo?",
    "pilihan": [
      "Rumah Balla Lompoa",
      "Rumah Tambi",
      "Rumah Dulohupa",
      "Rumah Boyang Adaq"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Mana saja yang merupakan makanan Gorontalo?",
    "pilihan": [
      "Illabulo dan Binte Biluhuta",
      "Coto Makassar, Pallubasa dan Konro",
      "Kaledo, Uta Kelo dan Lalampa",
      "Jepa dan Kue Kui-kui"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Gorontalo?",
    "pilihan": [
      "Wamilo",
      "Belati Jambia",
      "Kerambit dan Ruduih",
      "Parang Taawu/Mosehe"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Gorontalo?",
    "pilihan": [
      "Tari Saronde",
      "Tari Pamonte",
      "Tari Sayyang Pattuddu’",
      "Tari Pakarena"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Gorontalo?",
    "pilihan": [
      "Lado-lado",
      "Lalove",
      "Gambang Kayu",
      "Polopalo"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Gorontalo?",
    "pilihan": [
      "Tenggang-tenggang Lopi",
      "Binthe Biluhuta",
      "Palu Ngataku",
      "Tana Wolio"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Gorontalo?",
    "pilihan": [
      "Ma’badong",
      "Mpae",
      "Sayyang Pattu’du",
      "Tari Saronde"
    ],
    "jawaban": 1
  }
],
"76": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Sulawesi Barat berada?",
    "pilihan": [
      "Mamasa",
      "Mandar",
      "Majene",
      "Mamuju"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional wanita dari Sulawesi Barat?",
    "pilihan": [
      "Baju Batabue",
      "Baju Bodo",
      "Baju Pokko",
      "Baju Babu Nggawi"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional pria dari Sulawesi Barat?",
    "pilihan": [
      "Baju Pattuqduq Towaine",
      "Baju Bodo",
      "Baju Pokko",
      "Baju Babu Nggawi"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Sulawesi Barat?",
    "pilihan": [
      "Rumah Balla Lompoa",
      "Rumah Banua Tada",
      "Rumah Panggung",
      "Rumah Boyang Adaq"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Mana saja yang merupakan makanan Sulawesi Barat?",
    "pilihan": [
      "Mie Sagu dan Konro",
      "Coto Makassar, Pallubasa dan Konro",
      "Sinonggi dan Kabuton",
      "Jepa dan Kue Kui-kui"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Sulawesi Barat?",
    "pilihan": [
      "Badik",
      "Belati Jambia",
      "Kerambit dan Ruduih",
      "Parang Taawu/Mosehe"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Sulawesi Barat?",
    "pilihan": [
      "Tari Lulo",
      "Tari Melinting",
      "Tari Sayyang Pattuddu’",
      "Tari Pakarena"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Sulawesi Barat?",
    "pilihan": [
      "Lado-lado",
      "Talindo",
      "Gambang Kayu",
      "Sarunai"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Sulawesi Barat?",
    "pilihan": [
      "Tenggang-tenggang Lopi",
      "Cuk Mak Ilang",
      "Anging Mammiri",
      "Tana Wolio"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Sulawesi Barat?",
    "pilihan": [
      "Ma’badong",
      "Kande-kandea",
      "Sayyang Pattu’du",
      "Randai"
    ],
    "jawaban": 2
  }
],

// maluku
"81": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Maluku berada?",
    "pilihan": [
      "Manado",
      "Ambon",
      "Kotamobagu",
      "Tomohon"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional dari Maluku?",
    "pilihan": [
      "Baju Bili’u",
      "Baju Bolaang Mongondow",
      "Baju Ngatau",
      "Baju Cele"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Maluku?",
    "pilihan": [
      "Rumah Baileo",
      "Rumah Wale",
      "Rumah Dulohupa",
      "Rumah Boyang Adaq"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Mana saja yang merupakan makanan Maluku?",
    "pilihan": [
      "Illabulo dan Binte Biluhuta",
      "Tinutuan dan Cakalang Fufu",
      "Kaledo, Uta Kelo dan Lalampa",
      "Papeda dan Ikan Kuah Kuning"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Maluku?",
    "pilihan": [
      "Wamilo",
      "Belati Jambia",
      "Parang Salawaku",
      "Perisai"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Maluku?",
    "pilihan": [
      "Tari Maengket",
      "Tari Cakalele",
      "Tari Sayyang Pattuddu’",
      "Tari Pakarena"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Maluku?",
    "pilihan": [
      "Lado-lado",
      "Lalove",
      "Kolintang",
      "Tifa"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Digesek"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Maluku?",
    "pilihan": [
      "Tenggang-tenggang lopi",
      "Binthe Biluhuta",
      "Rasa Sayange",
      "SiPatokaan"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Maluku?",
    "pilihan": [
      "Ma’badong",
      "Mpae",
      "Kabasaran Show",
      "Totobuang"
    ],
    "jawaban": 3
  }
],
"82": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Maluku Utara berada?",
    "pilihan": [
      "Manado",
      "Ambon",
      "Sofifi",
      "Tomohon"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional dari Maluku Utara?",
    "pilihan": [
      "Baju Bili’u",
      "Baju Bolaang Mongondow",
      "Baju Manteren Lamo dan Baju Kimun Gia",
      "Baju Cele"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Maluku Utara?",
    "pilihan": [
      "Rumah Baileo",
      "Rumah Wale",
      "Rumah Dulohupa",
      "Rumah Hibualamo"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Mana saja yang merupakan makanan Maluku Utara?",
    "pilihan": [
      "Gohu Ikan dan Halua Kenari",
      "Tinutuan dan Cakalang Fufu",
      "Kaledo, Uta Kelo dan Lalampa",
      "Papeda dan Ikan Kuah Kuning"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Maluku Utara?",
    "pilihan": [
      "Parang",
      "Belati Jambia",
      "Parang Salawaku",
      "Perisai"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Maluku Utara?",
    "pilihan": [
      "Tari Maengket",
      "Tari Cakalele",
      "Tari Sayyang Pattuddu’",
      "Tari Pakarena"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Maluku Utara?",
    "pilihan": [
      "Lado-lado",
      "Lalove",
      "Arababu",
      "Tifa"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Digesek"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Maluku Utara?",
    "pilihan": [
      "Tenggang-tenggang lopi",
      "Binthe Biluhuta",
      "Rasa Sayange",
      "Borero"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Maluku Utara?",
    "pilihan": [
      "Ma’badong",
      "Bambu Gila",
      "Kabasaran Show",
      "Totobuang"
    ],
    "jawaban": 1
  }
],


"91-A": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Papua berada?",
    "pilihan": [
      "Jayapura",
      "Bengkalis",
      "Pekanbaru",
      "Selat Panjang"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Papua?",
    "pilihan": [
      "Baju Batabue",
      "Baju Koteka",
      "Baju Rejang",
      "Baju Kurung Tanggung"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Papua?",
    "pilihan": [
      "Rumah Bubungan Lima",
      "Rumah Gadang",
      "Rumah Kariwari",
      "Rumah Selaso Jatuh Kembar"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Papua?",
    "pilihan": [
      "Mie Sagu",
      "Lemea",
      "Tempoyak Ikan Patin",
      "Papeda"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Papua?",
    "pilihan": [
      "Beladau",
      "Telawang",
      "Kerambit dan Ruduih",
      "Tombak, Busur dan Panah"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Papua?",
    "pilihan": [
      "Tari Sekapur Sirih",
      "Tari Melinting",
      "Tari Musyoh",
      "Tari Andun"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Papua?",
    "pilihan": [
      "Japen",
      "Tifa",
      "Gambang Kayu",
      "Sarunai"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Papua?",
    "pilihan": [
      "Cangget Agung",
      "Cuk Mak Ilang",
      "Kampuang Nan Jauh di Mato",
      "Yamko Rambe Yamko"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Papua?",
    "pilihan": [
      "Makyong",
      "Tabot",
      "Tari Perang",
      "Randai"
    ],
    "jawaban": 2
  }
],
"91-B": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Papua Pegunungan berada?",
    "pilihan": [
      "Jayapura",
      "Bengkalis",
      "Pekanbaru",
      "Selat Panjang"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Papua Pegunungan?",
    "pilihan": [
      "Baju Batabue",
      "Baju Koteka",
      "Baju Rejang",
      "Baju Kurung Tanggung"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Papua Pegunungan?",
    "pilihan": [
      "Rumah Bubungan Lima",
      "Rumah Honai",
      "Rumah Kariwari",
      "Rumah Selaso Jatuh Kembar"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Papua Pegunungan?",
    "pilihan": [
      "Bubur Sagu",
      "Lemea",
      "Tempoyak Ikan Patin",
      "Papeda"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Papua Pegunungan?",
    "pilihan": [
      "Beladau",
      "Telawang",
      "Kerambit dan Ruduih",
      "Busur dan Panah"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Papua Pegunungan?",
    "pilihan": [
      "Tari Sekapur Sirih",
      "Tari Melinting",
      "Tari Musyoh",
      "Tari Andun"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Papua Pegunungan?",
    "pilihan": [
      "Japen",
      "Tifa",
      "Gambang Kayu",
      "Pikon (kaido)"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Papua Pegunungan?",
    "pilihan": [
      "Jayawijaya Hanorasuok",
      "Cuk Mak Ilang",
      "Kampuang Nan Jauh di Mato",
      "Yamko Rambe Yamko"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Papua Pegunungan?",
    "pilihan": [
      "Makyong",
      "Tabot",
      "Festival Budaya Lembah Baliem",
      "Randai"
    ],
    "jawaban": 2
  }
],
"91-C": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Papua Selatan berada?",
    "pilihan": [
      "Jayapura",
      "Bengkalis",
      "Merauke",
      "Selat Panjang"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Papua Selatan?",
    "pilihan": [
      "Baju Batabue",
      "Baju Koteka",
      "Baju Rejang",
      "Baju Kurung Tanggung"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Papua Selatan?",
    "pilihan": [
      "Rumah Bubungan Lima",
      "Rumah Honai",
      "Rumah Kariwari",
      "Rumah Rumsram"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Papua Selatan?",
    "pilihan": [
      "Bubur Sagu",
      "Sagu Sep (Papeda bakar)",
      "Tempoyak Ikan Patin",
      "Papeda"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Papua Selatan?",
    "pilihan": [
      "Beladau",
      "Telawang",
      "Kerambit dan Ruduih",
      "Busur dan Panah"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Papua Selatan?",
    "pilihan": [
      "Tari Sekapur Sirih",
      "Tari Melinting",
      "Tari Musyoh",
      "Tari Yospan dan Tari Suanggi"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Papua Selatan?",
    "pilihan": [
      "Japen",
      "Tifa",
      "Gambang Kayu",
      "Pikon (kaido)"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Bagaimana cara menggunakan alat musik tersebut?",
    "pilihan": [
      "Dipukul",
      "Ditiup",
      "Dipetik",
      "Ditekan"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Papua Selatan?",
    "pilihan": [
      "Jayawijaya Hanorasuok",
      "E mambo simbo",
      "Kampuang Nan Jauh di Mato",
      "Yamko Rambe Yambo"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Papua Selatan?",
    "pilihan": [
      "Tari Adat Suku Marind",
      "Tabot",
      "Festival Budaya Lembah Baliem",
      "Randai"
    ],
    "jawaban": 0
  }
],
"91-D": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Papua Tengah berada?",
    "pilihan": [
      "Jayapura",
      "Bengkalis",
      "Merauke",
      "Wanggar, Nabire"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Berapakah luas wilayah provinsi Papua Tengah?",
    "pilihan": [
      "661,29 km2",
      "6612,9 km2",
      "66,129 km2",
      "6,6129 km2"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Papua Tengah?",
    "pilihan": [
      "Baju Batabue",
      "Baju Koteka dan Rok Rumbai",
      "Baju Rejang",
      "Baju Kurung Tanggung"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Papua Tengah?",
    "pilihan": [
      "Rumah Emawa",
      "Rumah Honai",
      "Rumah Kariwari",
      "Rumah Rumsram"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Papua Tengah?",
    "pilihan": [
      "Bubur Sagu",
      "Sagu Sep (Papeda bakar)",
      "Tempoyak Ikan Patin",
      "Papeda"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Papua Tengah?",
    "pilihan": [
      "Beladau",
      "Telawang",
      "Kerambit dan Ruduih",
      "Busur dan Panah"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Papua Tengah?",
    "pilihan": [
      "Tari Sekapur Sirih",
      "Tari Sajojo",
      "Tari Musyoh",
      "Tari Yospan dan Tari Suanggi"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Papua Tengah?",
    "pilihan": [
      "Fuu",
      "Tifa",
      "Gambang Kayu",
      "Pikon (kaido)"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Papua Tengah?",
    "pilihan": [
      "Jayawijaya Hanorasuok",
      "E mambo simbo",
      "Akai Bipa Mare",
      "Yamko Rambe Yambo"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Papua Tengah?",
    "pilihan": [
      "Tari Adat Suku Marind",
      "Tari Yospan",
      "Festival Budaya Lembah Baliem",
      "Randai"
    ],
    "jawaban": 1
  }
],

"92-A": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Papua Barat berada?",
    "pilihan": [
      "Jayapura",
      "Manokwari",
      "Merauke",
      "Wanggar, Nabire"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Berapakah luas wilayah provinsi Papua Barat?",
    "pilihan": [
      "140,376 km2",
      "14,0376 km2",
      "1,40376 km2",
      "1403,76 km2"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Papua Barat?",
    "pilihan": [
      "Baju Batabue",
      "Baju Koteka dan Rok Rumbai",
      "Baju Rejang",
      "Baju Kurung Tanggung"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Papua Barat?",
    "pilihan": [
      "Rumah Emawa",
      "Rumah Honai",
      "Rumah Kariwari",
      "Rumah Kaki Seribu"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Papua Barat?",
    "pilihan": [
      "Bubur Sagu",
      "Sagu Sep (Papeda bakar)",
      "Ikan Bakar Manokwari",
      "Papeda"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Papua Barat?",
    "pilihan": [
      "Beladau",
      "Telawang",
      "Kerambit dan Ruduih",
      "Busur dan Panah"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Papua Barat?",
    "pilihan": [
      "Tari Tumbu Tanah",
      "Tari Sajojo",
      "Tari Musyoh",
      "Tari Yospan dan Tari Suanggi"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Papua Barat?",
    "pilihan": [
      "Fuu",
      "Guoto",
      "Gambang Kayu",
      "Pikon (kaido)"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Papua Barat?",
    "pilihan": [
      "Jayawijaya Hanorasuok",
      "E mambo simbo",
      "Akai Bipa Mare",
      "Apuse"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Papua Barat?",
    "pilihan": [
      "Tari Adat Suku Marind",
      "Tari Yospan",
      "Festival Budaya Lembah Baliem",
      "Tarian Perang"
    ],
    "jawaban": 3
  }
],
"92-B": [
  {
    "pertanyaan": "Dimana ibu kota provinsi Papua Barat Daya berada?",
    "pilihan": [
      "Jayapura",
      "Manokwari",
      "Merauke",
      "Sorong"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Berapakah luas wilayah provinsi Papua Barat Daya?",
    "pilihan": [
      "3912,3 km2",
      "391,23 km2",
      "39,123 km2",
      "3,9123 km2"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama pakaian adat tradisional Papua Barat Daya?",
    "pilihan": [
      "Baju Batabue",
      "Baju Koteka dan Rok Rumbai",
      "Rok Rumbai dan Hiasan Kepala Cendrawasih",
      "Baju Kurung Tanggung"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Apa nama rumah adat daerah Papua Barat Daya?",
    "pilihan": [
      "Rumah Emawa",
      "Rumah Honai",
      "Rumah Kariwari",
      "Rumah Kaki Seribu (Arfak)"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan makanan Papua Barat Daya?",
    "pilihan": [
      "Bubur Sagu",
      "Sagu Sep (Papeda bakar)",
      "Ikan Bakar Manokwari",
      "Papeda"
    ],
    "jawaban": 3
  },
  {
    "pertanyaan": "Manakah yang merupakan senjata dari Papua Barat Daya?",
    "pilihan": [
      "Parang Papua",
      "Telawang",
      "Kerambit dan Ruduih",
      "Busur dan Panah"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah tarian yang berasal dari Papua Barat Daya?",
    "pilihan": [
      "Tari Tumbu Tanah",
      "Tari Sajojo",
      "Tari Musyoh",
      "Tari Yospan dan Tari Suanggi"
    ],
    "jawaban": 1
  },
  {
    "pertanyaan": "Manakah yang merupakan alat musik daerah Papua Barat Daya?",
    "pilihan": [
      "Fuu",
      "Guoto",
      "Triton",
      "Pikon (kaido)"
    ],
    "jawaban": 2
  },
  {
    "pertanyaan": "Manakah lagu daerah yang berasal dari Papua Barat Daya?",
    "pilihan": [
      "Sajojo",
      "E mambo simbo",
      "Akai Bipa Mare",
      "Apuse"
    ],
    "jawaban": 0
  },
  {
    "pertanyaan": "Manakah yang merupakan seni pertunjukan Papua Barat Daya?",
    "pilihan": [
      "Tari Adat Suku Marind",
      "Tari Yospan",
      "Festival Budaya Lembah Baliem",
      "Tarian Perang Papua"
    ],
    "jawaban": 3
  }
]








};

export default function ProvinceDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const province = provincesData[id];

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const quizData = provinceQuizzes[id] || []; 

  useEffect(() => {
    if (id && provinceSongs[id]) {
      const audio = audioRef.current;
      audio.src = provinceSongs[id];
      audio.play().then(() => setIsPlaying(true)).catch(e => {
        console.log("Audio play error:", e);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    };
  }, [id]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(e => {
        console.log("Audio play error:", e);
      });
    }
  };

  const handleLinkClick = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };


  if (!province) {
    return (
      <div className="p-8 text-center font-sans">
        <h1 className="text-2xl font-bold">Provinsi tidak ditemukan</h1>
      </div>
    );
  }

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return; // cegah klik ulang

    setSelectedAnswer(index);
    if (index === quizData[quizIndex].jawaban) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (quizIndex + 1 < quizData.length) {
        setQuizIndex(quizIndex + 1);
        setSelectedAnswer(null);
      } else {
        setIsFinished(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setQuizStarted(false);
  };

  return (
    <>
      <main className="max-w-4xl mx-auto p-6 pb-[88px] font-sans relative">
        <button
          onClick={() => router.back()}
          className="mb-6 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          ← Kembali
        </button>

        <audio ref={audioRef} preload="auto" loop />

        {/* Header provinsi + tombol lagu */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h1 className="text-4xl font-bold text-yellow-900">{province.name}</h1>

          <button
            onClick={togglePlayPause}
            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
              isPlaying
                ? "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400"
                : "bg-yellow-400 hover:bg-yellow-500 text-yellow-900 focus:ring-yellow-300"
            }`}
          >
            {isPlaying ? "⏸ Pause Lagu" : "▶️ Play Lagu"}
          </button>
        </div>

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
            <h2 className="text-2xl font-semibold mb-6 text-yellow-800 border-b border-yellow-300 pb-2">
              {culture.name}
            </h2>
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
                      onClick={handleLinkClick} 
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

        {/* QUIZ Section */}
        {quizData.length > 0 ? (
          <section className="mt-16 mb-24 text-center bg-yellow-50 p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-yellow-800 mb-6">🎯 Kuis Pengetahuan</h2>

            {!quizStarted ? (
              <div>
                <p className="text-lg mb-4 text-gray-700">
                  Uji pengetahuanmu tentang {province.name}! Klik tombol di bawah ini untuk mulai kuis.
                </p>
                <button
                  onClick={() => setQuizStarted(true)}
                  className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
                >
                  🚀 Ayo Mulai
                </button>
              </div>
            ) : isFinished ? (
              <div>
                <p className="text-lg mb-4">
                  Kamu menjawab benar <span className="font-bold">{score}</span> dari{" "}
                  {quizData.length} pertanyaan!
                </p>
                <button
                  onClick={restartQuiz}
                  className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full shadow font-semibold"
                >
                  Ulangi Kuis 🔁
                </button>
              </div>
            ) : (
              <div>
                <p className="text-lg font-semibold mb-6">
                  {quizIndex + 1}. {quizData[quizIndex].pertanyaan}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  {quizData[quizIndex].pilihan.map((option, idx) => {
                    const isCorrect =
                      selectedAnswer !== null && idx === quizData[quizIndex].jawaban;
                    const isWrong =
                      selectedAnswer === idx && idx !== quizData[quizIndex].jawaban;

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={selectedAnswer !== null}
                        className={`p-3 rounded-lg text-base transition-all duration-200 border
                          ${
                            selectedAnswer === null
                              ? "bg-white hover:bg-yellow-100 border-yellow-300"
                              : isCorrect
                              ? "bg-green-200 border-green-400"
                              : isWrong
                              ? "bg-red-200 border-red-400"
                              : "bg-gray-100 border-gray-300"
                          }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        ) : (
          <div className="text-center mt-16 mb-24 text-gray-600">
            <p>❓ Kuis belum tersedia untuk provinsi ini.</p>
          </div>
        )}

      </main>

      <BottomNav />
    </>
  );
}