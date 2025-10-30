// jenben/src/app/projects/page.tsx
import { Box, Flex, Text, VStack, HStack, Tag } from "@chakra-ui/react";

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
];

export default function ProjectsPage() {
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
        <Text fontSize="15px" color="#7c7c7c">// projects</Text>
        <Text mt={2} fontSize="20px" color="#6a6a6a">
          Things I've built
        </Text>

        <VStack align="stretch" gap={14} mt={16}>
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
                transition="background-color 0.2s ease"
              />
              <Box flex="1">
                <Flex justify="space-between" align="flex-start">
                  <Text fontSize="24px" color="#2d2d2d">
                    {title}
                  </Text>
                  <Text fontSize="16px" color="#7c7c7c">
                    {year}
                  </Text>
                </Flex>
                <Text mt={3} fontSize="17px" color="#2d2d2d" lineHeight="1.6">
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
