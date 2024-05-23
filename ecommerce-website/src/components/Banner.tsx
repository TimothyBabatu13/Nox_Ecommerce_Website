import Image from "next/image"
import BodyButton from "./BodyButton"

interface data {
    title: string,
    text: string,
    reverse: boolean
}

const Banner = ({ reverse, title, text } : data) => {
  return (
    <section className={`hidden md:flex ${reverse ? "flex-row-reverse": ""} items-center justify-between bg-[#FAF1FE]`}>
        <div className="w-[50%] text-center">
            <h1 className=" text-thirtyFive font-sevenHundred mb-[16px]">{title}</h1>
            <h5 className="text-[#909090] text-fourteen font-fourHundrend mb-[40px]">{text}</h5>
            <BodyButton 
                href="/"
                text="Shop Now"
                props="mx-auto"
            />
        </div>
        <Image 
            src="/room.svg" 
            width={500} 
            height={590} 
            alt=""
            className=" hidden md:block flex-grow"
        />
    </section>
  )
}

export default Banner