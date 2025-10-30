// jenben/src/app/solo/page.tsx
"use client";
import { Box, Flex, Text, SimpleGrid, IconButton, Button} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {RiArrowLeftLine} from "react-icons/ri"

import Image from "next/image";
import NextLink from "next/link";
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
    blurb: "Landed in Buenos Aires two weeks after Messi's win. First time traveling solo, eight months to go.",
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
    blurb: "White salt flats, a blood-red lake full of pink flamingos, and a volcano behind. A 5,350 m climb. A week in the Amazon Jungle. 36 hr bus rides w/o signal.",
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
    blurb: "Spent a week on a dive boat SCUBA diving with sharks. Five dives per day.",
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
    blurb: "Five-day mission to a remote village. Rappelled 250m into a cave. I was the 38th person ever to go down.",
    images: [
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
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706152/4E32B9E6-5B1E-4938-83FE-4E9908190321_tlad54.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706152/35D2FD19-FF93-4A23-BCD9-8257864ACFDA_q5k99t.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706151/64E77E91-1171-4087-B9A9-AD19A9EA4F93_vlzehk.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706151/DEF8A65A-8B0F-4873-9E74-648061DCADEA_htcyf2.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706155/5BF64CA6-6093-4A25-A829-84CACBED9343_ippqwt.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706148/874C03FB-A152-4047-8F9B-9F3105A0A340_cwgxqc.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706147/F3F21A9C-D2CB-4416-B4A9-BF94F862A630_tqpsok.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706147/25355E13-5A4B-4A71-A01B-8616501D91E6_z8yutk.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706147/5C59DE6A-4629-493E-8DDF-51296FBC6455_r3jjma.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706147/BE399BB8-C475-452F-8108-A5BD365A5C66_j81pdy.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706151/7C6CF072-299E-40FB-B0DF-6E8DF4EA993C_fe8ude.jpg",

    ],
  },
  {
    country: "Guatemala",
    year: "2024",
    blurb: "Hiked up Volcán Acatenango to watch Volcán de Fuego erupt. My camera broke (and so did my heart).",
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761705780/0573D390-F5EF-4BD9-94CF-3E00B273D8C5_upnkdk.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761705779/CA0CA14C-12C4-4241-805B-67D96D156D5A_ubzvup.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761705779/2CCBD668-06FB-46F8-A8D6-79C29878BB0B_q4fkpb.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706466/4C2F1ED0-B1AA-4089-92AC-E29D2469040F_hxr1kz.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706466/6A675203-40C6-46FC-B486-AB7578EEB121_yk2uhg.jpg",
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
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706582/B046A6DE-02D4-4272-9D74-3D1073A2B080_dqgizc.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706583/C3F3DC98-2DDC-4447-9F75-E4BCB6751B51_pjbxhz.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706582/E2E7DDCB-9A24-4A45-AE04-55F0993F86FA_xgztrp.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761706583/7447104B-E5AB-4C3B-B1A5-C1263397C426_qzpagn.jpg",
    ],
  },
  {
    country: "Nicaragua",
    year: "2025",
    blurb: "Volcano boarding down Cerro Negro (still have ash in my teeth).",
    images: [
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761705779/AF2658FD-E7BA-4B3F-9E9B-E5F022CC8FC4_rfw6zk.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761705780/A35F3083-F9BD-4F0B-8B89-71F3D9DE7C75_uxpxib.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761705779/CD153FBC-D4E0-4764-ADE9-7778FEB2F514_j5hika.jpg",
      "https://res.cloudinary.com/dv8rcbg2n/image/upload/v1761705780/BA9427C8-7784-4236-B76A-8843A20BD939_d21wag.jpg",
    ],
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
      <Box position="fixed" top="80px" left="120px">
        <Button colorPalette='white' variant="surface" asChild>
          <a href="/">Home <RiArrowLeftLine/></a>
        </Button>
      </Box>


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
