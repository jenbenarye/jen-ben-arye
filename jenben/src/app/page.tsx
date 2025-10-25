import { Box, Text, Stack, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      p={8}
      bg="black"
      color="white"
      minH="100vh"
      className="terminal-style"
      style={{
        fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace",
        fontSize: '13px',
        lineHeight: '1.4',
        fontWeight: '400',
        letterSpacing: '0',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}
    >
      <Stack maxW="800px" gap={2}>
        {/* Terminal header */}
        <Text color="gray.400" fontSize="12px" mb={4}>
          jenben@portfolio:~$
        </Text>

        {/* Main content as terminal output */}
        <Text color="green.300">
          $ whoami
        </Text>
        <Text ml={4} mb={4}>
          Jen Ben Arye
        </Text>

        <Text color="green.300">
          $ cat about.txt
        </Text>
        <Text ml={4} mb={4}>
          Hello.<br/>
          I'm a junior @ MIT studying Computer Science and AI, originally from Israel. <br/>
          I've worked at Decart, MIT CSAIL, and 8200. <br/>
          I co-founded and ran Prod Israel. <br/>
          I’m a dive master and a photographer.
        </Text>

        <Text color="green.300">
          $ ls -la
        </Text>
        <Text ml={4} mb={4}>
          drwxr-xr-x 2 jenben jenben 4096 Jan 2024 <Link href="/about" color="blue.300" textDecoration="underline">about/</Link><br/>
          drwxr-xr-x 2 jenben jenben 4096 Jan 2024 <Link href="/projects" color="blue.300" textDecoration="underline">projects/</Link><br/>
          -rw-r--r-- 1 jenben jenben 1024 Jan 2024 <Link href="/contact" color="blue.300" textDecoration="underline">contact.txt</Link>
        </Text>

        <Text color="green.300">
          $ <Text as="span" color="yellow.300">cd</Text> <Text as="span" color="white">about</Text>
        </Text>

        {/* Cursor */}
        <Text color="white" fontSize="16px" mt={2}>
          █
        </Text>
      </Stack>
    </Box>
  );
}
