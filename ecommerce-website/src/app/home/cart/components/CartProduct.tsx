import { ProductCancel } from "@/components/SVGs"
import Image from "next/image"
import RemoveProductImage from "./RemoveProductImage"

interface CartProductProps {
    src: string,
    id: any
}

const CartProduct = ({ src, id } : CartProductProps) => {
  return (
    <main className="py-[24px] border-b border-b-[#C4C4C4] flex items-center">
        <div className="relative w-[128px]">
            <Image
                width={128}
                height={140}
                alt="product"
                src={src}
                className=""
            />
            <RemoveProductImage id={id}/>
        </div>
        <div className="ml-[47px]">
            <h5 className=" text-fourteen text-[#141414] font-fourHundrend mb-[8px]">Seller: Nike Stores</h5>
            <h3 className="w-[332px] text-[#574240] text-[20px] font-sixHundrend">Solid pattern in fashion summer dress</h3>
        </div>
    </main>
  )
}

export default CartProduct