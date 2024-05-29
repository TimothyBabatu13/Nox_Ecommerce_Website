import Image from "next/image"
import BodyMiniButton from "./BodyMiniButton"

interface data {
    src: string,
    title: string,
    body: string,
    link: string
}

const WhyCard = ({ src, title, body, link }: data) => {
  return (
    <div className=" text-center">
        <Image 
            src={src} 
            height={40} 
            width={40}
            alt={title} 
            className="mb-[32px] mx-[auto]"
        />
        <h1 
            className="text-twentyFour font-sixHundrend text-[#1D1616] mb-[12px]"
        >{title}</h1>
        <h5 
            className="text-[#827F7F] font-fourHundrend text-sixteen mb-[24px]"
        >{body}</h5>
        <BodyMiniButton 
            link={link}
            text="Learn More"
            props="w-fit mx-auto"
        />
    </div>
  )
}

export default WhyCard