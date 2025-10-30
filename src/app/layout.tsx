import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Providers from "./providers";
import "./globals.css";


const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: "Jen Ben Arye",
  description: "My corner of the web",
  icons: {
    icon: { url: "/site-icon.png", type: "image/png", sizes: "250x250" },
  },
  openGraph: {
    type: "website",
    url: "https://www.jenbenarye.com/",
    title: "Jen Ben Arye",
    description: "My corner of the web",
    siteName: "Jen Ben Arye",
    images: [{ url: "/site-icon-1000.png"}]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jen Ben Arye",
    description: "My corner of the web",
    images: "https://www.jenbenarye.com/site-icon-1000.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
