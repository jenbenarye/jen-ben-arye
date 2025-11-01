import { Text, Stack, Link, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      padding={{ base: "3rem 1.5rem", md: "6rem 4rem" }}
      backgroundColor="#f2f2f2"
      color="#4a4a4a"
      minHeight="100vh"
      fontFamily='"JetBrains Mono", monospace'
      lineHeight="1.4"
    >
      {/* Main Content */}
      <div style={{ maxWidth: '880px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <Stack gap={10}>
          {/* Header */}
          <Box maxW="760px">
            <Text
              fontSize='1rem'
              color='#666'
              marginBottom='1rem'
            >
            // hello
            </Text>

            <Text
              fontSize={{ base:'1.5rem', md:'2.8rem'}}
              color='#333'
              lineHeight='1.3'
              marginTop='1.5rem'
            >
              I study CS and AI at MIT.
              Previously worked at Decart, MIT CSAIL, and IDF's 8200.
              Co-founded Prod Israel.
            </Text>
          </Box>

          {/* About Section */}
          <div>
            <Text
            fontSize={{ base:'1rem', md:'1.4rem' }}
            color='#666'
            lineHeight='1.6'
            >
              Right now I'm interested in LLMs alignment and agents orchestration.
              I'm a dive master and a photographer.
            </Text>
          </div>

          {/* Navigation */}
          <div>
            <Stack direction="row" flexWrap="wrap" color='#666'>
              <Link href="/projects" fontSize={{ base:'0.9rem', md:'1rem'}} color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>projects</Link>
              <Text> / </Text>
              <Link href="/solo" fontSize={{ base:'0.9rem', md:'1rem'}} color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>solo</Link>
              <Text> / </Text>
              <Link href="https://github.com/jenbenarye" fontSize={{ base:'0.9rem', md:'1rem'}} color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>github</Link>
              <Text> / </Text>
              <Link href="https://linkedin.com/in/jen-ben-arye" fontSize={{ base:'0.9rem', md:'1rem'}} color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>linkedin</Link>
              <Text> / </Text>
              <Link href="mailto:jen_ben@mit.edu" fontSize={{ base:'0.9rem', md:'1rem'}} color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>email</Link>
            </Stack>
          </div>
        </Stack>
      </div>
    </Box>
  );
}
