'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Scroll = () => {
     
    const [previousURL, setPreviousURL] = useState<string[]>([]);
    const pathName : string = usePathname();
    const path : string[] = pathName.split("/");

    useEffect(()=>{
        
        if(previousURL.length){
            const neededNumber : string = previousURL[previousURL.length -1].split("/")[2];
            if(path[2] === neededNumber) return;
        }

        setPreviousURL(prev => [...prev, pathName]);

        if(path.length === 4) return;
        window.scroll(0,0);

    }, [pathName])
  return <></>;
}

export default Scroll