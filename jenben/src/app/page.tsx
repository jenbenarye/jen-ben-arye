import { Text, Stack, Link, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      padding={{ base: "48px 32px", md: "96px 80px" }}
      backgroundColor="#f2f2f2"
      color="#4a4a4a"
      minHeight="100vh"
      fontFamily='"JetBrains Mono", monospace'
      fontSize="14px"
      lineHeight="1.4"
    >
      {/* Main Content */}
      <div style={{ maxWidth: '880px', margin: '0 auto', padding: '60px' }}>
        <Stack gap={10}>
          {/* Header */}
          <Box maxW="760px">
            <Text style={{ color: '#666', fontSize: '15px', marginBottom: '8px' }}>// hello </Text>
            <Text style={{ fontSize: '42px', lineHeight: '1.3', color: '#333', marginTop: '20px' }}>
              i'm studying CS and AI at MIT.
              previously worked at
              Decart, MIT CSAIL, and 8200.
              i co-founded Prod Israel.
            </Text>
          </Box>

          {/* About Section */}
          <div>
            <Text style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
              right now i'm interested in LLMs alignment and agents orchestration.
              i'm a dive master and a photographer.
            </Text>
          </div>
          {/* Navigation */}
          <div>
            <Stack direction="row" style={{ color: '#666' }}>
              <Link href="/projects" fontSize='15px' color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>projects</Link>
              <Text> / </Text>
              <Link href="/solo" fontSize='15px' color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>solo</Link>
              <Text> / </Text>
              <Link href="https://github.com/jenbenarye" fontSize='15px' color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>github</Link>
              <Text> / </Text>
              <Link href="https://linkedin.com/in/jen-ben-arye" fontSize='15px' color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>linkedin</Link>
              <Text> / </Text>
              <Link href="mailto:jen_ben@mit.edu" fontSize='15px' color="#666" textDecoration="underline" _hover={{ color: "#000", textDecoration: "underline" }}>email</Link>

            </Stack>
          </div>
        </Stack>
      </div>
    </Box>
  );
}
