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
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px' }}>
        <Stack gap={10}>
          {/* Header */}
          <Box maxW="760px">
            <Text style={{ color: '#666', fontSize: '13px', marginBottom: '8px' }}>// hello </Text>
            <Text style={{ fontSize: '36px', lineHeight: '1.3', color: '#333', marginTop: '20px' }}>
              i'm studying CS and AI at MIT.
              previously worked at
              Decart, MIT CSAIL, and 8200.
              i co-founded Prod Israel.
            </Text>
          </Box>

          {/* About Section */}
          <div>
            <Text style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
              right now i'm interested in LLMs alignment.
              i'm a dive master and a photographer.
            </Text>
          </div>
          {/* Navigation */}
          <div>
            <Stack direction="row" spacing={2} style={{ color: '#666' }}>
              <Link href="/projects" style={{ color: '#666', textDecoration: 'underline' }}>projects</Link>
              <Text> / </Text>
              <Link href="/solo" style={{ color: '#666', textDecoration: 'underline' }}>solo</Link>
              <Text> / </Text>
              <Link href="/about" style={{ color: '#666', textDecoration: 'underline' }}>about</Link>
            </Stack>
          </div>
          {/* Footer */}
          <div style={{
            borderTop: '1px solid #e5e5e5',
            paddingTop: '40px',
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#666'
          }}>
            <Text>© 2024</Text>
            <Stack direction="row" spacing={4} style={{ color: '#666' }}>
              <Link href="https://github.com" style={{ color: '#666', textDecoration: 'none' }}>github</Link>
              <Link href="https://linkedin.com" style={{ color: '#666', textDecoration: 'none' }}>linkedin</Link>
              <Link href="mailto:" style={{ color: '#666', textDecoration: 'none' }}>email</Link>
            </Stack>
          </div>
        </Stack>
      </div>
    </Box>
  );
}
