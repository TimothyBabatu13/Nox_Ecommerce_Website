'use client';

import { ProductCancel } from "@/components/SVGs"
import { CartContextProvider } from "@/context/CartContext";
import { useContext } from "react";

interface RemoveProductImageProps {
    id: any
}
const RemoveProductImage = ({ id } : RemoveProductImageProps) => {
  const { func } = useContext(CartContextProvider);

    const handleDelete = (id : any) => {
        func((prev : any[]) => (
          prev.filter(item => item.id !== id)
        ))
    }
  return (
    <button onClick={()=>handleDelete(id)} className="absolute top-[-20px] right-[-10px]"><ProductCancel /></button>
  )
}

export default RemoveProductImage