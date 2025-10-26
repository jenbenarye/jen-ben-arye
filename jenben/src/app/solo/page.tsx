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
    country: "argentina",
    year: "2024",
    blurb: "applied artistic styles to images using cnns. pytorch + real-time optimization.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  },
  {
    country: "chile",
    year: "2024",
    blurb: "trained on 1m+ tweets. 94% accuracy with transformers.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  },
  {
    country: "bolivia",
    year: "2023",
    blurb: "rl agent for robot navigation. ppo in simulated environments.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  },
  {
    country: "ecuador",
    year: "2023",
    blurb: "anomaly detection for equipment failures. reduced downtime 35%.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  },
  {
    country: "galapagos islands",
    year: "2023",
    blurb: "anomaly detection for equipment failures. reduced downtime 35%.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  },
  {
    country: "colombia",
    year: "2023",
    blurb: "anomaly detection for equipment failures. reduced downtime 35%.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  },
  {
    country: "mexico",
    year: "2023",
    blurb: "anomaly detection for equipment failures. reduced downtime 35%.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  },
  {
    country: "guatemala",
    year: "2023",
    blurb: "anomaly detection for equipment failures. reduced downtime 35%.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  },
  {
    country: "nicaragua",
    year: "2023",
    blurb: "anomaly detection for equipment failures. reduced downtime 35%.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  },
  {
    country: "thailand",
    year: "2023",
    blurb: "anomaly detection for equipment failures. reduced downtime 35%.",
    images: ["/travel/argentina/1.png", "/travel/argentina/2.png", ],
  }
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
        and behind the lens with my Nikon D1700.

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
