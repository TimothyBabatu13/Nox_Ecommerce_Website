'use client';

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface LinkComponentType {
    href: string,
    text: string,
    isActive: boolean
}

const LinkComponent = ({ href, text, isActive } : LinkComponentType)=> {
    return <Link href={href}
        className={`block text-[22px] mr-[72px] py-[16px] ${isActive ? "text-[#1D1616] font-sixHundrend border-b-[3px] border-b-[#1D1616]" : "text-[#BFA5A3] font-[500]"}`}
    >
        {text}
    </Link>
}

interface DataType {
    link: string,
    text: string
}

const data : DataType[] = [
    {
        link: "/home/1/description",
        text: "Description"
    },
    {
        link: "",
        text: "Shipping & Returns"
    },
    {
        link: "",
        text: "Reviews"
    },
]

interface ClientLinksType {
    id: any
}
const ClientLinks = ({ id } : ClientLinksType) => {

    const [number, setNumber] = useState(0);
    const pathname = usePathname();

    const numberOfReviews: number = 8;

    useEffect(()=>{
        
    },[pathname])

  return (
    <div className="mt-[100px] flex  border-b border-b-[#BFA5A3] mb-[40px]">
        {data.map((link, index) => {
            let links: string = "";
            if(index === 0) links = `/home/${id}`;
            if(index === 1) links = `/home/${id}/shipping`;
            if(index === 2) links = `/home/${id}/reviews`

           return <LinkComponent 
                href={links}
                text={index === 2 ? `${link.text} (${numberOfReviews})` : link.text}
                key={index}
                isActive={links === pathname}
            />
        }
        )}
    </div>
  )
}

export default ClientLinks