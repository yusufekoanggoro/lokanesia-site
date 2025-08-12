'use client';

import { useEffect, useRef } from "react";
import { useRouter, useParams } from 'next/navigation';
import BottomNav from '../../components/BottomNav';

const provincesData = {
  "11": {
    name: "Aceh",
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
  "12": {
    name: "Sumatera Utara",
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
  "13": {
    name: "Sumatera Barat",
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
  "14": {
    name: "Riau",
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
  "15": {
    name: "Jambi",
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
  "16": {
    name: "Sumatera Selatan",
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
  "20": {
    name: "Kepulauan Riau",
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
  "33": {
    name: "Jawa Tengah",
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
  "34": {
    name: "Daerah Istimewa Yogyakarta",
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
  "35": {
    name: "Jawa Timur",
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
  "36": {
    name: "Banten",
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
  // "32": "/music/jawa_barat.mp3",
  // "33": "/music/jawa_tengah.mp3",
  // "33": "/music/papua_barat_daya.mp3",
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
