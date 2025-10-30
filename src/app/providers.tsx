"use client";
import { useState, type ReactNode } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";

function ChakraCacheProvider({ children }: { children: ReactNode }) {
  const [cache] = useState(() => {
    const newCache = createCache({ key: "chakra", prepend: false });
    newCache.compat = true;
    return newCache;
  });

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(""),
      }}
    />
  ));

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraCacheProvider>
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    </ChakraCacheProvider>
  );
}
