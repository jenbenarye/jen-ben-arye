// jenben/src/app/solo/page.tsx
"use client";
import { Box, Flex, Text, SimpleGrid, IconButton} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Image from "next/image";
import { useState } from "react";

type Destination = {
    country: string;
    year: string;
    blurb: string;
    images: string[];
  };

const destinations: Destination[] = [
  {
    country: "Argentina",
    year: "2022",
    blurb: "Landed in Buenos Aires two weeks after Messi's win. First time traveling solo, 8 months ahead. I was terrified.",
    images: [
        "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700728/IMG_5581_jxcgxv.jpg",
        "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700695/IMG_5594_gf39rl.jpg",
        "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700694/IMG_5595_bctkki.jpg",
        "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700692/IMG_5597_tbi5oz.jpg"
     ],
  },
  {
    country: "Chile",
    year: "2022",
    blurb: "Hitchhiked the Carretera Austral. Skydived over a live volcano in Pucón. Trekked Torres del Paine.",
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700604/IMG_5600_ezd03b.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700605/IMG_5599_soql7r.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700596/IMG_5610_yfsbx2.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700600/IMG_5606_nf8ugl.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700598/IMG_5608_zniycu.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700588/IMG_5619_clktfr.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700599/IMG_5607_dkyuk3.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700594/IMG_5613_eu14zz.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700606/IMG_5598_uooi4z.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700595/IMG_5611_ldcizh.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700590/IMG_5617_hhtbdz.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700593/IMG_5615_xefo5l.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700589/IMG_5618_b1gi3l.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700602/IMG_5603_epikgq.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700601/IMG_5605_py6km6.jpg",
    ],
  },
  {
    country: "Bolivia",
    year: "2022",
    blurb: "Looks like God took hard drugs before painting the world. White salt flats, a blood-red lake full of pink flamingos, and a volcano behind. A 5,350 m climb. A week in the Amazon Jungle. 36 hr bus rides w/o signal.",
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700506/IMG_5633_kgrztc.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700497/IMG_5647_wndqv0.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700494/IMG_5652_kpcmft.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700496/IMG_5648_jjhusx.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700513/IMG_5625_tsxxd9.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700495/IMG_5649_agzpbo.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700511/IMG_5627_altous.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700507/IMG_5632_ur1jez.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700508/IMG_5631_mseaup.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700503/IMG_5639_vdch4s.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700505/IMG_5634_t18v3l.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700498/IMG_5645_okdvd0.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700501/IMG_5642_q6lkjd.jpg",




    ],
  },
  {
    country: "Ecuador",
    year: "2022",
    blurb: "Llamas, coconut and fog.",
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700368/IMG_5665_pabjzo.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700367/IMG_5666_zympgq.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700365/IMG_5668_gn3g64.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700366/IMG_5667_hxtsie.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700363/IMG_5670_miyf02.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700364/IMG_5669_qphhhl.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700362/IMG_5672_buhxmw.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700363/IMG_5671_thevmo.jpg",
    ],
  },
  {
    country: "Galapagos Islands",
    year: "2022",
    blurb: "Spent week on a diving boat scuba diving with sharks. Five dives a day, felt like bootcamp.",
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700033/IMG_5675_y6duta.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700032/IMG_5686_tjvtzk.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700034/IMG_5674_wwabkv.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700034/IMG_5673_nrumxe.jpg",
    ],
  },
  {
    country: "Colombia",
    year: "2022",
    blurb: "Five-day mission to a remote village. Cave falls 250m. I was #38 to go down.",
    images: [
      "",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700072/IMG_5680_wwu0ua.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700070/IMG_5684_igd5ou.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700073/IMG_5678_yf2ytw.jpg",
    ],
  },
  {
    country: "Mexico",
    year: "2025",
    blurb: "1.5 months. Oaxaca - markets, food, colors, smells, chaos. Surfed in Chacahua, slept in a hammock, chickens everywhere.",
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700728/IMG_5581_jxcgxv.jpg",
    ],
  },
  {
    country: "Guatemala",
    year: "2024",
    blurb: "Hiked up Volcán Acatenango to watch Volcán de Fuego erupt. My camera broke (and so did my heart).",
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761700728/IMG_5581_jxcgxv.jpg",

    ],
  },
  {
    country: "Thailand",
    year: "2025",
    blurb: "Spent 1.5 months in Thailand. Dived in Koh Tao. Lived with a long neck tribe. Played with monkeys.",
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761699960/IMG_5690_rr2eeu.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761699961/IMG_5689_kytolu.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761699962/IMG_5687_ka4gtj.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761699961/IMG_5688_wpiayh.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761699960/IMG_5691_vqtpcg.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761699959/IMG_5692_sgnodh.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761699959/IMG_5693_km2hf2.jpg",
        ],
  },
  {
    country: "Hong Kong",
    year: "2024",
    blurb: "A detour gone right: from a failed Vietnam plan to noodles and city buzz in Hong Kong.",
    images: [],
  },
  {
    country: "Nicaragua",
    year: "2025",
    blurb: "Volcano boarding down Cerro Negro (still have ash in my teeth).",
    images: [],
  },
];


function DestinationCard({ country, year, blurb, images }: Destination) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <Box bg="#fff" borderRadius="16px" border="1px solid #e5e5e5" overflow="hidden" transition="box-shadow 0.2s" _hover={{ boxShadow: "lg" }}>
      <Box position="relative" height="240px">
        <Image src={images[index]} alt={`${country} travel photo ${index + 1}`} fill style={{ objectFit: "cover" }} />
        {total > 1 && (
          <>
            <IconButton aria-label="previous photo" position="absolute" left="8px" top="50%" transform="translateY(-50%)" onClick={prev} variant="solid" size="sm"><ChevronLeftIcon /></IconButton>
            <IconButton aria-label="next photo" position="absolute" right="8px" top="50%" transform="translateY(-50%)" onClick={next} variant="solid" size="sm"><ChevronRightIcon /></IconButton>
          </>
        )}
      </Box>
      <Box p={6}>
        <Flex justify="space-between" align="baseline">
          <Text fontSize="22px" color="#2d2d2d">{country}</Text>
          <Text fontSize="15px" color="#7c7c7c">{year}</Text>
        </Flex>
        <Text mt={3} fontSize="16px" color="#585858" lineHeight="1.6">{blurb}</Text>
      </Box>
    </Box>
  );
}


export default function SoloPage() {
  return (
    <Box
      bg="#f2f2f2"
      minH="100vh"
      px={{ base: 8, md: 20 }}
      py={{ base: 16, md: 24 }}
      fontFamily='"JetBrains Mono", monospace'
      color="#3e3e3e"
    >
      <Box maxW="760px" margin="0 auto">
        <Text fontSize="15px" color="#7c7c7c">// solo</Text>
        <Text mt={2} fontSize="20px" color="#6a6a6a">
        I’ve spent more than a year wandering on my own.
        It was the sharpest learning curve I’ve ever taken.
        I spent time living in India, shared a home with three adopted brothers
        from Ethiopia and Russia. I split time beneath the surface as a divemaster
        and behind the lens with my Nikon D7100.

        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} mt={20}>
            {destinations.map((destination) => (
                <DestinationCard key={destination.country} {...destination} />
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
