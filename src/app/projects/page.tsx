// jenben/src/app/projects/page.tsx
"use client";
import { Box, Flex, Text, VStack, HStack, Tag, Link } from "@chakra-ui/react";
import Image from "next/image";

type Project = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  links?: { label: string; url: string }[];
  image?: string;
};

const projects: Project[] = [
  {
    title: "autoregressive-diffusion",
    date: "2025",
    description:
      "Worked on autoregressive diffusion for video generation @ Decart.",
    tags: ["computer vision", "diffusion", "data"],
    links: [],
    image: undefined,
  },
  {
    title: "open-source-rlhf",
    date: "2024",
    description:
      "Automated RLHF pipelines to align LLMs w/ live human feedback @ MIT CSAIL. Advised by Prof. Jacob Andreas and Prof. Leshem Choshen. In collaboration with Cohere and Hugging Face.",
    tags: ["rlhf", "llm", "nlp"],
    links: [],
    image: undefined,
  },
  {
    title: "reward-hacking",
    date: "2025",
    description:
      "Studied how CoT monitoring awareness effects reward hacking behavior in coding agents.",
    tags: ["agents", "reward hacking", "CoT"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/jenbenarye/reward-hacking-CoT",
      },
      // {
      //   label: "PDF",
      //   url: "https://github.com/jenbenarye/reward-hacking-CoT",
      // },
    ],
    image: undefined,
  },
  {
    title: "adversarial-feedback",
    date: "2025",
    description:
      "Researched how adversarial preference signals shift model alignment + behavior; stress-testing LLMs under adversarial feedback.",
    tags: ["alignment", "eval", "rlhf"],
    links: [
      // {
      //   label: "GitHub",
      //   url: "https://github.com/jenbenarye/reward-hacking-CoT",
      // },
      // {
      //   label: "PDF",
      //   url: "https://github.com/jenbenarye/reward-hacking-CoT",
      // },
    ],
    image: undefined,
  },
  {
    title: "jenbenarye.com",
    date: "2025",
    description: "You're here.",
    tags: ["nextjs", "ui", "react"],
    links: [],
    image: undefined,
  },
];

function ProjectCard({
  title,
  date,
  description,
  tags,
  links,
  image,
}: Project) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={8}
      py={8}
      borderBottom="1px solid rgba(0,0,0,0.1)"
      _last={{ borderBottom: "none" }}
    >
      {/* Left side - Text content */}
      <Box flex="1">
        <Text
          fontSize={{ base: "1.5rem", md: "1.8rem" }}
          color="#2d2d2d"
          fontWeight="600"
          mb={3}
        >
          {title}
        </Text>

        {/* Date and Tags */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={3}
          mb={4}
          align={{ base: "flex-start", md: "center" }}
        >
          <Text fontSize="1rem" color="#666">
            {date}
          </Text>
          <HStack gap={2} flexWrap="wrap">
            {tags.map((tag) => (
              <Tag.Root
                key={tag}
                px={3}
                py={1}
                bg="rgba(0,0,0,0.08)"
                border="none"
                color="#666"
                borderRadius="full"
                fontWeight="normal"
                textTransform="lowercase"
                fontSize="0.875rem"
              >
                <Tag.Label>{tag}</Tag.Label>
              </Tag.Root>
            ))}
          </HStack>
        </Flex>

        {/* Description */}
        <Text fontSize="1rem" color="#666" lineHeight="1.6" mb={4}>
          {description}
        </Text>

        {/* Links */}
        {links && links.length > 0 && (
          <Flex gap={4} mt={4}>
            <Text fontSize="0.875rem" color="#666">
              Links:
            </Text>
            <HStack gap={3}>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="0.875rem"
                  color="#666"
                  _hover={{ textDecoration: "underline" }}
                  _focus={{ outline: "none" }}
                  outline="none"
                >
                  {link.label}
                </Link>
              ))}
            </HStack>
          </Flex>
        )}
      </Box>

      {/* Right side - Image */}
      {image && (
        <Box
          width={{ base: "100%", md: "400px" }}
          height={{ base: "250px", md: "250px" }}
          position="relative"
          borderRadius="0.5rem"
          overflow="hidden"
          flexShrink={0}
        >
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </Box>
      )}
    </Flex>
  );
}

export default function ProjectsPage() {
  return (
    <Box
      backgroundColor="#f2f2f2"
      minH="100vh"
      px={{ base: "2rem", md: "40rem" }}
      py={{ base: 16, md: 24 }}
      fontFamily='"JetBrains Mono", monospace'
      position="relative"
    >
      <Box
        maxW="1200px"
        margin="0 auto"
        paddingTop={{ base: "3rem", md: "2rem" }}
        px={{ base: 4, md: 8 }}
      >
        <VStack align="stretch" gap={0}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
