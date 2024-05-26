
import Link from "next/link";
import Image from "next/image";
import css from "@/components/ButtonTransition.module.css";


interface data {
    link: string,
    text: string,
    props: string
}
const BodyMiniButton = ({ link, text, props }: data) => {
  return (
    <Link 
        href={link}
        className={`flex ${css.bu} ${props != undefined ? props : ""}`}
    >   <div className={css.miniButton}>{text}</div>
        <Image 
            width={22}
            height={20} 
            alt="link" 
            src="/link.svg"
            className={`ml-[4px]`}
        />
    </Link>
  )
}

export default BodyMiniButton