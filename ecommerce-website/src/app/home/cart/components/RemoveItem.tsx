'use client'

import { RemoveButton } from "@/components/SVGs"
import {  useCartContext } from "@/context/CartContext"


interface RemoveItemProp {
    id: any
}

const RemoveItem = ( { id } : RemoveItemProp) => {

    const { func } = useCartContext();

    const handleRemove = () => {
        func((prev : any[]) => (
          prev.filter(item => item.id !== id)
        ))
    }
  return (
    <button className="flex items-center justify-center" onClick={handleRemove}>
        <RemoveButton />
    </button>
  )
}

export default RemoveItem