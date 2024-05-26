import Image from "next/image"
import Link from "next/link"
import CopyLinkButton from "./CopyLinkButton"

interface SocialHandlesType {
    href: string,
    src: string,
    text: string,
    clx: any
}

const SocialHandles = ({ href, src, text, clx } : SocialHandlesType) => {
    
    return <Link href={href} className={`flex w-[120px] py-[14px] rounded-[5px] justify-center items-center ${clx}`}>
        <Image 
            src={src}
            height={16}
            width={16}
            alt="social media icon"
            className="mr-[5px]"
        />
        <h5
            className="text-primary font-[500] text-fourteen"
        >
            {text}
        </h5>
    </Link>
}

interface dataTpe {
    text: string,
    src: string,
    href: string,
}
const data: dataTpe[] = [
    {
        text: "Facebook",
        src: "/facebook1.svg",
        href: ""
    },
    {
        text: "Twitter",
        src: "/twitter1.svg",
        href: ""
    },
    {
        text: "Whatsapp",
        src: "/whatsapp1.svg",
        href: ""
    }
]
const SocialMediaDetails = () => {
  return (
    <div className="mt-[32px] flex">
        <h5 className=" text-fourteen text-[#574240] font-[500]">Share on:</h5>
       <div
        className="grid grid-cols-4 gap-[40px]"
       >
            {
                data.map((item, id) => {
                    let bg: string = "bg-[#3B5998]"
                    if(id === 1) bg = "bg-[#1DA1F2]"
                    if(id === 2) bg = "bg-[#25D366]"
                return( <SocialHandles 
                        href={item.href}
                        src={item.src}
                        text={item.text}
                        clx={bg}
                        key={id}
                    />)
                })
            }
            <CopyLinkButton />
       </div>
    </div>
  )
}

export default SocialMediaDetails