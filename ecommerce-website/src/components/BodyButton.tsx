import Link from "next/link";
import Image from "next/image";
import css from "@/components/ButtonTransition.module.css";
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
                <Image 
                    height={20} 
                    width={20} 
                    alt="dropdown" 
                    src={"/dropdown.svg"}
                    className={`ml-[20px] ${css.bodyBotton}`} 
                />
            </Link>
  )
}

export default BodyButton