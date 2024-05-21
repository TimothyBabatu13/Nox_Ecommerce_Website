import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MARCSONIC",
  description: "Marcsonic - Home of shopping",
  twitter: {
    card: "summary_large_image",
    title: "MARCSONIC",
    description: "Marcsonic - Home of shopping",
    siteId: "",
    creator: "@timothy_akanbii",
    creatorId: "",
    images: []
  },
  openGraph: {
    title: "MARCSONIC",
    description: "Marcsonic - Home of shopping",
    url: "",
    siteName: "Marcsonic",
    images: [
      {
        url: "",
        width: 800,
        height: 800
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Wrapper>
          <Header />
        </Wrapper>
        {children}
        <Footer />
      </body>
    </html>
  );
}
