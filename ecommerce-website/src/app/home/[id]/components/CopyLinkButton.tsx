'use client';

import { Link1 } from "@/components/SVGs";
import { usePathname } from "next/navigation";
import { useState } from "react";


const CopyLinkButton = () => {
    
    const [copy, setCopy] = useState<boolean>(false);

    const pathName : string = usePathname();


    const handleClick = () => {
        let path : string = pathName
        const pathNameArray : string[] = pathName.split("/");
        if(pathNameArray.length === 4){
            const newArr = [pathNameArray[0], pathNameArray[1], pathNameArray[2]];
            path = newArr.join("/");
        }
        const baseURL = 'http://localhost:3000'
        const url = `${baseURL}${path}`;
        navigator.clipboard.writeText(url).then(res => {
            setCopy(true)
        })
        .catch(err => setCopy(false))
    } 

  return (
    <button 
        onClick={handleClick}
        className={`flex w-[120px] py-[14px] rounded-[5px] justify-center items-center border border-[#BFA5A3]`}>
       <Link1 />
        <h5
            className="text-[#BFA5A3] font-[500] text-fourteen"
        >
            {copy ? "Copied" : "Copy Link"}
        </h5>
    </button>
  )
}

export default CopyLinkButton