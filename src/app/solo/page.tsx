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
        "/travel/argentina/3.jpg",
        "/travel/argentina/1.jpg",
        "/travel/argentina/2.jpg",
        "/travel/argentina/4.jpg",
     ],
  },
  {
    country: "Chile",
    year: "2022",
    blurb: "Hitchhiked the Carretera Austral. Skydived over a live volcano in Pucón. Trekked Torres del Paine.",
    images: [
        "/travel/chile/1.jpg",
        "/travel/chile/2.jpg",
        "/travel/chile/3.jpg",
        "/travel/chile/4.jpg",
        "/travel/chile/5.jpg",
        "/travel/chile/6.jpg",
        "/travel/chile/7.jpg",
        "/travel/chile/8.jpg",
        "/travel/chile/9.jpg",
        "/travel/chile/10.jpg",
        "/travel/chile/11.jpg",
        "/travel/chile/12.jpg",
        "/travel/chile/13.jpg",
        "/travel/chile/14.jpg",
        "/travel/chile/15.jpg",
    ],
  },
  {
    country: "Bolivia",
    year: "2022",
    blurb: "Looks like God took hard drugs before painting the world. White salt flats, a blood-red lake full of pink flamingos, and a volcano behind. A 5,350 m climb. A week in the Amazon Jungle. 36 hr bus rides w/o signal.",
    images: [
        "/travel/bolivia/1.jpg",
        "/travel/bolivia/2.jpg",
        "/travel/bolivia/3.jpg",
        "/travel/bolivia/4.jpg",
        "/travel/bolivia/5.jpg",
        "/travel/bolivia/6.jpg",
        "/travel/bolivia/7.jpg",
        "/travel/bolivia/8.jpg",
        "/travel/bolivia/9.jpg",
        "/travel/bolivia/10.jpg",
        "/travel/bolivia/11.jpg",
        "/travel/bolivia/12.jpg",
        "/travel/bolivia/13.jpg",
        "/travel/bolivia/14.jpg",
        "/travel/bolivia/15.jpg",
        "/travel/bolivia/16.jpg",
    ],
  },
  {
    country: "Ecuador",
    year: "2022",
    blurb: "Llamas, coconut and fog.",
    images: [
        "/travel/ecuador/2.jpg",
        "/travel/ecuador/1.jpg",
        "/travel/ecuador/3.jpg",
        "/travel/ecuador/4.jpg",
        "/travel/ecuador/5.jpg",
        "/travel/ecuador/6.jpg",
        "/travel/ecuador/7.jpg",
        "/travel/ecuador/8.jpg",
    ],
  },
  {
    country: "Galapagos Islands",
    year: "2022",
    blurb: "Spent week on a diving boat scuba diving with sharks. Five dives a day, felt like bootcamp.",
    images: [
        "/travel/galapagos/1.jpg",
        "/travel/galapagos/2.jpg",
        "/travel/galapagos/3.jpg",
        "/travel/galapagos/4.jpg",
        "/travel/galapagos/5.jpg",
    ],  },
  {
    country: "Colombia",
    year: "2022",
    blurb: "Five-day mission to a remote village. Cave falls 250m. I was #38 to go down.",
    images: [
        "/travel/colombia/1.jpg",
        "/travel/colombia/2.jpg",
        "/travel/colombia/3.jpg",
        "/travel/colombia/4.jpg",
        "/travel/colombia/6.jpg",
    ],
  },
  {
    country: "Mexico",
    year: "2025",
    blurb: "1.5 months. Oaxaca - markets, food, colors, smells, chaos. Surfed in Chacahua, slept in a hammock, chickens everywhere.",
    images: [
        "/travel/mexico/1.JPG",
        "/travel/mexico/2.JPG",
        "/travel/mexico/3.JPG",
        "/travel/mexico/4.JPG",
        "/travel/mexico/5.JPG",
        "/travel/mexico/6.JPG",
        "/travel/mexico/7.JPG",
        "/travel/mexico/8.JPG",
        "/travel/mexico/9.JPG",
    ],
  },
  {
    country: "Guatemala",
    year: "2024",
    blurb: "Hiked up Volcán Acatenango to watch Volcán de Fuego erupt. My camera broke (and so did my heart).",
    images: [
        "/travel/guatemala/1.JPG",
        "/travel/guatemala/2.JPG",
        "/travel/guatemala/3.JPG",
        "/travel/guatemala/4.JPG",
        "/travel/guatemala/5.JPG",
        "/travel/guatemala/6.JPG",
        "/travel/guatemala/8.JPG",
    ],
  },
  {
    country: "Thailand",
    year: "2025",
    blurb: "Spent 1.5 months in Thailand. Dived in Koh Tao. Lived with a long neck tribe. Played with monkeys.",
    images: [
        "/travel/thailand/1.JPG",
        "/travel/thailand/2.JPG",
        "/travel/thailand/3.JPG",
        "/travel/thailand/4.JPG",
        "/travel/thailand/5.JPG",
        "/travel/thailand/6.JPG",
        "/travel/thailand/7.JPG",
        "/travel/thailand/8.JPG",
        "/travel/thailand/9.JPG",
        ],
  },
  {
    country: "Hong Kong",
    year: "2024",
    blurb: "A detour gone right: from a failed Vietnam plan to noodles and city buzz in Hong Kong.",
    images: ["/travel/hongkong/1.JPG", "/travel/hongkong/2.JPG", "/travel/hongkong/3.JPG", "/travel/hongkong/4.JPG","/travel/hongkong/5.JPG",],
  },
  {
    country: "Nicaragua",
    year: "2025",
    blurb: "Volcano boarding down Cerro Negro (still have ash in my teeth).",
    images: ["/travel/nicaragua/1.JPG", "/travel/nicaragua/2.JPG", "/travel/nicaragua/3.JPG","/travel/nicaragua/5.JPG",],
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
