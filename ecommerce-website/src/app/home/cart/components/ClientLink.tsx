'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface ClientLinkProps {
    href : string,
    text: string,
    path: string
}

const ClientLink = ({ href, text, path } : ClientLinkProps) => {
    const pathName : string = usePathname();
    const color : string = path === pathName ? "#574240" : "#141414"
    // useEffect(()=> {
    //     console.log(pathName);
    // }, [pathName])
  return (
    <Link className={` text-[32px] font-sixHundrend text-[${color}]`} href={href}>{text}</Link>
  )
}

export default ClientLink
