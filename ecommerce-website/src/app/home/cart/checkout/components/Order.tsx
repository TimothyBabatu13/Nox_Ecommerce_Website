import OrderProducts from "./OrderProducts"
import SubTotal from "./SubTotal"


const Order = () => {
  return (
    <div className="pt-[31px] pb-[4px]">
       <div className="px-[39px]">
            <h1 className=" text-[22px] font-sixHundrend text-[#1D1616] mb-[40px]">YOUR ORDER</h1>
            <OrderProducts />
        </div>
        <div className="mt-[16px]">
            <div className="flex justify-between items-center border-t border-t-[#BFA5A3] py-[24px] px-[40px]">
                <h5 className=" text-sixteen font-[500] text-[#574240]">Subtotal</h5>
                <h6 className=" text-sixteen flex font-[500] text-[#574240]">$<SubTotal /></h6>
            </div>
            <div className="flex justify-between items-center border-t border-t-[#BFA5A3]  py-[24px]  px-[40px]">
                <h5 className=" text-sixteen font-sevenHundred text-[#AF1328]">TOTAL</h5>
                <h6 className="text-[20px] flex font-sevenHundred text-[#AF1328]">$<SubTotal /></h6>
            </div>
        </div>
    </div>
  )
}

export default Order