import Image from "next/image"
import BodyButton from "./BodyButton"

const IMAGE = ()=> {
    return(
        <div>
            <Image src="/speaker.svg" height={644} width={531} alt="speaker"/>
        </div>
    )
}
const Model = () => {
  return (
    <main className="grid grid-cols-3 place-items-center gap-[60px] mt-[174px] mb-[22px]">
        <div>
            <h1 className="font-sevenHundred text-thirtyFive">Models That Meet</h1>
            <h1 className="font-sevenHundred text-thirtyFive mb-[24px]">Your Needs</h1>
            <h5 className="text-[#909090] text-fourteen font-fourHundrend">We are dedicated to producing the best audio technology and</h5>
            <h5 className="text-[#909090] text-fourteen font-fourHundrend mb-[40px]">helping more people enjoy music than ever before.</h5>
            <BodyButton 
                href="/"
                text="See More Products"
                props=""
            />
        </div>
        <IMAGE />
        <IMAGE />
    </main>
  )
}

export default Model