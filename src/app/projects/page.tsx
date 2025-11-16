// jenben/src/app/projects/page.tsx
import { Box, Flex, Text, VStack, HStack, Tag, Button, IconButton} from "@chakra-ui/react";
import {RiArrowLeftLine} from "react-icons/ri"
import Link from "next/link";


const projects = [
  {
    title: "autoregressive-diffusion",
    year: "2025",
    blurb: "Worked on autoregressive diffusion for video generation @ Decart.",
    tags: ["cv", "diffusion"],
  },
  {
    title: "multilingual-rlhf",
    year: "2024",
    blurb: "Automated RLHF pipelines to align multilingual LLMs w/ live human feedback @ MIT CSAIL. Advised by Prof. Jacob Andreas and Prof. Leshem Choshen.",
    tags: ["rlhf", "llm", "nlp"],
  },
  {
    title: "adversarial-feedback",
    year: "2025",
    blurb: "Studying how adversarial preference signals shift model alignment + behavior; stress-testing LLMs under adversarial feedback.",
    tags: ["alignment", "eval", "rlhf"],
  },
  {
    title: "jenbenarye.com",
    year: "2025",
    blurb: "You're here.",
    tags: ["nextjs", "ui", "react"],
  },
];

export default function ProjectsPage() {
  return (
    <Box
      backgroundColor="#f2f2f2"
      minH="100vh"
      px={{ base: 8, md: 20 }}
      py={{ base: 16, md: 24 }}
      fontFamily='"JetBrains Mono", monospace'
      position="relative"
    >
      <Link href="/">
        <IconButton
          aria-label="back to home"
          position="fixed"
          left={{ base: 4, md: 8 }}
          top={{ base: 4, md: 8 }}
          variant="ghost"
          color="#666"
          _hover={{ color: "#000", bg: "rgba(0,0,0,0.05)" }}
          size="md"
          borderRadius="50%"
          zIndex={10}
        >
          <RiArrowLeftLine />
        </IconButton>
      </Link>

      <Box maxW="820px" margin="0 auto" paddingTop={{ base:"3rem", md:"0rem" }}>
        <Text fontSize={{ base:"1rem", md:"1.1rem" }} color="#7c7c7c">// projects</Text>
        <Text mt={2} fontSize={{ base:'1rem', md:'1.1rem' }} color="#6a6a6a" paddingTop={{ base:'0.3rem', md:'0.5rem' }}>
          Things I've built
        </Text>

        <VStack align="stretch" gap={14} mt={{ base: 6, md: 16 }}>
          {projects.map(({ title, year, blurb, tags }) => (
            <Flex
                key={title}
                align="stretch"
                gap={12}
                role="group"
                _hover={{
                    "& .project-bar": {
                        backgroundColor: "#000",
                    }
                }}
            >
              <Box
                className="project-bar"
                w="2px"
                bg="rgba(0,0,0,0.12)"
                borderRadius="full"
                mt={2}
                mb={2}
                mr={{base:-4, md:4}}
                transition="background-color 0.2s ease"
              />
              <Box flex="1">
                <Flex justify="space-between" align="flex-start">
                  <Text fontSize={{ base:"1.5rem", md:"1.8rem" }} color="#2d2d2d">
                    {title}
                  </Text>
                  <Text fontSize={{ base:"1rem", md:"1.1rem" }} color="#7c7c7c" display={{ base: 'none', md: 'block' }}>
                    {year}
                  </Text>
                </Flex>
                <Text mt={3} fontSize={{ base:"1rem", md:"1.1rem" }} color="#2d2d2d" lineHeight="1.6">
                  {blurb}
                </Text>
                <HStack gap={3} mt={4}>
                  {tags.map((tag) => (
                    <Tag.Root
                      key={tag}
                      px={3}
                      py={1}
                      bg="transparent"
                      border="1px solid rgba(0,0,0,0.2)"
                      color="#555"
                      borderRadius="full"
                      fontWeight="normal"
                      textTransform="lowercase"
                      letterSpacing="0.05em"
                      fontSize={{ base:"1rem", md:"1.2rem" }}
                    >
                      <Tag.Label>{tag}</Tag.Label>
                    </Tag.Root>
                  ))}
                </HStack>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
