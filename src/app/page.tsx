import { Text, Stack, Link, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <Box
      padding={{ base: "3rem 1.5rem", md: "6rem 4rem" }}
      backgroundColor="#f2f2f2"
      color="#4a4a4a"
      minHeight="100vh"
      fontFamily='"JetBrains Mono", monospace'
      lineHeight="1.4"
      position="relative"
      display="flex"
      flexDirection="column"
    >
      {/* Main Content */}
      <div
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "10rem 1.5rem 4rem 1.5rem",
          flex: 1,
        }}
      >
        <Stack gap={10}>
          {/* Header */}
          <Box maxW="760px">
            <Text
              fontSize={{ base: "1.5rem", md: "2.8rem" }}
              color="#333"
              lineHeight="1.3"
            >
              I study CS and AI at MIT. Previously worked at Decart, MIT CSAIL,
              and IDF's 8200.
            </Text>
          </Box>

          {/* About Section */}
          <div>
            <Text
              fontSize={{ base: "1rem", md: "1.4rem" }}
              color="#666"
              lineHeight="1.6"
            >
              Co-founded Prod Israel. Right now I'm interested in LLMs alignment
              and agents orchestration. I'm a dive master and a photographer.
            </Text>
          </div>

          {/* Social Icons */}
          <HStack gap={4} mt={4}>
            <Link
              href="https://x.com/jen_ben_arye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                aria-label="X (Twitter)"
                variant="ghost"
                color="#666"
                _hover={{ color: "#000" }}
                size="md"
              >
                <FaXTwitter />
              </IconButton>
            </Link>
            <Link
              href="https://linkedin.com/in/jen-ben-arye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                aria-label="LinkedIn"
                variant="ghost"
                color="#666"
                _hover={{ color: "#000" }}
                size="md"
              >
                <FaLinkedin />
              </IconButton>
            </Link>
            <Link href="mailto:jen_ben@mit.edu">
              <IconButton
                aria-label="Email"
                variant="ghost"
                color="#666"
                _hover={{ color: "#000" }}
                size="md"
              >
                <MdEmail />
              </IconButton>
            </Link>
            <Link
              href="https://github.com/jenbenarye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                aria-label="GitHub"
                variant="ghost"
                color="#666"
                _hover={{ color: "#000" }}
                size="md"
              >
                <FaGithub />
              </IconButton>
            </Link>
          </HStack>
        </Stack>
      </div>
    </Box>
  );
}
