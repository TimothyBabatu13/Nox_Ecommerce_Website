'use client';

import Image from "next/image"
import { usePathname } from "next/navigation";
import { useState } from "react";


const CopyLinkButton = () => {
    
    const [copy, setCopy] = useState(false);

    const pathName = usePathname();


    const handleClick = () => {
        console.log(pathName);
        const baseURL = 'http://localhost:3000'
        const url = `${baseURL}${pathName}`;
        navigator.clipboard.writeText(url).then(res => {
            setCopy(true)
        })
        .catch(err => setCopy(false))
    } 

  return (
    <button 
        onClick={handleClick}
        className={`flex w-[120px] py-[14px] rounded-[5px] justify-center items-center border border-[#BFA5A3]`}>
        <Image 
            src="/link1.svg"
            height={16}
            width={16}
            alt="copy link icon"
            className="mr-[5px]"
        />
        <h5
            className="text-[#BFA5A3] font-[500] text-fourteen"
        >
            {copy ? "Copied" : "Copy Link"}
        </h5>
    </button>
  )
}

export default CopyLinkButton