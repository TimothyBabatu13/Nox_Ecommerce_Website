import Link from "next/link";
import css from "@/components/ButtonTransition.module.css";
import { Dropdown } from "./SVGs";
interface data {
    href: string,
    text: string,
    props: string
}

const BodyButton = ({ href, text, props } : data) => {
    
  return (
    <Link 
        className={`${css.bu} bg-primary text-primary font-sixHundrend text-sixteen py-[16px] px-[24px] flex items-center w-fit rounded-[5px] transition-all hover:bg-[#af1313d0] ${props != undefined ? props : ""}`} 
        href={href}
            >{text} 
                <Dropdown 
                    clx={`ml-[20px] ${css.bodyBotton}`}
                    color="white"
                />
            </Link>
  )
}

export default BodyButton