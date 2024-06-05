import Image from "next/image"

interface DeliveryInfoCardsType {
    src: string,
    title: string,
    text: string
}
const DeliveryInfoCards = ({ src, text, title }: DeliveryInfoCardsType) => {
  return (
    <div className="flex items-center">
        <div className="border relative border-[#574240] h-[56px] w-[56px] flex items-center justify-center rounded-[5px] mr-[32px]">
            <Image 
                width={32}
                height={32}
                src={src}
                alt="delivery info"
            />
            <div className="absolute text-[15px] text-[#000000] font-[500]">7</div>
        </div>
        <div>
            <h1 className=" text-[#574240] text-[20px] font-sixHundrend mb-[4px]">{title}</h1>
            <h4 className="text-[#BFA5A3] text-[15px] font-fourHundrend">{text}</h4>
        </div>
    </div>
  )
}

export default DeliveryInfoCards