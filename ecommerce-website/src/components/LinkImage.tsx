import Image from "next/image"
import Link from "next/link"

interface LinkImageData {
    href: string,
    text: string,
    children: any
}

const LinkImage = ({ href, text, children } : LinkImageData) => {
  return (
    <Link 
        href={href}
        className="hidden md:flex items-center text-[#737373] text-sixteen font-fourHundrend ml-[20px]"
    >
        {children}
        <h4>{text}</h4>
    </Link>
  )
}

export default LinkImage