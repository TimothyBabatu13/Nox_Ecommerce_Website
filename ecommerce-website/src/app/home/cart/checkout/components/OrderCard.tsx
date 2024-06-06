import Image from "next/image"

interface OrderCardProps {
    src: string,
    quantity: number,
    price: number
}
const OrderCard = ({ src, quantity, price } : OrderCardProps) => {
  return (
    <section className="flex items-center shadow shadow-[#BFA5A3] p-[8px] mb-[24px]">
        <Image 
            height={144}
            width={144}
            src={src}
            alt="image"
            className="mr-[16px]"
        />
        <div>
            <h3 className="text-[12px] font-fourHundrend text-[#BFA5A3] mb-[8px]">Seller: Nike Stores</h3>
            <h5 className=" text-sixteen font-sixHundrend text-[#574240] mb-[24px]">Solid pattern in fashion summer dress</h5>
            <div className="flex justify-between items-center">
                <h5 className=" text-[12px] font-fourHundrend text-[#BFA5A3]">Qty: {quantity}</h5>
                <h6 className=" text-[20px] font-sixHundrend text-[#574240]">${price}</h6>
            </div>
        </div>
    </section>
  )
}

export default OrderCard