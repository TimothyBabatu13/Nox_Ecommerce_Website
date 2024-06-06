'use client';
import {  useCartContext } from "@/context/CartContext";
import { FormEvent } from "react"


const Form = () => {
    
    const { details } = useCartContext();
    
    if(details.length < 1) return;
    const newArr = details.map(item => item.price * item.quantity);
    const amount = newArr.reduce((a, b) => a + b);

    
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
  return (
    <section className="flex items-center mt-[25px]">
        <form onSubmit={handleSubmit} >
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Coupon Code"
                className="flex-[2] w-[500px] py-[23px] px-[32px] bg-[#F9F6F6] font-fourHundrend text-sixteen text-[#141414] mr-[41px] rounded-[5px]"
            />
            <button 
                type="submit"
                className="border-[2px] border-[#AF1328] py-[16px] px-[48px] text-[#AF1328] text-sixteen font-sixHundrend rounded-[5px]"
            >Apply Coupon</button>
        </form>
        <div className="ml-auto flex items-center">
            <h1 className=" text-[22px] font-sixHundrend text-[#141414]">Total: </h1>
            <div className="ml-[39px]">
                <h4 className="text-right text-[32px] font-sixHundrend text-[#574240] mb-[24px]">${amount}</h4>
                <h5 className=" text-fourteen font-fourHundrend text-[#141414]">Delivery Fee is not included yet</h5>
            </div>
        </div>
    </section>
    
  )
}

export default Form