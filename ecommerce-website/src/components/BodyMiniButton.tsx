
import Link from "next/link";
import Image from "next/image";

interface data {
    link: string,
    text: string,
    props: string
}
const BodyMiniButton = ({ link, text, props }: data) => {
  return (
    <Link 
        href={link}
        className={`flex ${props != undefined ? props : ""}`}
    >   {text} 
        <Image 
            width={22}
            height={20} 
            alt="link" 
            src="/link.svg"
            className="ml-[4px]"
        />
    </Link>
  )
}

export default BodyMiniButton