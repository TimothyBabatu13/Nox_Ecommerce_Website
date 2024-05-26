import Image from "next/image"
import Reviews from "./Reviews"
import Link from "next/link"


interface cardType {
    img: string,
    text: string,
    price: number,
    discountPrice: number,
    noOfReviews: number,
    id: string
}

const Card = ({ 
    img, text, price, discountPrice, noOfReviews, id } 
    : cardType
) => {
  return (
    <Link
        className="text-center w-[474]"
        href={`/home/${id}`}
    >
       <Image
        src={img}
        height={474}
        width={493}
        alt="best"
        className="mb-[32px] w-full h-[350px] md:h-auto"
       />
       <h2 
        className=" text-eighteen text-[#574240] font-fourHundrend"
       >{text}</h2>
       <h2
        className="text-[19px] font-sixHundrend text-[#1D1615] mt-[10px] mb-[6px]"
       >${discountPrice} <span className="text-[#C7C0BF] text-[17px] font-[500] line-through">${price}</span>
       </h2>
       <Reviews clx="justify-center" noOfReviews={noOfReviews}/>
    </Link>
  )
}

export default Card