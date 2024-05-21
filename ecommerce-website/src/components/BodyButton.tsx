import Link from "next/link"
import Image from "next/image"
interface data {
    href: string,
    text: string,
    props: string
}

const BodyButton = ({ href, text, props } : data) => {
    
  return (
    <Link 
        className={`bg-primary text-primary font-sixHundrend text-sixteen py-[16px] px-[24px] flex items-center w-fit rounded-[5px] ${props != undefined ? props : ""}`} 
        href={href}
            >{text} 
                <Image 
                    height={20} 
                    width={20} 
                    alt="dropdown" 
                    src={"/dropdown.svg"}
                    className="ml-[20px]" 
                />
            </Link>
  )
}

export default BodyButton