import Image from "next/image"
import BodyButton from "./BodyButton"
import BodyMiniButton from "./BodyMiniButton"

interface H1Data {
    text: string
}

const H1 = ({ text }: H1Data ) => {
    return(
        <h1 className=" text-thirtyFive font-sevenHundred text-center md:text-left leading-[1.2]">{text}</h1>
    )
}

const H5 = ({ text} : H1Data ) => {
    return(
        <h5 className="text-[#909090] text-fourteen font-fourHundrend mt-[16px] mb-[40px]">{text}</h5>
    )
}

const Review = () => {
  return (
    <main className="flex flex-col md:flex-row items-center mb-[162px]">
        <div >
            <H1 
                text="What People Say"
            />
            <H1
                text="About Our Product"
            />
            <H5 
                text="Feedback from these happy customers helps us in reaching the heights"
            />
            <div className="flex items-center">
                <BodyButton 
                    text="Shop Now"
                    href="/"
                    props=""
                />
                <BodyMiniButton 
                    link="/"
                    text="See All Reviews"
                    props="ml-[32px]"
                />
            </div>
        </div>
        <Image 
                src="/review.svg"
                // width={1035}
                width={500}
                // height={744}
                height={800}
                alt=""
            />
    </main>
    
  )
}

export default Review