'use client';

import { useCallback, useContext, useState } from "react";
import Buttons from "../../components/Buttons";
import { AddIcon, SubtractIcon } from "@/components/SVGs";
import { CartContextProvider } from "@/context/CartContext";

interface QuantityButtonProps {
    num : number,
    id: any
}

const QuantityButton = ({ num, id } : QuantityButtonProps) => {

    const { details, func } = useContext(CartContextProvider);

    const [quantity, setQuantity] = useState<number>(num);


    const handleChange = () => {
        func((prev : any[]) => (
            prev.map(item =>{
                return item.id === id ? {...item, quantity} : {...item};
            })
        ))
    }
    const handleAddQuantity = useCallback(() =>{
        
        handleChange();
        setQuantity(prev => prev + 1);
    }, [quantity])



    // console.log(details)
    const handleReduceQuantity = () => {
        setQuantity(prev =>{
            if(prev === 1) return 1;
            return prev - 1;
        })
        handleChange()
    }

  return (
    <main className="flex items-center">
        <Buttons 
                src={<SubtractIcon />}
                onClick={handleReduceQuantity}
            />
        <div className="h-[48px] w-[75px] flex justify-center items-center border border-[#141414]">{quantity}</div>
        <Buttons 
                src={<AddIcon />}
                onClick={handleAddQuantity}
            />
    </main>
  )
}

export default QuantityButton