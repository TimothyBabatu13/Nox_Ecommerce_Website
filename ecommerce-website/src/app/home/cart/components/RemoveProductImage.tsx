'use client';

import { ProductCancel } from "@/components/SVGs"
import { useCartContext } from "@/context/CartContext";


interface RemoveProductImageProps {
    id: any
}
const RemoveProductImage = ({ id } : RemoveProductImageProps) => {
  const { func } = useCartContext();

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