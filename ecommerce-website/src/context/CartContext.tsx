'use client'
import React, { createContext, useState } from "react";


interface dataProps {
    src: string;
    id: number;
    price: number;
    quantity: number
}

interface CartContextProviderProps {
    details: dataProps[],
    func: any
}
export const CartContextProvider = createContext<CartContextProviderProps | null>(null);



const CartContext = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const data = [{
        src: "/speaker.svg",
        id: 0,
        // product: <CartProduct src="/speaker.svg" id={1}/>,
        price: 129.99,
        quantity: 1,
    },
    {
        src: "/speaker.svg",
        id: 1,
        // product: <CartProduct src="/speaker.svg" id={1}/>,
        price: 129.99,
        quantity: 1, 
    },
    {
        src: "/speaker.svg",
        id: 2,
        // product: <CartProduct src="/speaker.svg" id={1}/>,
        price: 129.99,
        quantity: 1,
    },
    {
        src: "/speaker.svg",
        id: 3,
        // product: <CartProduct src="/speaker.svg" id={1}/>,
        price: 129.99,
        quantity: 1, 
    }
]
    const [cartDetails, setCartDetails] = useState<dataProps[]>(data)
   
  return (
    <CartContextProvider.Provider value={{details: cartDetails, func: setCartDetails}}>
        {children}
    </CartContextProvider.Provider>
  )
}

export default CartContext;
