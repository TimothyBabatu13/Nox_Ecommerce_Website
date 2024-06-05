import { CartIconIcon } from "@/components/SVGs"

const EmptyCart = () => {
  return (
    <section className="w-full h-[589px] border-[2px] bg-[#FFFFFF] border-[#BFA5A3] flex flex-col items-center justify-center mt-[62px]">
        <CartIconIcon />
        <h2 className="text-[#574240] text-[32px] font-sixHundrend mt-[48px] mb-[16px]">Your cart is empty</h2>
        <h5 className="text-[#BFA5A3] text-eighteen font-fourHundrend">You have not added any item to your cart.</h5>
    </section>
  )
}

export default EmptyCart