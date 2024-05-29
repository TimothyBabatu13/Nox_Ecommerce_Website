import Image from "next/image"

interface WhatWeOfferComponentType {
    src: string,
    title: string,
    text: string
}

const WhatWeOfferComponent = ({ src, title, text } : WhatWeOfferComponentType) => {
    return(
        <div
            className="flex flex-col items-center justify-center"
        >
            <Image 
                src={src}
                height={64}
                width={64}
                alt="what we offer"
                className="mb-[8px]"
            />
            <h1
                className=" text-primary text-[17px] font-sixHundrend mb-[4px]"
            >
                {title}
            </h1>
            <h2
                className=" text-primary text-[13px] font-fourHundrend"
            >
                {text}
            </h2>
        </div>
    )
}


const data : WhatWeOfferComponentType[] = [
    {
        text: "When order from $500",
        src: "/delivery.svg",
        title: "24 hrs Delivery"
    },
    {
        text: "Free Shipping on all order",
        src: "/policy.svg",
        title: "Return Policy"
    },
    {
        text: "Free Shipping on all order",
        src: "/support.svg",
        title: "24/7 Support"
    },
    {
        text: "Free Shipping on all order",
        src: "/secure_payment.svg",
        title: "Secure Payment"
    },
]

const WhatWeOffer = () => {
  return (
    <div
        className="py-[33px] bg-secondary flex items-center justify-around mt-[150px]"
    >
        {data.map((item, id)=>(
            <WhatWeOfferComponent 
                src={item.src}
                title={item.title}
                text={item.text}
                key={id}
            />
        ))}   
    </div>
  )
}

export default WhatWeOffer