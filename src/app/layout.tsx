import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Providers from "./providers";
import NavBar from "./components/NavBar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jen Ben Arye",
  description: "My corner of the web",
  metadataBase: new URL("https://www.jenbenarye.com"),
  icons: {
    icon: [
      { url: "/site-icon.png", type: "image/png", sizes: "250x250" },
      { url: "/site-icon-1000.png", type: "image/png", sizes: "1000x1000" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.jenbenarye.com/",
    title: "Jen Ben Arye",
    description: "My corner of the web",
    siteName: "Jen Ben Arye",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jen Ben Arye",
    description: "My corner of the web",
    images: "/site-icon-1000.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
