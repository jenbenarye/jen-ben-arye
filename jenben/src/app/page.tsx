import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={10}>
      <Stack maxW="720px" gap={4}>
        <Heading size="2xl">Jen Ben Arye</Heading>
        <Text>AI @ MIT. RLHF, agents, vision.</Text>
        <Stack direction="row">
          <Button as="a" href="/about">About</Button>
          <Button as="a" href="/projects" variant="outline">Projects</Button>
        </Stack>
      </Stack>
    </Box>
  );
}
