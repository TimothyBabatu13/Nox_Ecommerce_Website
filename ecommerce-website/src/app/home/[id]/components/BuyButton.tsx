'use client';
import { AddIcon, Cart, LikeIcon, SubtractIcon } from "@/components/SVGs";
import { useState } from "react"
import Buttons from "../../components/Buttons";



interface BuyNowButtonType{
    src: any,
    text: string,
    onClick: any,
    clx: string,
    textClx: string
}
const BuyNowButton = ({ src, text, onClick, clx, textClx }: BuyNowButtonType) => {
    return(
        <button
            onClick={onClick}
            className={`flex items-center justify-center transition-all py-[0px] px-[20px] rounded-[5px] ${clx}`}
        >
           {src}
            <div
                className={`text-sixteen font-sixHundrend ${textClx}`}
            >{text}</div>
        </button>
    )
}
const BuyButton = () => {

    const [quantity, setQuantity] = useState<number>(1);

    const handleAddQuantity = () =>{
        setQuantity(prev => prev + 1);
    }

    const handleReduceQuantity = () => {
        setQuantity(prev =>{
            if(prev === 1) return 1;
            return prev - 1;
        })
    }

    const handleBuy = () => {

    }
    const handleSave = () => {
        
    }

  return (
    <div
        className="flex border-t border-t-[#BFA5A3] border-b border-b-[#BFA5A3] py-[32px]"
    >
        <h3 className="flex items-center mr-[10px]">QTY:</h3>
        <div
            className="flex mr-[10px]"
        >
            <Buttons 
                src={<SubtractIcon />}
                onClick={handleReduceQuantity}
            />
            <div
                className="w-[46px] h-[48px] text-sixteen  font-[500] text-[#1D1616] border border-[#BFA5A3] flex items-center justify-center"
            >
                {quantity}
            </div>
            <Buttons 
                src={<AddIcon />}
                onClick={handleAddQuantity}
            />
        </div>
        <BuyNowButton 
            clx="bg-primary mr-[10px] hover:bg-[#af1313bb]"
            onClick={handleBuy}
            text="Buy now"
            src={<Cart clx="mr-[8px]"/>}
            textClx="text-primary"
        />
        <BuyNowButton 
            clx="border-[1.5px] border-[#AF1313] hover:opacity-[0.8] "
            onClick={handleSave}
            text="Save for later"
            src={<LikeIcon clx="mr-[8px]" />}
            textClx="text-secondary"
        />
    </div>
  )
}

export default BuyButton