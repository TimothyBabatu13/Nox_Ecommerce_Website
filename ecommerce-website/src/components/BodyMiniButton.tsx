
import Link from "next/link";
import css from "@/components/ButtonTransition.module.css";
import { LinkIcon } from "./SVGs";


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
        <LinkIcon 
          clx={`ml-[4px]`}
        />
    </Link>
  )
}

export default BodyMiniButton