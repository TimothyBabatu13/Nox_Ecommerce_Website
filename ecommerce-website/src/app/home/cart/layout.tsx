import type { Metadata } from "next";
import CartHeader from "./components/Header";


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

interface layoutType {
  children: any,
  id: string
}
export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main>
    <CartHeader noOfCart={1}/>
      {children}
   </main>
  );
}
