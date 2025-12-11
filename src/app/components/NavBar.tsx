"use client";
import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "hello" },
    { href: "/projects", label: "projects" },
    { href: "/solo", label: "solo" },
  ];

  if (!mounted) {
    return (
      <Box
        position="absolute"
        top={{ base: "2.5rem", md: "4rem" }}
        right={{ base: "2.5rem", md: "35rem" }}
        zIndex={100}
        fontFamily='"JetBrains Mono", monospace'
      >
        <HStack gap={3}>
          {navItems.map((item, index) => (
            <HStack key={item.href} gap={3}>
              <Link
                href={item.href}
                fontSize={{ base: "1rem", md: "1rem" }}
                color="#666"
                fontWeight="normal"
                _hover={{ color: "#333", textDecoration: "underline" }}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <Text
                  fontSize={{ base: "1rem", md: "1rem" }}
                  color="#666"
                ></Text>
              )}
            </HStack>
          ))}
        </HStack>
      </Box>
    );
  }

  return (
    <Box
      position="absolute"
      top={{ base: "2.5rem", md: "4rem" }}
      right={{ base: "2.5rem", md: "35rem" }}
      zIndex={100}
      fontFamily='"JetBrains Mono", monospace'
    >
      <HStack gap={3}>
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <HStack key={item.href} gap={3}>
              <Link
                href={item.href}
                fontSize={{ base: "1rem", md: "1rem" }}
                color={isActive ? "#333" : "#666"}
                fontWeight={isActive ? "600" : "normal"}
                _hover={{ color: "#333", textDecoration: "underline" }}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <Text
                  fontSize={{ base: "1rem", md: "1rem" }}
                  color="#666"
                ></Text>
              )}
            </HStack>
          );
        })}
      </HStack>
    </Box>
  );
}
