'use client';

import { useCallback, useState } from "react";
import Buttons from "../../components/Buttons";
import { AddIcon, SubtractIcon } from "@/components/SVGs";
import { useCartContext } from "@/context/CartContext";

interface QuantityButtonProps {
    num : number,
    id: any
}

const QuantityButton = ({ num, id } : QuantityButtonProps) => {

    const { func } = useCartContext();

    const [quantity, setQuantity] = useState<number>(num);

    
    const handleChange = (q: number) => {
        func((prev : any[]) => (
            prev.map(item =>{
                return item.id === id ? {...item, quantity: q} : {...item};
            })
        ))
    }

    const handleAddQuantity = () =>{
        handleChange(quantity + 1);
        setQuantity(prev => prev + 1);
    }


    const handleReduceQuantity = () => {
        setQuantity(prev =>{
            if(prev === 1) return 1;
            return prev - 1;
        })
        if(quantity - 1 === 0) return;
        handleChange(quantity - 1);
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