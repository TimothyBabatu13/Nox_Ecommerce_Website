import Image from "next/image"

interface ImageWIthTextType {
    text: string,
    clx: string,
    src: string
}

const ImageWithText = ({ text, clx, src } : ImageWIthTextType) => {
    return(
        <div className="flex items-center">
            <Image 
                src={src}
                width={40}
                height={40}
                alt="gift icon"
                className={`${clx} mr-[15px]`}
            />
            <h5 className="text-[#574240] text-[13px] font-fourHundrend">{text}</h5>
        </div>
    )
}
const PaymentOp = () => {
  return (
    <div className="flex justify-between border-b border-[#BFA5A3] py-[42px]">
        <ImageWithText 
            src="/gift.svg"
            clx={""}
            text="Pickup & Pay on Collection Available"
        />
        <ImageWithText 
            src="/gift2.svg"
            clx={""}
            text="Pay on Delivery Available"
        />

    </div>
  )
}

export default PaymentOp