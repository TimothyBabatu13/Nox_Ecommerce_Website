'use client'

import { RemoveButton } from "@/components/SVGs"
import { CartContextProvider } from "@/context/CartContext"
import { useContext } from "react"


interface RemoveItemProp {
    id: any
}

const RemoveItem = ( { id } : RemoveItemProp) => {

    const { func } = useContext(CartContextProvider);

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