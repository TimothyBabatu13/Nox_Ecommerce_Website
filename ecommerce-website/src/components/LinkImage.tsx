import Image from "next/image"
import Link from "next/link"

interface LinkImageData {
    href: string,
    src: string,
    text: string,
}

const LinkImage = ({ href, src, text } : LinkImageData) => {
  return (
    <Link 
        href={href}
        className="hidden md:flex items-center text-[#737373] text-sixteen font-fourHundrend ml-[20px]"
    >
        <Image 
            src={src}
            height={21}
            width={24}
            alt="like"
            className="mr-[8px]"
        />
        <h4>{text}</h4>
    </Link>
  )
}

export default LinkImage