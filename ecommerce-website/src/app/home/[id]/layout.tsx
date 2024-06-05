import type { Metadata } from "next";
import ProductsImage from "./components/ProductsImage";
import ProductsDetails from "./components/ProductsDetails";
import Link from "next/link";
import ClientLinks from "./components/ClientLinks";
import SimilarProducts from "./components/SimilarProducts";
import WhatWeOffer from "./components/WhatWeOffer";
import Scroll from "./components/Scroll";

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

interface data {
    children: any,
    params: any
}
export default function RootLayout({
  children, params 
}: data) {
    
    const { id } = params;
  return (
    <main className="mt-[42px]">
      <Scroll />
      <div 
        className="grid md:grid-cols-2 gap-[40px]"
      >
        <ProductsImage 
          id={id}
        />
        <ProductsDetails 
          id={id}
        />
      </div>
      <ClientLinks id={id}/>
      {children}
      <div className="mt-[99px]">
        <h3 className=" text-[32px] text-[#1D1616] font-sixHundrend mb-[40px]">Similar Items you might Like</h3>
        <SimilarProducts />
      </div>
      <WhatWeOffer />
    </main>
  );
}

