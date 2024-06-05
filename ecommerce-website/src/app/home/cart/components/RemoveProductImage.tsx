'use client';

import { ProductCancel } from "@/components/SVGs"

interface RemoveProductImageProps {
    id: any
}
const RemoveProductImage = ({ id } : RemoveProductImageProps) => {
    const handleDelete = (id : any) => {
        console.log(id)
        return;
    }
  return (
    <button onClick={()=>handleDelete(id)} className="absolute top-[-20px] right-[-10px]"><ProductCancel /></button>
  )
}

export default RemoveProductImage